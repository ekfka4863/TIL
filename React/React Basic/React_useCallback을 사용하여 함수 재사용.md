---
date: 2021-06-09-Wednesday 
---

# useCallback 을 사용하여 함수 재사용하기
- `useCallback`이란 훅은 지난 번에 배운 `useMemo`와 <u>비슷한</u> 리액트 훅이다.
- `useMemo`는 특정 **결과값**을 재사용 할 때 사용하는 반면, `useCallback`은 <u>특정 **함수**를 새로 만들지 않고 재사용하고 싶을때 사용</u>한다.
- 예시를 통해 이해해보자;   
e.g.    

[App.js]
이전에 App.js 에서 구현했었던 onCreate, onRemove, onToggle 함수를 확인해보자;   

```javascript
	// 새로운 user을 users 배열에 추가해주는 함수 onCreate() 
  const onCreate = () => {    
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
```
- 위의 onCreate, onRemove, onToggle 함수들은 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다. 물론 함수를 선언하는 것 자체는 사실 메모리도, CPU도. 리소스를 그닥 많이 차지 하는 작업은 아니지만, 그럼에도 불구하고 한번 만든 함수를 매번 새로 생성하는 것보다 **필요할때만 새로 만들고 이미 한번 만든 함수를 재사용하는 것은 중요**하다.     
왜냐면 나중에 우리는 컴포넌트에서 props가 바뀌지 않았으면 Virtual DOM에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 할텐데, "최적화 작업"을 위해서는 함수를 재사용하는것이 필수이기 때문이다.
- 그래서 `useCallback`이라는 리액트 훅은 아래와 같이 사용한다;    
e.g.    

[App.js]

```javascript
	// import React from 'react';
	import React, { useRef, useState, useMemo, useCallback } from 'react';     // useRef, useState, useMemo, useCallback 
	import UserList from './UserList';
	import CreateUser from './CreateUser';

	function countActiveUser(users) {
		console.log('활성 사용자 수를 세는 중입니다...');
		return users.filter(user => user.active).length;   // user.active가 true인 것들을 모아 배열을 만들고, 그 배열의 length를 return해준다
	}

	function App() {
		const [inputs, setInputs] = useState({
			username: '',
			email: ''
		});
		const {username, email} = inputs;

		const onChange = useCallback(      // useCallback 사용 
			e => {
				const {name, value} = e.target;
				setInputs({
					...inputs,     
					[name]: value
				});
			}, [inputs]                   // inputs가 deps -> 즉, onChange() 함수는 inputs가 바뀔 때만 함수가 새로 만들어 진다는 의미다. inputs에 변화가 없다면 기존의 이미 만들어진 함수를 재사용하게 된다.
		);
		const [users, setUsers] = useState([
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
		]);
	const nextId = useRef(4);

		const onCreate = useCallback(() => {      // useCallback 사용 
			const user = {
				id: nextId.current,
				username,
				email
			};
			setUsers(users.concat(user));

			setInputs({
				username: '',
				email: ''
			});
			nextId.current += 1;
		}, [users, username, email]);   // 주의!! 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것!! 

		const onRemove = useCallback(      // useCallback 사용 
			id => {
				// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
				// = user.id 가 id 인 것을 제거함
				setUsers(users.filter(user => user.id !== id));
			},
			[users]
		);

		const onToggle = useCallback(      // useCallback 사용 
			id => {
				setUsers(
					users.map(user =>
						user.id === id ? { ...user, active: !user.active } : user
					)
				);
			},
			[users]
		);
		const count = useMemo(() => countActiveUsers(users), [users]);
		return (
			<>
				<CreateUser
					username={username}
					email={email}
					onChange={onChange}
					onCreate={onCreate}
				/>
				<UserList users={users} onRemove={onRemove} onToggle={onToggle} />
				<div>활성사용자 수 : {count}</div>
			</>
		);
	}

	export default App;
```

- 위의 예시에서는 각 함수들에게 `useCallback`을 사용해서 props가 바뀌었을 때만 리렌더링 되고 그게 아니라면 재사용 할 수 있게 해줬다.
	- 📌 이때, 유의할 점!!!!      
	함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야한다.   
	이유는 만약 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장할 수 없기 때문이다.    
	따라서 props로 받아온 함수가 있다면, 이 또한 deps에 넣어주어야 한다!! 

<br>
<br>

---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/15-array-modify.html
	- https://xiubindev.tistory.com/99

	
</details>

---





	