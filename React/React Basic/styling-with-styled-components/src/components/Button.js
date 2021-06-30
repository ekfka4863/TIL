// import React from 'react';
// import styled from 'styled-components';
// import {darken, lighten} from 'polished';

// const StyledButton = styled.button`
//   /* 공통 스타일 */
//   display: inline-flex;
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   padding-left: 1rem;
//   padding-right: 1rem;

//   /* 크기 */
//   height: 2.25rem;
//   font-size: 1rem;

//   /* 색상 */
//   background: #228be6;
//   &:hover {
//     background: ${lighten(0.1, '#228be6')};
//   }
//   &:active {
//     background: ${darken(0.1, '#228be6')}6;
//   }

//   /* 기타 */
//   & + & {
//     margin-left: 1rem;
//   }
// `;

// function Button({ children, ...rest }) {
//   return <StyledButton {...rest}>{children}</StyledButton>;
// }

// export default Button;



// ---------------------------------------- //

// import React from 'react';
// import styled, { css } from 'styled-components';
// import { darken, lighten } from 'polished';

// const StyledButton = styled.button`
//   /* 공통 스타일 */
//   display: inline-flex;
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   padding-left: 1rem;
//   padding-right: 1rem;

//   /* 크기 */
//   height: 2.25rem;
//   font-size: 1rem;

//   /* 색상 */
//   ${props => {
//     const selected = props.theme.palette[props.color];
//     return css`
//       background: ${selected};
//       &:hover {
//         background: ${lighten(0.1, selected)};
//       }
//       &:active {
//         background: ${darken(0.1, selected)};
//       }
//     `;
//   }}

//   /* 기타 */
//   & + & {
//     margin-left: 1rem;
//   }
// `;

// function Button({ children, ...rest }) {
//   return <StyledButton {...rest}>{children}</StyledButton>;
// }

// Button.defaultProps = {
//   color: 'blue'
//   // color: 'pink'
// };

// export default Button;

// ---------------------------------------- //

// import React from 'react';
// import styled, { css } from 'styled-components';
// import { darken, lighten } from 'polished';

// const colorStyles = css`
// 	${({ theme, color }) => {
// 		const selected = theme.palette[color];
// 		return css`
// 			background: ${selected};
// 			&:hover {
// 				background: ${lighten(0.1, selected)};
// 			}
// 			&:active {
// 				background: ${darken(0.1, selected)};
// 			}
// 		`;
// 	}}
// `;

// const sizeStyles = css`
// 	${props =>
// 		props.size === 'large' &&  // props.size가 large일 때... 
// 		css`
// 			height: 3rem;
// 			font-size: 1.25rem;
// 		`}

// 	${props =>
// 		props.size === 'medium' &&
// 		css`
// 			height: 2.25rem;
// 			font-size: 1rem;
// 		`}

// 		${props =>
// 			props.size === 'small' &&
// 			css`
// 				height: 1.75rem;
// 				font-size: 0.875rem;
// 			`}
// `;

// const StyledButton = styled.button`
// 	/* 공통 스타일 */
// 	display: inline-flex;
// 	outline: none;
// 	border: none;
// 	border-radius: 4px;
// 	color: white;
// 	font-weight: bold;
// 	cursor: pointer;
// 	padding-left: 1rem;
// 	padding-right: 1rem;

// 	/* 크기 */
// 	${sizeStyles}    

// 	/* 색상 */
// 	${colorStyles}

// 	/* 기타 */
// 	& + & {
// 		margin-left: 1rem;
// 	}
// `;

// function Button({ children, color, size,  ...rest }) {      // props로 size를 받아오게 한다
// 	return (
// 		<StyledButton color={color} size={size} {...rest}>
// 			{children}
// 		</StyledButton>
// 	);
// }

// Button.defaultProps = {
// 	color: 'blue',
// 	size: 'medium'  // 사이즈의 기본값을 미디움으로 설정
// };

// export default Button;
// ---------------------------------------- //

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  margin-right: 1rem; 
  margin-top: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;


function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;

// ---------------------------------------- //


// ---------------------------------------- //

// ---------------------------------------- //

// ---------------------------------------- //

// ---------------------------------------- //

