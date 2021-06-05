// import React, {useState} from 'react';   // useState를 불러오고... 

// function InputSample() {
// 	const [text, setText] = useState('');
// 	// 이벤트를 등록하는 함수에서 이벤트 객체 e를 파라미터로 받아온다...
// 	// 이 e 객체의 e.target은 이벤트가 발생한 DOM을 의미한다. 
// 	// 이번 예시에서는 이벤트가 발생한 DOM은 input DOM이다. 
// 	const onChange = (e) => {
// 		// console.log(e.target);
// 		// console.log(e.target.value);
// 		setText(e.target.value);
// 	}

// 	// 초기화 버튼 구현하기 
// 	const onReset = () => {
// 		setText('');
// 	};

// 	return (
// 		<div>
// 			{/* onChange라는 이벤트 함수를 연결시킨다...  */}
// 			{/* value={text}를 설정해 줘야지 나중에 인풋 옆 초기화 버튼을 눌렀을 때 그 안에있는 값이 지워진다... */}
// 			<input onChange={onChange} value={text} />   
// 			<button onClick={onReset}>초기화</button>
// 			<div>
// 				<b>값: </b>
// 				{text}
// 			</div>
// 		</div>
// 	)
// }

// export default InputSample;







// --------------------------- //
// useState와 useRef를 사용하기 위해서 불러낸다.. 
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
		// 이제는 객체 형태로 상태를 관리해줄 것!
		name: '',
		nickname: '',
	});
	// inputs들에 관해서 name과 nickname을 비구조화할당 문법으로 추출...
	const { name, nickname } = inputs;

	// 초기화 버튼을 눌렀을 때, 이름을 적는 input이 focus를 받을 수 있게... 
	// useRef를 사용해서 해당 input을 선택한다;  
	const nameInput = useRef();


	// 이벤트 함수 onChange()
	const onChange = (e) => {
		// console.log(e.targer.name);  // 아래에서 지정한 Input의 name 속성값이 콘솔창에 출력될 것이다... 
			// console.log(e.targer.value);
			// 위의 두 console.log();를 비구조할당 문법으로 한줄로 요약! 
			const { name, value } = e.target;

			setInputs({
				...inputs,
				[name]: value,
			});

  };

	// 이벤트 함수 onReset()
  const onReset = () => {
		setInputs({
			name: '',
			nickname: '',
		});
		nameInput.current.focus();
	};


  return (
    <div>
      <input 
				name="name"
				placeholder="이름" 
				onChange={onChange}
				value={name}
				ref={nameInput}
			/>
      <input 
				name="nickname"
				placeholder="닉네임"
				onChange={onChange}
				value={nickname}
			/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;




