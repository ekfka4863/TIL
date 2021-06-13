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

// import React, { useRef, useState, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setInputs(inputs => ({
//       ...inputs,
//       [name]: value
//     }));
//   }, []);
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
//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users => users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onRemove = useCallback(id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users => users.filter(user => user.id !== id));
//   }, []);
//   const onToggle = useCallback(id => {
//     setUsers(users =>
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   }, []);
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

// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
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
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     });
//   }, []);

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : 0</div>
//     </>
//   );
// }

// export default App;


// -------------------------------- //



// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
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
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     });
//   }, []);

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// -------------------------------- //

// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import useInputs from './Hooks/useInputs';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   users: [
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
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [{ username, email }, onChange, reset] = useInputs({
//     username: '',
//     email: ''
//   });
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     reset();
//     nextId.current += 1;
//   }, [username, email, reset]);

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// -------------------------------- //

// import React, { createContext, useContext } from 'react';

// function Child({text}) {
//   return <div>안녕하세요? {text}</div>
// }
// function Parent({text}) {
//   return <Child text={text} />
// }
// function GrandParent({text}) {
//   return <Parent text={text} />
// }
// function ContextSample() {
//   return <GrandParent text="Good" />
// }

// export default ContextSample;  
// -------------------------------- //


// import React, { useRef, useReducer, useMemo, useCallback, useContext, createContext } from 'react';   // useContext 사용
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import useInputs from './Hooks/useInputs';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   users: [
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
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }


// // onToggle이랑 onRemove의 dispatch를 기본 값이 null인 Context로 만들어서 따로 내보내준다... 
// export const UserDispatch = createContext(null); 
// // cf. UserDispatch 안에 Provider라는 컴포넌트가 들어있다. 이것을 <UserDispatch.Provider></UserDispatch.Provider>로 사용해준다  


// function App() {
//   const [{ username, email }, onChange, reset] = useInputs({
//     username: '',
//     email: ''
//   });
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     reset();
//     nextId.current += 1;
//   }, [username, email, reset]);

//   // const onToggle = useCallback(id => {
//   //   dispatch({
//   //     type: 'TOGGLE_USER',
//   //     id
//   //   });
//   // }, []);

//   // const onRemove = useCallback(id => {
//   //   dispatch({
//   //     type: 'REMOVE_USER',
//   //     id
//   //   });
//   // }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <UserDispatch.Provider value={dispatch}>    {/* UserDispatch -> */}
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </UserDispatch.Provider>
//   );
// }

// export default App;

// -------------------------------- //
// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import useInputs from './hooks/useInputs';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   users: [
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
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// // UserDispatch 라는 이름으로 내보내줍니다.
// export const UserDispatch = React.createContext(null);

// function App() {
//   const [{ username, email }, onChange, onReset] = useInputs({
//     username: '',
//     email: ''
//   });
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     onReset();
//     nextId.current += 1;
//   }, [username, email, onReset]);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <UserDispatch.Provider value={dispatch}>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} />
//       <div>활성사용자 수 : {count}</div>
//     </UserDispatch.Provider>
//   );
// }

// export default App;

// -------------------------------- //

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

// UserDispatch 라는 이름으로 내보내줍니다.
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



// -------------------------------- //




// -------------------------------- //




