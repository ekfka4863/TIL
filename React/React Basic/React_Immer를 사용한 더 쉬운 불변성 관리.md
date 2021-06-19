---
date: 2021-06-13-Sunday, 2021-06-19-Saturday
---

# Immer 를 사용한 더 쉬운 불변성 관리
- 오늘은 Immer 라는 라이브러리를 사용해서 보다 더 쉽게 **불변성**을 지키는 방법에 대해 알아보자.
- 우선, `불변성`이란 <u>불변성이랑 기존의 값을 그대로 유지하면서 새로운 값을 추가하는 것으로 객체가 생성된 이후 그 상태를 변경할 수 없다는 의미다</u>.   
리액트에서 상태는 불변성을 유지해야한다. 왜냐면 의도하지 않은 특정 객체가 변경되면 참조하고 있던 객체에서도 변경이 일어나는 경우가 생기기 때문이다.     
<!-- 리액트는 실제로 DOM을 제어하는 것이 아니라 중간에 가상의 DOM(Virtual DOM)을 두고, 이중에서 변화된 엘리먼트만 리렌더링 해준다.    
그러나 일부  -->
그렇기 때문에 객체를 복사하여 새로운 객체를 생성한 후 변경하는 작업을 통해 불변성을 유지시켜 준다.    
~~객체를 복사하는 방법은 `Object.assign()`과 `스프레드 연산자(...)`가 있다.~~ 
- 다시, 저번에 `Spread 연상자`를 이용해서 객체나 배열의 값을 복사해서 불변성을 유지하는 방법을 배웠었는데, 우리는 불변성을 유지함으로써 side-effect를 줄이고 컴포넌트 최적화가 가능해진다.     
e.g. 
```javascript 
	// 객체 - 불변성 지키기 
	// 만약 아래와 같은 객체가 있는데, 
	const object = {
		a: 1,
		b: 2
	};

	// 만약 객체를 업데이트 해야할 때 값을 직접 수정하는 형태의 코드는 불변성을 지키지 않는 방법이기 때문에 이렇게 하면 안 된다!!!!
	object.b = 3; 

	// 아래와 같이 스프레드 연산자를 사용해서 새로운 객체를 만들고, 기존에 있는 값을 넣어주고, 거기다가 새로운 값을 덮어쓰는 방식이 옳바른 방식이다. 
	// 이렇게 해야 나중에 컴포넌트가 리렌더링도 되고, 나중에 컴포넌트 최적화도 할 수 있게 된다.
	const nextObject = {
		...object,     // 
		b: 3
	};

	// 배열 - 불변성 지키기 
	// 배열도 위와 같은 이유 때문에 push, splice 등의 함수 사용이나 n번째 항목을 직접 수정하면 안되고 concat, filter, map 등의 함수를 사용해야 한다;
	 const todos = [
		{
			id: 1,
			text: '할 일 #1',
			done: true
		},
		{
			id: 2
			text: '할 일 #2',
			done: false
		}
	];

	const inserted = todos.concat({
		id: 3,
		text: '할 일 #3',
		done: false
	});

	const filtered = todos.filter(todo => todo.id !== 2);

	const toggled = todos.map(
		todo => todo.id === 2
			? {
				...todo,
				done: !todo.done,
			}
			: todo
	);
```
- 하지만 문제!!!    
요약하면 편하게 상태를 관리하기 위해 객체 타입을 사용하는데 이는 참조 타입이라 불변성을 유지할 수 없다.    
그래서 기존의 주소 값과 다른 새로운 객체를 생성하여 복사한 뒤 해당 프로퍼티를 바꾸는 작업이 필요한데, 이렇게 복사를 통해 불변성을 계속 유지하려고 하면 코드가 길어지고 구조의 깊이가 깊어질수록 상태는 접근조차 어려워질 수 있다.   
이러한 문제를 해결하기 위해 불변성을 유지시켜주면서 코드를 단순하고 직관적으로 짤 수 있는 라이브러리가 있다.   
바로 오늘 배우게 될 `Immer`이다.   

<br>

> Immer

- `Immer`은 Immutable과 같이 불변성을 유지를 편리하게 해 주는 라이브러리다.
	- `Immer`를 사용하면 불변성을 해치는 코드를 작성해도 대신 불변성 유지를 해준다.   
- 우선, Immer라는 라이브러리를 설치하고 사용법을 알아보자;   
`begin-react` 디렉토리로 가서 아래와 같이 Immer 라이브러리를 설치한다          
```
	$ yarn add immer
	$ npm add immer 
```    
- 사용 방법;
	- App.js 로 가서 App 컴포넌트 상단에서 Immer를 불러온다.    
	보통 `produce`라는 이름으로 불러온다;        
	```javascript
		import React, { useRef, useReducer, useMemo, useCallback } from 'react';
		import produce from 'immer';

		window.produce = produce;   // 크롬에서 produce를 사용하기 위해 필요한 코드 

		// 이하 코드 생략 ...

		export default App;
	```
	- 그리고 `produce` 함수를 사용 할 때는 첫 번째 파라미터에는 <u>수정하고 싶은 상태</u>, 두 번째 파라미터에는 <u>어떻게 업데이트 하고 싶은지를 정의하는 함수</u>를 넣어준다.    
	두 번째 파라미터에 넣는 함수에서는 불변성에 대해서 신경쓰지 않고 그냥 업데이트 해주면 Immer가 다 알아서 해준다.   
	e.g.     
	```javascript
	// 예를 들어 state라는 객체를 하나 만들어 준다 
		const state = {
			number: 1,
			dontChangeMe: 2
		};

	// 그리고 nextState라는 함수를 만든다 
		const nextState = produce(state, draft => {    // 1. 수정하고 싶은 상태 & 2. 어떻게 업데이트 하고 싶은지를 정의하는 함수
			draft.number += 1;      // draft를 참조하고, draft.number의 값에 +1 하면서 값을 업데이트 시킨다 
		});

		console.log(nextState);
		// { number: 2, dontChangeMe: 2 }
	```
	- 다른 예시;    
	e.g.2.     
	```javascript
	// array라는 객체 배열을 만들어 준다 
		const array = [
			{ id: 1, text: 'hello' }, 
			{ id: 2, text: 'bye' }, 
			{ id: 3, text: 'lalalala' }
		];

	// array라는 배열에 변화를 주는 함수를 정의한다 
		const nextArray = produce(array, draft => {
			draft.push({ id: 4, text: 'blahblah' });  // dfart(배열)에다가 push한다. 새로운 항목을 
			draft[0].text = draft[0].text + 'World';  // 그리고 draft의 첫번째 항목의 text에다가 'World' 를 덧붙인다 
		})

		// 위와 같이 코드를 작성하면 nextArray라는 새로운 배열이 생겨나서 원래의 배열에는 아무런 변화가 생기지 않게된다.
		// 이렇게 immer를 사용하면 불변성을 "쉽게" 유지할 수가 있게된다.
	```

<br>

> 리듀서에서 Immer 사용하기
- 이제 `App.js`에 가서 `function reducer() {}` 부분에서 Immer를 사용하는 방법을 살펴보자;    

[App.js]     

```javascript
	// 본래의 App.js 코드  

	import React, { useRef, useReducer, useMemo, useCallback } from 'react';
	import UserList from './UserList';
	import CreateUser from './CreateUser';
	import produce from 'immer';


	function countActiveUsers(users) {
		console.log('활성 사용자 수를 세는중...');
		return users.filter(user => user.active).length;
	}

	const initialState = {
		users: [
			{
				id: 1,
				username: 'velopert',
				email: 'public.velopert@gmail.com',
				active: true
			},
			{
				id: 2,
				username: 'tester',
				email: 'tester@example.com',
				active: false
			},
			{
				id: 3,
				username: 'liz',
				email: 'liz@example.com',
				active: false
			}
		]
	};

	// reducer에서 Immer 사용하는 방법 알아보기;   
	// 이때, Immer를 사용한다 해서 모든 업데이트가 간단해 지는 것은 아니다. 오히려 코드가 길어지는 업데이트도 있다
	function reducer(state, action) {
		switch (action.type) {
			case 'CREATE_USER':
				return {
					users: state.users.concat(action.user)   // 예를 들어, users 배열은 객체의 깊은 곳에 위치하지 ㅇ낳기 때문에 새 항목을 추가하거나 제거할 때는 Immer를 사용하는 것보다 그냥 concat이나 filter를 사용하는 것이 코드가 짧고 편하다 
					// 하지만, 우리는 사용법을 배워보기 위하여 해당 업데이트도 이번 강좌에서 Immer를 사용하여 처리해 주겠다.
				};
			case 'TOGGLE_USER':
				return {
					...state,
					users: state.users.map(user =>
						user.id === action.id ? { ...user, active: !user.active } : user
					)
				};
			case 'REMOVE_USER':
				return {
					...state,
					users: state.users.filter(user => user.id !== action.id)
				};
			default:
				return state;
		}
	}

	// UserDispatch 라는 이름으로 내보내준다.
	export const UserDispatch = React.createContext(null);

	function App() {
		const [{ username, email }, onChange, onReset] = useInputs({
			username: '',
			email: ''
		});
		const [state, dispatch] = useReducer(reducer, initialState);
		const nextId = useRef(4);

		const { users } = state;

		const onCreate = useCallback(() => {
			dispatch({
				type: 'CREATE_USER',
				user: {
					id: nextId.current,
					username,
					email
				}
			});
			onReset();
			nextId.current += 1;
		}, [username, email, onReset]);

		const count = useMemo(() => countActiveUsers(users), [users]);
		return (
			<UserDispatch.Provider value={dispatch}>
				<CreateUser
					username={username}
					email={email}
					onChange={onChange}
					onCreate={onCreate}
				/>
				<UserList users={users} />
				<div>활성사용자 수 : {count}</div>
			</UserDispatch.Provider>
		);
	}

	export default App;
```

[App.js]   -    Immer 사용 후    

```javascript
	import React, { useRef, useReducer, useMemo, useCallback } from 'react';
	import UserList from './UserList';
	import CreateUser from './CreateUser';
	import produce from 'immer';


	function countActiveUsers(users) {
		console.log('활성 사용자 수를 세는중...');
		return users.filter(user => user.active).length;
	}

	const initialState = {
		users: [
			{
				id: 1,
				username: 'velopert',
				email: 'public.velopert@gmail.com',
				active: true
			},
			{
				id: 2,
				username: 'tester',
				email: 'tester@example.com',
				active: false
			},
			{
				id: 3,
				username: 'liz',
				email: 'liz@example.com',
				active: false
			}
		]
	};

	function reducer(state, action) {
		switch (action.type) {
			case 'CREATE_USER':
				return produce(state, draft => {
					draft.users.push(action.user);
				});
			case 'TOGGLE_USER':
				return produce(state, draft => {
					const user = draft.users.find(user => user.id === action.id);
					user.active = !user.active;
				});
			case 'REMOVE_USER':
				return produce(state, draft => {
					const index = draft.users.findIndex(user => user.id === action.id);
					draft.users.splice(index, 1);
				});
			default:
				return state;
		}
	}

	// UserDispatch 라는 이름으로 내보내준다.
	export const UserDispatch = React.createContext(null);

	function App() {
		const [state, dispatch] = useReducer(reducer, initialState);

		const { users } = state;

		const count = useMemo(() => countActiveUsers(users), [users]);
		return (
			<UserDispatch.Provider value={dispatch}>
				<CreateUser />
				<UserList users={users} />
				<div>활성사용자 수 : {count}</div>
			</UserDispatch.Provider>
		);
	}

	export default App;
```
- `TOGGLE_USER` 액션의 경우 확실히 Immer의 사용으로 코드가 깔끔해졌지만 나머지의 경우는 오히려 코드가 좀 복잡해졌다. 

<br>   

📌 그래서 앞으로는 상황에 따라 잘 선택해서 Immer를 사용하면 되곘다.😉

<br>

---

<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/23-immer.html
	- https://xiubindev.tistory.com/99
	- https://estaid.dev/reasons-to-maintain-immutability-with-react/
	- https://velog.io/@bedakim/%EB%B6%88%EB%B3%80%EC%84%B1
	- https://estaid.dev/reasons-to-maintain-immutability-with-react/
	- https://velog.io/@bedakim/%EB%B6%88%EB%B3%80%EC%84%B1 
	
</details>

---
	