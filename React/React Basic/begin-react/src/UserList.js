// import React from 'react'; 

// // function UserList() {
// // 	const users = [
// // 		{
// // 			id: 1,
// // 			username: 'velopert',
// // 			email: 'public.velopert@gmail.com'
// // 		},
// // 		{
// // 			id: 2,
// // 			username: 'tester',
// // 			email: 'tester@example.com'
// // 		},
// // 		{
// // 			id: 3,
// // 			username: 'liz',
// // 			email: 'liz@example.com'
// // 		}
// // 	];

// // 	// 방법 1) 비효율적인 방법!! 무식한 방법! 
// // 	return(
// // 		<div>
// // 			<div>
// // 				<b>{users[0].username}</b> <span>{users[0].email}</span> <br />
// // 				<b>{users[1].username}</b> <span>{users[1].email}</span> <br />
// // 				<b>{users[2].username}</b> <span>{users[2].email}</span>
// // 			</div>
// // 		</div>		
// // 	)	
// // }







// 	// // 방법 2) 효율적인 방법!! 똑똑한 방법! 

// 	// // 새로운 컴포넌트 추가 ... 
// 	// function User({ user }) {    
// 	// 	return (
// 	// 		<div>
// 	// 		{/* props로 값 가져오기 */}
// 	// 			<b>{ user.username }</b> <sapn>{ user.email }</sapn>
// 	// 		</div>
// 	// 	);
// 	// }

// 	// function UserList() {
// 	// 	const users = [
// 	// 		{
// 	// 			id: 1,
// 	// 			username: 'velopert',
// 	// 			email: 'public.velopert@gmail.com'
// 	// 		},
// 	// 		{
// 	// 			id: 2,
// 	// 			username: 'tester',
// 	// 			email: 'tester@example.com'
// 	// 		},
// 	// 		{
// 	// 			id: 3,
// 	// 			username: 'liz',
// 	// 			email: 'liz@example.com'
// 	// 		}
// 	// 	];

// 	// 	return (
// 	// 		<div>
// 	// 			{
// 	// 				// 배열 users에다가 .map을 해준다 
// 	// 				users.map( 
// 	// 					// user라는 parameter를 가져와서, <User /> 컴포넌트로 구성된 새로운 배열을 생성... 
// 	// 					user => (<User user={user} />)
// 	// 				)
// 	// 			}
// 	// 		</div>
// 	// 	)



// 	// map() 함수를 사용하는 방법
// 	function User({ user }) {
// 		return (
// 			<div>
// 				<b>{user.username}</b> <span>({user.email})</span>
// 			</div>
// 		);
// 	}
	
// 	function UserList( {user} ) {
		
	
// 		return (
// 			<div>
// 				{users.map(user => (
// 					// 여기서 key 값을 고유한 id 값으로 정해주는 이유는 리액트에서 고유한 값이 각 child가 갖고 있지 않으면 에러메세지를 띄우기 떄문... 
// 					// 만약 고유한 key갑 없는 배열이라면 배열의 index를 사용한다...
// 					<User user={user} key={user.id} />
// 				))}
// 			</div>
// 		);
// 	}


// export default UserList;




// import React from 'react';

// function User({ user, onRemove, onToggle }) {    // onToggle을 받아온다 
//   return (
//     <div>
//       <b 
// 				style={{
// 					color : user.active ? 'green' : 'black',
// 					cursor: 'pointer'
// 				}}
// 				onClick={() => onToggle(user.id)}       // 해석: 클릭시 새로운 함수를 만들어서 id를 넣어서 호출 해준다	
// 			>
// 				{user.username}
// 			</b> 
// 			<span>({user.email})</span>
// 			<button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove, onToggle }) {   // onToggle을 받아온다 
//   return (
//     <div>
//       {users.map(user => (
//         <User 
// 					user={user} 
// 					key={user.id} 
// 					onRemove={onRemove} 
// 					onToggle={onToggle}     // onToggle을 넣어준다 
// 				/>
//       ))}
//     </div>
//   );
// }

// export default UserList;



// ----------------------------- //
import React from 'react';

function User({ user, onRemove, onToggle }) {
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
}

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

export default UserList;






