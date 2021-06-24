import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';    
// 컴포넌트 형태로 사용할 수 있어서 아래와 같이 div 태그 안에 삼항연산자 안에 컴포넌트 형태로 들어가 있음! 
import styles from './CheckBox.module.css'; 

function CheckBox({children, checked, ...rest}) {
	return (
		<div className={styles.checkbox}>
			<label>
				<input type="checkbox" checked={checked} {...rest} />
				{/* <div>{checked ? '체크됨' : '체크안됨'}</div> */}
				<div className={styles.icon}>
					{checked ? (<MdCheckBox className={styles.checked} />  
					) : ( 
					<MdCheckBoxOutlineBlank />
					)}
				</div>
			</label>
			<span>{children}</span>
		</div>
	)
}

export default CheckBox;

// ------------------------------------------- //