---
date: 2021-06-11-Friday - 2021-06-12-Saturday 
---

# useReducer 를 사용하여 상태 업데이트 로직 분리하기
- 이번에는 `useReducer`라는 새로운 리액트 훅에 대해서 알아보겠다.   
- 이전에 우리가 컴포넌트의 상태를 업데이트 해야할 때는 `useState`를 사용해서 새로운 상태를 설정해 주었는데, 이 외에도 오늘 우리가 배울 `useReducer`라는 훅을 사용해서도 컴포넌트의 상태를 업데이트 할 수 있다. 
- 다만, 차이점이 있다; 
	- useState는 설정하고 싶은 "다음 상태"를 직접 지정해 주는 방법으로 상태를 업데이트 해주는 반면, 
	- useReducer는 `action`이라는 객체를 기반으로 상태를 업데이트 한다; 
		- 여기서 `action 객체`라는 것은 업데이트 할 때 참조하는 객체다.   
		- e.g.   
		```javascript
			dispatch({ type: 'INCREMENT' })
			// 여기서 type이라는 값을 사용해서 어떤 업데이트를 진행할 지를 명시할 수 있고, 
			// 업데이트를 할 때 필요한 참조하고 싶은 다른 값이 있다면 위의 객체 안에 넣을 수도 있다... 
			// 아래와 같이 ...
			dispatch({ type: 'INCREMENT',
									diff: 4 
			})
		```
	- useReducer 함수를 사용하게 되면 **컴포넌트와 상태 업데이트 로직을 컴포넌트에서 분리**하여 <u>컴포넌트 외부에서도 상태 관리를 할 수 있다</u>.    
	즉, useState 함수는 컴포넌트 내부에서만 업데이트 로직을 작성할 수 있지만, useReducer는 컴포넌트 바깥에서도 작성할 수 있고, 또 다른 파일에 작성하여 불러와서 사용할 수도 있다는 장점이 있다.     

<br>

> useReducer 이해하기(/사용 방법)
- 기본 문법;
```javascript
	function reducer(state, action) {  // reducer은 상태를 업데이트 하는 함수다. 다시, reducer함수는 현재 상태인 state와 action 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수다.
		switch (action.type) {         // reducer 함수에서 action.type을 읽어온 다음 
			case 'INCREMEN':             // 만약 읽어온 action.type이 'INCREMEN'라면
				return state + 1;          // 기존 상태인 state에다가 + 1을 한 값을 반환한다 
			case 'DECREMENT':            // 만약 읽어온 action.type이 'DECREMEN'라면
				return state - 1;          // 기존 상태인 state에다가 - 1을 한 값을 반환한다  
			default:      
				return state;
		}
	}

	// 그리고 useReducer를 사용할 땐 아래와 같이 사용한다; 
	const [number, dispatch] = useReducer(reducer, 0);   
	// number는 현재 상태를 의미하고, dispatch는 액션을 발생시키는 함수를 의미한다.
	// 첫번째 파라미터로는 reducer를 넣어주고, 두 번째 파라미터로는 기본값을 넣어준다. 기본값은 숫자, 문자열, 객체, 배열이 될 수 있다.
```
- cf. 여기서 `reducer`란 **현재 상태(state)와 액션객체(action)를 파라미터로 받아와서 새로운 상태로 업데이트 하는/반환해주는 함수**다.     
여기서 action 은 업데이트를 위한 정보를 가지고 있다.
<!-- ```javascript
	// 기본 문법 

	function reducer(state, action) {
		// 새로운 상태를 만드는 로직
		// const nextState = ...
		return nextState;
	}
``` -->

<br>

- App 컴포넌트에서 useReducer를 사용해보기전 우리가 useState를 처음 배울 때 만들었던 Counter.js 컴포넌트에서 useReducer를 사용하여 useReducer에 대해 더 이해해보도록 하자;     
e.g.    

[Counter.js]   
   
```javascript
	// useState를 사용한 기존 Counter 컴포넌트 코드
	import React, { useState } from 'react';

	function Counter() {
		const [number, setNumber] = useState(0);

		const onIncrease = () => {
			setNumber(prevNumber => prevNumber + 1);
		};

		const onDecrease = () => {
			setNumber(prevNumber => prevNumber - 1);
		};

		return (
			<div>
				<h1>{number}</h1>
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
			</div>
		);
	}

	export default Counter; 
```
- 이제 위의 코드에서 useState 대신 useReducer를 사용해보자;    

[Counter.js]   

```javascript
	// import React from 'react';
	import React, { useReducer } from 'react';    // useReducer 사용 

	function reducer (state, action) {   // reducer 함수 --> 상태 업데이트 로직 
		switch (action.type) {
			case 'INCREMENT':
				return state + 1; 
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
		}
	}

	function Counter() {      // Counter 컴포넌트 
		const [number, dispatch] = useReducer(reducer, 0);   // useReducer의 사용... 기본값은 0.

		const onIncrease = () => {
			dispatch({type: 'INCREMENT'});       // dispatch는 액션을 발생시키는 함수를 의미한다 
		};

		const onDecrease = () => {
			dispatch({type: 'DECREMENT'});
		};

		return (
			<div>
				{/* 여기서 number은 현재 상태를 의미*/}
				<h1>{number}</h1>    
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
			</div>
		);
	}

	export default Counter; 
```
- 위의 코드에서 볼 수 있듯이 상태 업데이트 로직인 reducer가 Counter 컴포넌트 밖에 있는 것을 확인 할 수 있다.   

<br>
<br>

> App 컴포넌트를 useReducer 로 구현하기
- 이번에는 우리가 기존에 App 컴포넌트에서 useState를 사용해서 구현했던 상태 업데이트 로직들을 이번에는 useReducer를 사용해서 구현해보겠다.
- 우선, App 에서 사용할 초기 상태를 컴포넌트 바깥으로 분리해주고, App 내부의 로직들을 모두 제거한다;    

e.g.      

[App.js]   

```javascript
import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}


// useReducer를 사용하기 앞서 가장 먼저 해줘야 할 일은...
// App 컴포넌트에서 사용할 객체의 초기 상태(초기값)를 App 컴포넌트 바깥에 선언해주는 것이다. 
const initialState = {
	inputs: {
		username: '',
		email:''
	},
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

// 상태를 업데이트 하는 로직 구현 (단, useReducer를 사용했기 때문에 컴포넌트 바깥에 작성해도 된다!)
function reducer (state, action) {
	switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,     // 불변성을 지키기 위해서 spread 연산자 사용 
          [action.name]: action.value
        }
      };
		case 'CREATE_USER':
			return {
				inputs: initialState.inputs,
				users: state.users.concat(action.user)
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
      // return state;
			throw new Error('Unhandled action');
  }
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState); //seReducer 사용. 초깃값으로 위에서 정해준 initialState를 설정...
	const nextId = useRef(4); // 새로 생성될 user는 id가 4부터 ! 

	const {users} = state;  // 비구조할당으로 풀어줘서 props로 전달할 것
	const {username, email} = state.inputs;

	const onChange = userCallback(e => {
		const {name, value} = e.target;
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value
		})
	}, [])   // props

	const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',    // action 의 이름 ... CREATE_USER
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

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
			<UserList 
				users={users} 
				onToggle={onToggle} 
				onRemove={onRemove} 
			/>
			<div>활성 사용자 수: {count}</div>
		</>
	)
}

export default App;
```
📌 오늘은 기존에 useState를 사용해서 작성한 코드를 모두 useReducer로 전환하는 방법을 공부해봤다!    
그런데 이때 궁금해지는 사항이 하나 있을 수 있겠다:     
바로... 언제 useReducer 쓰고 언제 useState를 사용해야 하는가?    
에 대한 궁금증이다! 

<br>

> useReducer vs useState - 뭐 쓸까?
- 결론부터 얘기하자면 이에 대한 답은 없다.    
상황에 따라 다르다고 밖에 얘기할 수가 없는데, 예를 들어 컴포넌트에서 관리하는 값이 딱 하나고, 그 값이 단순한 숫자, 문자열 또는 boolean 값이라면 확실히 `useState`로 상태 관리를 하는 것이 좋을 것이지만, 만약 컴포넌트에서 관리하는 값이 여러개가 되어 상태의 관리가 복잡해진다면 `useReducer`로 관리하는 것이 편할 수도 있다.    
- 팁:
	- 이에 대한 결정은, 앞으로 사용해 보았을 때 조금 더 편하고 마음에 드는 것으로 선택하면 된다!! 😉

<br>
<br>

---

<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/20-useReducer.html
	- https://xiubindev.tistory.com/99
	- https://xiubindev.tistory.com/104
	
</details>

---





	