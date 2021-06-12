import React, { useState } from 'react';  // useState 함수를 사용.......

function Counter() {
	const [number, setNumber] = useState(0);  // 첫번째 현재 상태고, 두 번째 원소는 현재 상태를 갱신해줄 함수가 들어온다...

	const onIncrease = () => {
		setNumber(number + 1);
	}
	const onDecrease = () => {
		setNumber(number - 1);
	}
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	); 
}

export default Counter;


// ------------------------- //

// import React, { useReducer } from 'react';  // useReducer 함수를 사용.......

// function reducer(state, action) {    // reducer 로 다음 상태를 어떻게 업데이트 할 지 정하기... 파라미터 첫번째는 현재 상태고 두 번째는 action 객체...
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 			// throw new Error('Unhandled action');   // return state 또는 에러 발생! 
// 	}
// }

// function Counter() {
// 	const [number, dispatch] = useReducer(reducer, 0);   // useReducer 사용 방법 
// 	// 첫번째 파라미터로 reducer 함수를 받아서 다음 상태를 어떻게 업데이트 할지를 해결하고, 두 번째 파라미터로는 기본값을 0

// 	const onIncrease = () => {
// 		dispatch({ 
// 			type: 'INCREMENT' 
// 		});
// 	}
// 	const onDecrease = () => {
// 		dispatch({ 
// 			type: 'DECREMENT' 
// 		});
// 	}
// 	return (
// 		<div>
// 			<h1>{number}</h1>
// 			<button onClick={onIncrease}>+1</button>
// 			<button onClick={onDecrease}>-1</button>
// 		</div>
// 	); 
// }

// export default Counter;


