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