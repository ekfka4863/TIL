---
date: 2021-06-12-Saturday 
---

# 커스텀 Hook 만들어서 사용하기
- 컴포넌트를 만들다보면, 반복되는 로직이 자주 발생한다.   
이번에는 로직이 반복되는 상황에서 커스텀 Hooks를 만들어서 반복되는 로직을 쉽게 재사용하는 방법을 알아보겠다.   
- 우선, begin-react 폴더의 src 디렉토리에 가서 Hooks 라는 디렉토리를 만들고, 그 안에 `useInputs.js`라는 파일을 만든다.    
(cf. 커스텀 Hooks를 만들 때는 보통 `use`라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성한다.)  
- 커스텀 Hooks 를 만드는 방법은 굉장히 간단하다.    
그냥 커스텀 Hooks를 담은 파일 안에서 `useState`, `useEffect`, `useReducer`, `useCallback` 등 Hooks를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환해주면 된다.    
이게 무슨 말인지는 코드를 작성하면서 알아보자;    
- e.g.    

[useInputs.js]     

```javascript
	import { useState, useCallback } from 'react';  // 리액트에 내장된 useState, useCallback 훅들을 불러온다

	function useInputs(initialForm) {
		const [form, setForm] = useState(initialForm);   // useState로 다음으로 올 상태 설정해주기!

		const onChange = useCallback(e => {  // cf. useCallback 훅은 useState와는 다르게 진짜 새로 생성되어야 할 상황. 즉, 컴포넌트에 변화가 진짜 있었을 때만 리렌더링 되게 해주는 훅
			const {name, value} = e.target;

			setForm(form => 
				({...form, 
					[name]: value
				})
			)
		}, [])     // props
	}

	export default useInputs;
```
- useInputs.js 작성을 완료했다면 이제 App.js 파일에서 사용해보자.    
단, 이 작업을 하기 위해서는 먼저 App.js에서 `useReducer` 쪽에서 사용하는 inputs 를 모두 없애고 이에 관련된 부분을 `useInputs`를 대체해주어야 한다.     
또한 새로운 항목을 추가할 때 inputs 값을 초기화해야 하므로 데이터 등록후 `reset()`을 호출해줘야 한다.   
코드를 통해 이해해보자;   
e.g.    

[App.js]       

```javascript
	import React, { useRef, useReducer, useMemo, useCallback } from 'react';
	import UserList from './UserList';
	import CreateUser from './CreateUser';
	import useInputs from './Hooks/useInputs';

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
				return {
					users: state.users.concat(action.user)
				};
			case 'TOGGLE_USER':
				return {
					users: state.users.map(user =>
						user.id === action.id ? { ...user, active: !user.active } : user
					)
				};
			case 'REMOVE_USER':
				return {
					users: state.users.filter(user => user.id !== action.id)
				};
			default:
				return state;
		}
	}


	function App() {
		const [{ username, email }, onChange, reset] = useInputs({
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
			reset();
			nextId.current += 1;
		}, [username, email, reset]);

		const onToggle = useCallback(id => {
			dispatch({
				type: 'TOGGLE_USER',
				id
			});
		}, []);

		const onRemove = useCallback(id => {
			dispatch({
				type: 'REMOVE_USER',
				id
			});
		}, []);


		const count = useMemo(() => countActiveUsers(users), [users]);

		return (
			<>
				<CreateUser
					username={username}
					email={email}
					onChange={onChange}
					onCreate={onCreate}
				/>
				<UserList users={users} onToggle={onToggle} onRemove={onRemove} />
				<div>활성사용자 수 : {count}</div>
			</>
		);
	}

	export default App;
```
📌 이렇게 커스텀 Hook을 만들어서 사용하면 컴포넌트의 로직을 분리시켜서 필요 할 때 쉽게 재사용 할 수 있다. 😉

<br>
<br>

---

<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/20-useReducer.html
	- https://xiubindev.tistory.com/99
	- https://www.zerocho.com/category/React/post/5f98e0ba1d7a110004463b7e
	
</details>

---





	