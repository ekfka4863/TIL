import React from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  // return (
  //   // Hello 컴포넌트를 불러오는 것... 그러니까 <> 안에는 Hello...
  //   // 그리고 Hello 컴포넌트를 감싸는 컴포넌트는 Wrapper... 즉, Hello 컴포넌트는 Wrapper의 children 요소로 있는거... 
  //   // 여기서 <Wrapper></Wrapper>안에 위치한 Hello의 값을 조회하고 싶다면 props.children을 사용할 수 있다... 
  //   // <Wrapper>
  //   //   <Hello name="react" color="red" isSpecial={true}>안녕하세요</Hello>
  //   //   <Hello color="gray">안녕하세요</Hello>
  //   // </Wrapper>

  // )

  // return <Counter />

  return <InputSample />
}

export default App;
