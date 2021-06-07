---
date: 2021-06-05-Saturday
---

# useRef로 컴포넌트 안의 변수 만들기 
- 이번에는 `useRef`를 사용해서 컴포넌트 안에 변수를 만드는 방법을 알아보자. 
- 이때, 여기서 말하는 "변수"란 어떤 것일까?
	- e.g. 컴포넌트 내부에서 `let`키워드를 사용해서 어떤 변수를 선언했다고 가정해보자.   
	그렇게 하면 다음에 이 변수가 리렌더링 될 때, 변수의 값은 초기화 된다.   
	만약에 계속 유지되는 변수값을 원한다면 우리가 이전에 배운 `useState`를 사용해야하는데, <u>useState 같은 경우 상태를 바꾸게 되면 컴포넌트가 리렌더링 된다</u>.     
	**하지만** 우리는 _가끔 어떤 변수값을 바꿨을 때 그 변수값이 유지가 되면서 굳이 리렌더링 되지 않는 그런 상황을 원할 수 있다. 그럴땐 어떻게 할까??_ 
	- 바로 이럴 때 사용하는 것이 `useRef`다!! 😉

<br>

- 저번에 `useRef`에 대해 배웠을 때는 **컴포넌트에서 특정 DOM을 선택해야 할 때** 사용한다고 배웠는데, 사실 `useRef`는 DOM 을 선택하는 용도 외에도 **컴포넌트가 리렌더링 될 때마다 계속 기억할 수 있는 어떠한 (변수)값을 관리할 때도 사용된다**.
- `useRef`는 주로 아래와 같은 값들을 관리할 때 사용된다; 
	- `setTimeout`, `setInterval`을 사용했을 때 주어지는/만들어진 `id`값을 기억해야 할 때
	- 외부 라이브러리를 사용하여 생성된 인스턴스를 담을 때
	- scroll 위치를 알고 있어야 할 때 
	- etc. 
- 즉, `useRef`는 다양한 곳에 사용될 수 있는데, <u>알아두어야 하는 것은 `useRef`로 관리하는 값은 바뀌어도 컴포넌트가 리렌더링 되지 않는다는 점</u>이다.   

<br>

> 예시를 통해 이해하기 
- 우리는 이제 App 컴포넌트에서 `useRef`를 사용해서 변수를 관리하는 방법을 알아볼건데, 용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 새 항목에서 사용할 고유 아이디 값을 관리하는 용도다.
- `useRef`를 사용하여 변수를 관리하기 전에 해야 할 작업이 있다.   
지금은 우리가 UserList 컴포넌트 내부에서 배열을 직접 선언해서 사용을 하고 있는데, 이렇게 UserList 에서 선언해서 사용하는 대신에, 이 배열을 App 에서 선언하고 UserList 에게 props 로 전달을 해주자.  
- e.g.    

[App.js]

```javascript
	import React from 'react';
	import UserList from './UserList';

	function App() {
		// App 안에서 users 라는 배열을 선언하고...
		const users = [
			{
				id: 1,
				username: 'velopert',
				email: 'public.velopert@gmail.com'
			},
			{
				id: 2,
				username: 'tester',
				email: 'tester@example.com'
			},
			{
				id: 3,
				username: 'liz',
				email: 'liz@example.com'
			}
		];

		return <UserList users={users}/>;  // users의 값을 불러오기 위해 중괄호를 {} 사용...
	}

	export default App;
```

<br>

[UserList.js]

```javascript
	import React from 'react'; 

	function User({ user }) {       // User 컴포넌트에 props를 통해 값을 전달
		return(
			<div>
				<b>{user.username}</b> <span>({user.email})</span>
			</div>		
		);
	}

	function UserList({ user }) {
		return (
			<div>
				{users.map(user => (      // users라는 배열에다 map을 사용해서 새로운 배열을 만들건데... user에 대하여... 아래와 같이 반환...
					<User user={user} key={user.id}/>
				))}
			</div>
		);
	}

	export default UserList;
```
- 이제 App에서 `useRef()`를 사용하여 nextId라는 변수를 만들어보자;    

[App.js]

```javascript
	import React, {useRef} from 'react';
	import UserList from './UserList';

	function App() {
		const users = [
			{
				id: 1,
				username: 'velopert',
				email: 'public.velopert@gmail.com'
			},
			{
				id: 2,
				username: 'tester',
				email: 'tester@example.com'
			},
			{
				id: 3,
				username: 'liz',
				email: 'liz@example.com'
			}
		];

		const nextId = useRef(4);     // nextId라는 변수 생성하고 useRef사용... nextId는 4가 초깃값! 
		const onCreate = () => {
			console.log(nextId.current);   // 현재 nextId의 값을 콘솔창에 출력 

			nextId.current += 1;     // 현재 nextId가 갖고 있는 값에다가 +1
		};
		return <UserList users={users} />;
	}

	export default App;
```
- 여기서 알 수 있는 것! 
	- `useRef()`를 사용 할 때 파라미터를 넣어주면, 이 값이 `.current` 값의 기본값이 된다. 
	-	수정할 때는 `.current` 값을 수정하면 되고, 조회할 때는 `.current`를 조회하면 된다.  

<br>

💡 요약
useRef는 우리가 특정 DOM을 선택할 때에도 사용할 수 있지만 어떤 변수를 계속 기억하고 싶을 때 사용하며 컴포넌트가 리렌더링 되더라도 값은 그대로 유지되게 된다.

<br>
<br>

---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/11-render-array.html
	- https://velopert.com/3636
	- https://developing-move.tistory.com/202
	- https://xiubindev.tistory.com/99
	- https://velog.io/@hey_jude/React-useRef%EB%A1%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%95%88%EC%9D%98-%EB%B3%80%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0
	- https://hyeok999.github.io/2020/01/07/react-velo-10/
	
</details>

---





	