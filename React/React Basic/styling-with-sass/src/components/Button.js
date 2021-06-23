// import React from 'react';
// import './Button.scss';

// function Button({ children }) {
//   return <button className="Button">{children}</button>;
// }

// export default Button;

// ----------------------- //

import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth }) {    // children, size라는 props를 설정. 이때, size는 large, medium, small 
	
	{/* size로 받아온 값을 className에다 넣어줄건데, 이를 구현하기 위해서는 배열을 하나 만들고, 그 배열 안에 'Button'과 size를 넣고, 그리고 .join()메서드를 사용해서 공백(' ')을 가지고 조인시키면... e.g. 받아온 size 값이 'medium'이라고 가정하면 className은 "Button medium"이런식으로 형성될 것이다! */}
	{/* 옵션 2. 아니면은 템플릿 리터럴을 사용해서 className을 정해줘도 괜찮다. e.g. <button className={`Button ${size}`}> 
	하지만! 나중에 size말고도 다른 props를 받아올 것을 계획하고 있다면 옵션 1.과 같이 배열을 만들어서 공백으로 join시키는 것을 추천! */}
	// return <button className={['Button', size].join(' ')}>{children}</button>;

	// classNames 라이브러리 사용시
	return (
		<button className={classNames('Button', size, color, {outline, fullWidth})}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	size: 'medium',
	color: 'blue'
};

export default Button;

// ----------------------- //



// ----------------------- //


// ----------------------- //
