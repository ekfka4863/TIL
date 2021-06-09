---
date: 2021-06-09-Wednesday 
---

# React.memo 를 사용한 컴포넌트 리렌더링 방지
- 이번에는 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 `React.memo`라는 함수에 대해서 알아보겠다.    
(cf. `React.memo` 함수를 사용하면, 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해 줄수있다.)
- 사용법은 그냥 _감싸주기만 하면 된다!_      
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

export default React.memo(CreateUser);
```
- 그리고 UserList와 User 컴포넌트도 적용해주자;   
e.g.     
  
[UserList.js]

```javascript

```


> 


<br>
<br>


> 


e.g.
[CreateUser.js]

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
	- hhttps://react.vlpt.us/basic/19-React.memo.html
	- https://xiubindev.tistory.com/99

	
</details>
---





	