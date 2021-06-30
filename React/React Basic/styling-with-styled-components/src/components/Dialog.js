// import React from 'react';
// import styled from 'styled-components';
// import Button from './Button';    


// const DarkBackground = styled.div`
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	background: rgba(0, 0, 0, 0.8);
// `;

// const DialogBlock = styled.div`
//   width: 320px;
//   padding: 1.5rem;
//   background: white;
//   border-radius: 2px;
//   h3 {
//     margin: 0;
//     font-size: 1.5rem;
//   }
//   p {
//     font-size: 1.125rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: flex-end;
// `;

// // 위에서 Button 스타일링을 상속
// const ShortMarginButton = styled(Button)`
//   & + & {
//     margin-left: 0.5rem, 
//     padding-top: 1rem
//   }
// `     

// function Dialog({ title, children, confirmText, cancelText }) {
//   return (
//     <DarkBackground>
//       <DialogBlock>
//         <h3>{title}</h3>
//         <p>{children}</p>
//         <ButtonGroup>
//           <ShortMarginButton color="gray">{cancelText}</ShortMarginButton>
//           <ShortMarginButton color="pink">{confirmText}</ShortMarginButton>
//         </ButtonGroup>
//       </DialogBlock>
//     </DarkBackground>
//   );
// }

// Dialog.defaultProps = {
// 	children: '데이터를 삭제하려면 삭제 버튼을 누르세요!',
//   confirmText: '확인',
//   cancelText: '취소'
// };

// export default Dialog;

// --------------------------------- // 
// import React from 'react';
// import styled from 'styled-components';
// import Button from './Button';

// const DarkBackground = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.8);
// `;

// const DialogBlock = styled.div`
//   width: 320px;
//   padding: 1.5rem;
//   background: white;
//   border-radius: 2px;
//   h3 {
//     margin: 0;
//     font-size: 1.5rem;
//   }
//   p {
//     font-size: 1.125rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: flex-end;
// `;

// const ShortMarginButton = styled(Button)`
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;

// function Dialog({ 
// 	title, 
// 	children, 
// 	confirmText, 
// 	cancelText,
// 	onConfirm,
// 	onCancel,
// 	visible	
// }) {
//   if (!visible) return null; // 해석: 만약 visible이 false 라면 ... 
// 	return (   
//     <DarkBackground>
//       <DialogBlock>
//         <h3>{title}</h3>
//         <p>{children}</p>
//         <ButtonGroup>
//           <ShortMarginButton color="gray">{cancelText}</ShortMarginButton>
//           <ShortMarginButton color="pink">{confirmText}</ShortMarginButton>
//         </ButtonGroup>
//       </DialogBlock>
//     </DarkBackground>
//   );
// }

// Dialog.defaultProps = {
//   confirmText: '확인',
//   cancelText: '취소'
// };

// export default Dialog;
// --------------------------------- // 


// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import Button from './Button';

// const fadeIn = keyframes`
//   from {
//     opacity: 0
//   }
//   to {
//     opacity: 1
//   }
// `;

// const slideUp = keyframes`
//   from {
//     transform: translateY(200px);
//   }
//   to {
//     transform: translateY(0px);
//   }
// `;

// const DarkBackground = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.8);

//   animation-duration: 0.25s;
//   animation-timing-function: ease-out;
//   animation-name: ${fadeIn};
//   animation-fill-mode: forwards;
// `;

// const DialogBlock = styled.div`
//   width: 320px;
//   padding: 1.5rem;
//   background: white;
//   border-radius: 2px;
//   h3 {
//     margin: 0;
//     font-size: 1.5rem;
//   }
//   p {
//     font-size: 1.125rem;
//   }

//   animation-duration: 0.25s;
//   animation-timing-function: ease-out;
//   animation-name: ${slideUp};
//   animation-fill-mode: forwards;
// `;

// const ButtonGroup = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: flex-end;
// `;

// const ShortMarginButton = styled(Button)`
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;

// function Dialog({
//   title,
//   children,
//   confirmText,
//   cancelText,
//   onConfirm,
//   onCancel,
//   visible
// }) {
//   if (!visible) return null;
//   return (
//     <DarkBackground>
//       <DialogBlock>
//         <h3>{title}</h3>
//         <p>{children}</p>
//         <ButtonGroup>
//           <ShortMarginButton color="gray" onClick={onCancel}>
//             {cancelText}
//           </ShortMarginButton>
//           <ShortMarginButton color="pink" onClick={onConfirm}>
//             {confirmText}
//           </ShortMarginButton>
//         </ButtonGroup>
//       </DialogBlock>
//     </DarkBackground>
//   );
// }

// Dialog.defaultProps = {
//   confirmText: '확인',
//   cancelText: '취소'
// };

// export default Dialog;
// --------------------------------- // 

// import React from 'react';
// import styled, { keyframes } from 'styled-components';  // 트렌지션 효과를 위해 keyframes라는 유틸 함수 사용 
// import Button from './Button';

// // 트랜지션 
// const fadeIn = keyframes`
//   from {
//     opacity: 0
//   }
//   to {
//     opacity: 1
//   }
// `;

// const slideUp = keyframes`
//   from {
//     transform: translateY(200px);
//   }
//   to {
//     transform: translateY(0px);
//   }
// `;


// const DarkBackground = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(0, 0, 0, 0.8);

//   animation-duration: 0.25s;
//   animation-timing-function: ease-out;
//   animation-name: ${fadeIn};
//   animation-fill-mode: forwards;
// `;

// const DialogBlock = styled.div`
//   width: 320px;
//   padding: 1.5rem;
//   background: white;
//   border-radius: 2px;
//   h3 {
//     margin: 0;
//     font-size: 1.5rem;
//   }
//   p {
//     font-size: 1.125rem;
//   }

//   animation-duration: 0.25s;
//   animation-timing-function: ease-out;
//   animation-name: ${slideUp};
//   animation-fill-mode: forwards;
// `;

// const ButtonGroup = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: flex-end;
// `;

// const ShortMarginButton = styled(Button)`
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;

// function Dialog({
//   title,
//   children,
//   confirmText,
//   cancelText,
//   onConfirm,
//   onCancel,
//   visible
// }) {
//   if (!visible) return null;
//   return (
//     <DarkBackground>
//       <DialogBlock>
//         <h3>{title}</h3>
//         <p>{children}</p>
//         <ButtonGroup>
//           <ShortMarginButton color="gray" onClick={onCancel}>
//             {cancelText}
//           </ShortMarginButton>
//           <ShortMarginButton color="pink" onClick={onConfirm}>
//             {confirmText}
//           </ShortMarginButton>
//         </ButtonGroup>
//       </DialogBlock>
//     </DarkBackground>
//   );
// }

// Dialog.defaultProps = {
//   confirmText: '확인',
//   cancelText: '취소'
// };

// export default Dialog;

// --------------------------------- // 

import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default Dialog;

// --------------------------------- // 
// --------------------------------- // 
