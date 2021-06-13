---
date: 2021-06-13-Sunday
---

# Context API 를 사용한 전역 값 관리 - 2 

📝 이번 시간에는 App 컴포넌트에서 Context API를 사용하는 방법에 대해 알아보자  

- 문제점: 
	- 우리가 오늘 App 컴포넌트에서 Context로 대체하고 싶은 부분은 `onToggle`, `onRemove` 함수들이다. UserList 컴포넌트의 경우 onToggle 과 onRemove를 User에게 전달하기 위하여 중간 다리역할만 하고 있다. 두 함수가 User 컴포넌트에 가기 위해 UserList 컴포넌트를 거쳐야만 하는 불필요함을 줄이기 위해 Context를 사용해보자; 
- 우선 App.js로 가서... 

e.g.     

[App.js]      

```javascript
import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';    // createContext 사용
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

// onToggle이랑 onRemove의 dispatch를 기본 값이 null인 Context로 만들어서 따로 내보내준다... 
export const UserDispatch = createContext(null);    // cf. UserDispatch 안에 Provider라는 컴포넌트가 들어있다. 이것을 <UserDispatch.Provider></UserDispatch.Provider>로 사용해준다  

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
		{/* UserDispatch.Provider의 value 값을 onToggle과 onRemove의 dispatch로 지정해준다. */}
     <UserDispatch.Provider value={dispatch}>    
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
```

<!-- 
!!!!!!!!!!!!!!!!!!!!!!!

인강의 05:00 까지 들음! 이해 안되서 ... 나중에 다시 듣기! 

!!!!!!!!!!!!!!!!!!!!!!! -->




<br>
<br>


> 


e.g.

[App.js]

```javascript
```
e.g.
```javascript
```

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

📌😉

<br>
<br>

---

<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/22-context-dispatch.html
	- https://xiubindev.tistory.com/99

	
</details>

---





	