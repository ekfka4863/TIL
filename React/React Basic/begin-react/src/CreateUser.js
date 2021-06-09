// import React from 'react';

// function CreateUser({ username, email, onChange, onCreate }) {  
// 	//  CreateUser에서는 총 4개의 props를 받아올 것이다; username, email, onChange, onCreate
// 	return (
// 		<div>
// 			<input
// 				name="username"
// 				placeholder="계정명"
// 				onChange={onChange}
// 				value={username}
// 			/>
// 			<input
// 				name="email"
// 				placeholder="이메일"
// 				onChange={onChange}
// 				value={email}
// 			/>
// 			<button onClick={onCreate}>등록</button>
// 		</div>
// 	);
// }

// export default CreateUser;

// ------------------------------------------------------- //


import React from 'react';

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

// ------------------------------------------------------- //
