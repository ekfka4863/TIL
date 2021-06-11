---
date: 2021-06-09-Wednesday 
---

# React.memo 를 사용한 컴포넌트 리렌더링 방지
- 이번에는 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 `React.memo`라는 함수에 대해서 알아보겠다.    
(cf. `React.memo` 함수를 사용하면, 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해 줄수있다.)
- 사용법은 쉽다! 그냥 _감싸주기만 하면 된다_!      
e.g.    

[CreateUser.js]

```javascript
	import React from 'react';

	// function CreateUser({ username, email, onChange, onCreate }) {} 에서... 아래와 같이 ....  
	const CreateUser = ({ username, email, onChange, onCreate }) => {
		return (
			<div>
				<input
					name="username"
					placeholder="계정명"
					onChange={onChange}
					value={username}
				/>
				<input
					name="email"
					placeholder="이메일"
					onChange={onChange}
					value={email}
				/>
				<button onClick={onCreate}>등록</button>
			</div>
		);
	};

	export default React.memo(CreateUser);   // 그냥 React.memo 함수로 컴포넌트를 감싸주기만 하면 된다! React.memo를 사용하면 props가 바뀌었을 떄만 리렌더링을 해준다.
```
- 그리고 UserList와 User 컴포넌트도 적용해주자;   
e.g.     
  
[UserList.js]

```javascript
	import React from 'react';

	const User = React.memo(function User({ user, onRemove, onToggle }) {   // function User 자체를 React.memo로 감싸준다 
		return (
			<div>
				<b
					style={{
						cursor: 'pointer',
						color: user.active ? 'green' : 'black'
					}}
					onClick={() => onToggle(user.id)}
				>
					{user.username}
				</b>
				&nbsp;
				<span>({user.email})</span>
				<button onClick={() => onRemove(user.id)}>삭제</button>
			</div>
		);
	});

	function UserList({ users, onRemove, onToggle }) {
		return (
			<div>
				{users.map(user => (
					<User
						user={user}
						key={user.id}
						onRemove={onRemove}
						onToggle={onToggle}
					/>
				))}
			</div>
		);
	}

	export default React.memo(UserList);  // React.memo
```
- 그런데 User 중 하나라도 수정하면 모든 User들이 리렌더링 되고, CreateUser 도 리렌더링 되게 된다.    
바뀌지 않은 User들까지 리렌더링 되는 이유는 users 배열이 바뀔때마다 onCreate 함수도 새로 만들어지고, onToggle, onRemove도 새로 만들어지기 때문이다.      
e.g.    

[App.js]

```javascript
	const onCreate = useCallback(() => {
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
		}, [users, username, email]);       // deps에 users가 들어있어서 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ... 

		const onRemove = useCallback(
			id => {
				// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
				// = user.id 가 id 인 것을 제거함
				setUsers(users.filter(user => user.id !== id));
			},
			[users]      // deps에 users가 들어있어서 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ...
		);
		const onToggle = useCallback(
			id => {
				setUsers(
					users.map(user =>
						user.id === id ? { ...user, active: !user.active } : user
					)
				);
			},
			[users]      // deps에 users가 들어있어서 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ...
		);
```
- 그렇다면! 이걸 최적화하고 싶다면 어떻게해야 할까?
	- 바로 deps 에서 users 를 지우고, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 하는것! 그건 또 어떻게 할까? 함수형 업데이트를 하면 된다. 
	- 함수형 업데이트를 하게 되면, setUsers 에 등록하는 콜백함수의 파라미터에서 최신 users 를 참조 할 수 있기 때문에 deps 에 users 를 넣지 않아도 된다. 그럼 각 함수들을 업데이트 해주자!    
	~~(cf. onChange 의 경우엔 함수형 업데이트를 해도 영향은 가지 않지만, 연습삼아 해주자!)~~      
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

	function App() {
		const [inputs, setInputs] = useState({
			username: '',
			email: ''
		});
		const { username, email } = inputs;
		const onChange = useCallback(e => {
			const { name, value } = e.target;
			setInputs(inputs => ({
				...inputs,
				[name]: value
			}));
		}, []);
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

		const onCreate = useCallback(() => {
			const user = {
				id: nextId.current,
				username,
				email
			};
			setUsers(users => users.concat(user)); // 함수형 업데이트를 하면 deps 부분에서 users를 빼줄 수 있음! 그러니까 ... (users => ...) 이런 형태로 바꿔주기! 

			setInputs({
				username: '',
				email: ''
			});
			nextId.current += 1;
		}, [username, email]);   // deps에 users가 들어있으면 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ... 그러니까 users 전체를 deps에 넣지 말고 그냥 username이나 email만 바뀌면 리렌더링 되게끔 하자! 

		const onRemove = useCallback(id => {
			// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
			// = user.id 가 id 인 것을 제거함
			setUsers(users => users.filter(user => user.id !== id));   // 함수형 업데이트 
		}, []);          // deps에 users가 들어있으면 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ... 그러니까 deps에서 users를 빼주자! 
		
		const onToggle = useCallback(id => {
			setUsers(users =>                 // 함수형 업데이트 
				users.map(user =>  
					user.id === id ? { ...user, active: !user.active } : user
				)
			);
		}, []);          // deps에 users가 들어있으면 배열이(배열중 하나라도) 바뀌면 함수가 새로 만들어지게 된다 ... 그러니까 deps에서 users를 빼주자! 
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
- 이렇게 해주면, 특정 항목을 수정하게 될 때, 해당 항목만 리렌더링 될것이고, 이로써 최적화가 끝난 것이다! 😉

<br>
<br>
---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- hhttps://react.vlpt.us/basic/19-React.memo.html
	- https://xiubindev.tistory.com/99

	
</details>
---





	