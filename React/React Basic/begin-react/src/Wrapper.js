// import React from 'react';

// function Wrapper() {
// 	const style = {
// 		border: '2px solid black',
// 		padding: 16
// 	};

// 	return <div style={style}></div>
// }; 

// export default Wrapper;




//  ---------------------------   //
// props.children의 사용법 
import React from 'react';

function Wrapper({children}) {   // 비구조할당 문법 
	const style = {
		border: '2px solid black',
		padding: 16
	};

	return <div style={style}>{children}</div>   // props.children 사용...
}; 

export default Wrapper;