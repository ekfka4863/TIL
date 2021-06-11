// import React, {useRef} from 'react';
// // import Hello from './Hello';
// // import Wrapper from './Wrapper';
// // import Counter from './Counter';
// // import InputSample from './InputSample';
// import UserList from './UserList';

// function App() {
//   // return (
//   //   // Hello 컴포넌트를 불러오는 것... 그러니까 <> 안에는 Hello...
//   //   // 그리고 Hello 컴포넌트를 감싸는 컴포넌트는 Wrapper... 즉, Hello 컴포넌트는 Wrapper의 children 요소로 있는거... 
//   //   // 여기서 <Wrapper></Wrapper>안에 위치한 Hello의 값을 조회하고 싶다면 props.children을 사용할 수 있다... 
//   //   // <Wrapper>
//   //   //   <Hello name="react" color="red" isSpecial={true}>안녕하세요</Hello>
//   //   //   <Hello color="gray">안녕하세요</Hello>
//   //   // </Wrapper>

//   // )

//   // return <Counter />

//   // return <InputSample />





//   const users = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];

//   const nextId = useRef(4);
//   const onCreate = () => {

//     nextId.current += 1;
//   }

//   return (
//     <UserList user={user} />
//   )
// }

// export default App;




// -------------------------------- //



// import React, { useRef, useState } from 'react';   
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email:''
//   });
//   const {username, email} = inputs;
//   const onChange = e => {
//     const {name, value} = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };

//   const [users, setUsers] = useState([    // useState() 사용 
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     // 방법 1:  spread 문법 사용 
//     // 방법 2: concat 함수 사용 
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers([...users, user]);   // spread 연산자 사용 
//     // setUsers(users.concat(user));  // concat 함수 사용
//     setInputs({
//       username:'',
//       email:''
//     });

//     nextId.current += 1;
//   };

//   // onRemove 함수 구현 
//   const onRemove = id => {
//     // filter 함수를 사용해서 ...
//     setUsers(users.filter(user => user.id !== id));
//   };

//   // onToggle 함수 구현
//   const onToggle = id => {
//     setUsers(users.map(user => user.id === id
//       ? {...users, active: !user.active}
//       : user 
//     ))
//   } 
  
//   return (
//     <>
//       <CreateUser 
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//     </>
//   )
// }

// export default App;



// -------------------------------- //



// import React, { useRef, useState, useMemo } from 'react';   // useMemo 
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// // 활성 사용자 수를 카운트 하는 함수를 만든다 ... 
// function countActiveUsers(users){      // users 배열을 파라미터로 넣어준다 
//   console.log("활성 사용자 수를 세는 중입니다...");
//   return users.filter(user => user.active).length; 
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };

//   const onRemove = id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//   };
//   const onToggle = id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   };

//   const count = useMemo(() => countActiveUsers(users), [users]);  // useMemo로 countActiveUsers(users) 함수를 감싼 뒤, 두 번째 파라미터로 deps인 [users]를 넣어준다 


//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성 사용자 수: {count}</div>
//     </>
//   );
// }

// export default App;


// -------------------------------- //

// // import React from 'react';
// import React, { useRef, useState, useMemo, useCallback } from 'react';     // useRef, useState, useMemo, useCallback 
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
// 	console.log('활성 사용자 수를 세는 중입니다...');
// 	return users.filter(user => user.active).length;   // user.active가 true인 것들을 모아 배열을 만들고, 그 배열의 length를 return해준다
// }

// function App() {
// 	const [inputs, setInputs] = useState({
// 		username: '',
// 		email: ''
// 	});
// 	const {username, email} = inputs;
// 	const onChange = useCallback(
// 		e => {
// 			const {name, value} = e.target;
// 			setInputs({
// 				...inputs,
// 				[name]: value
// 			});
// 		}, [inputs]
// 	);
// 	const [users, setUsers] = useState([
// 		{
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
// 	]);
// const nextId = useRef(4);

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users => users.concat(user));    // 함수형 업데이트 

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   }, [username, email]);     // 함수형 업데이트 후 users를 빼준다 -> users 중 하나라도 바뀌면 배열 전체가 리렌더링 되는 것을 막고 성능을 최적화 하기 위함! 

//   const onRemove = useCallback(
//     id => {
//       // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//       // = user.id 가 id 인 것을 제거함
//       setUsers(users => users.filter(user => user.id !== id));   // 함수형 업데이트 
//     },
//     []     // 함수형 업데이트 후 users를 deps 에서 빼준다. 성능의 최적화를 위해~ 
//   );
//   const onToggle = useCallback(
//     id => {
//       setUsers(users =>                       // 함수형 업데이트 
//         users.map(user =>
//           user.id === id ? { ...user, active: !user.active } : user
//         )
//       );
//     },
//     []     // 함수형 업데이트 후 users를 deps 에서 빼준다. 성능의 최적화를 위해~ 
//   );

//   const count = useMemo(() => countActiveUsers(users), [users]);
  
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// -------------------------------- //

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
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  }, []);
  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;

// -------------------------------- //




// -------------------------------- //
