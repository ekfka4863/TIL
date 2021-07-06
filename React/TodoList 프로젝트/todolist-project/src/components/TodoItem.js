// import React from 'react';
// import styled, {css} from 'styled-components';
// import {MdDone, MdDelete} from 'react-icons/md';
// import { useTodoDispatch } from '../TodoContext';

// const Remove = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	color: #dee2e6;
// 	font-size: 24px;
// 	cursor: pointer;
// 	&:hover {
// 		color: #ff6b6b;
// 	}
// 	display: none;
// `;

// const TodoItemBlock = styled.div`
// 	display: flex;
// 	align-items: center;
// 	padding-top: 12px;
// 	padding-bottom: 12px;
// 	&:hover {     // 커서를 올렸을 때 아이콘이 나타나게 함.
// 		${Remove} {  // 위의 Remove 컴포넌트를 가르킴
// 			display: initial;
// 		}
// 	}
// `;

// const CheckCircle = styled.div`
// 	width: 32px;
// 	height: 32px;
// 	border-radius: 16px;
// 	border: 1px solid #ced4da;
// 	font-size: 24px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin-right: 20px;
// 	cursor: pointer;
// 	${props =>         // props로 받아오는 것은... 
// 		props.done &&    // props.done을 받아오는데, 스타일링은 아래와 같이... 
// 		css`
// 			border: 1px solid #38d9a9;
// 			color: #38d9a9;
// 		`}
// `;

// const Text = styled.div`
// 	// 기본적으로 Text 컴포넌트가 갖는 스타일링은 아래와 같지만
// 	flex: 1;
// 	font-size: 21px;
// 	color: #495057;
// 	${props =>       // 만약 props로 done을 받아오면 컬러를 약간 연한 회색으로 설정해 준다
// 		props.done &&
// 		css`
// 			color: #ced4da;
// 		`}
// `;


// function TodoItem({ id, done, text }) {

// 	const dispatch = useTodoDispatch();
//   const onToggle = () => dispatch({ type: 'TOGGLE', id });
//   const onRemove = () => dispatch({ type: 'REMOVE', id });


// 	return (
// 		<TodoItemBlock>
// 			{/* 만약에 CheckCircle 안에 done 값이 있다면 MdDone 컴포넌트를 렌더링 해준다 */}
// 			<CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
// 			<Text done={done}>{text}</Text>
// 			<Remove onClick={onRemove}>
// 				<MdDelete />
// 			</Remove>
// 		</TodoItemBlock>
// 	);
// }

// export default TodoItem; 


// --------------------------------- //
import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

// 성능 최적화
export default React.memo(TodoItem);
