// import React from 'react';
// import styled, { css } from 'styled-components';

// // const Circle = styled.div``;
// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color || 'black'};
//   border-radius: 50%;
//   ${props => 
//       props.huge && css`
//         width: 10rem;
//         height: 10rem;
//       `}
// `;

// function App() {
//   return <Circle color="red" huge />;
// }

// export default App;


// ----------------------------------------------- //
// import React from 'react';
// import styled, {ThemeProvider} from 'styled-components';
// import Button from './components/Button';

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;

// function App() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595'
//         }
//       }}
//     >
//       <AppBlock>
//         <Button>BUTTON</Button>
//       </AppBlock>
//     </ThemeProvider>
//   );
// }

// export default App;

// ----------------------------------------------- //

// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import Button from './components/Button';

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;

// const ButtonGroup = styled.div`
//   & + & {
//     margin-top: 1rem;
//   }
// `;

// function App() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595'
//         }
//       }}
//     >
//       <AppBlock>
//         <ButtonGroup>
//           <Button size="large">BUTTON</Button>
//           <Button>BUTTON</Button>
//           <Button size="small">BUTTON</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="gray" size="large">BUTTON</Button>
//           <Button color="gray">BUTTON</Button>
//           <Button color="gray" size="small">BUTTON</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="pink" size="large">BUTTON</Button>
//           <Button color="pink">BUTTON</Button>
//           <Button color="pink" size="small">BUTTON</Button>
//         </ButtonGroup>
//       </AppBlock>
//     </ThemeProvider>
//   );
// }

// export default App;

// ----------------------------------------------- //
// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import Button from './components/Button';

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;

// const ButtonGroup = styled.div`
//   & + & {
//     margin-top: 1rem;
//   }
// `;

// function App() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595'
//         }
//       }}
//     >
//       <AppBlock>
//         <ButtonGroup>
//           <Button size="large">BUTTON</Button>
//           <Button>BUTTON</Button>
//           <Button size="small">BUTTON</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="gray" size="large">
//             BUTTON
//           </Button>
//           <Button color="gray">BUTTON</Button>
//           <Button color="gray" size="small">
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="pink" size="large">
//             BUTTON
//           </Button>
//           <Button color="pink">BUTTON</Button>
//           <Button color="pink" size="small">
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button size="large" outline>
//             BUTTON
//           </Button>
//           <Button color="gray" outline>
//             BUTTON
//           </Button>
//           <Button color="pink" size="small" outline>
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button size="large" fullWidth>
//             BUTTON
//           </Button>
//           <Button size="large" color="gray" fullWidth>
//             BUTTON
//           </Button>
//           <Button size="large" color="pink" fullWidth>
//             BUTTON
//           </Button>
//         </ButtonGroup>
//       </AppBlock>
//     </ThemeProvider>
//   );
// }

// export default App;

// ----------------------------------------------- //

// import React, { useState } from 'react';
// // import styled from 'styled-components';
// import styled, {ThemeProvider} from 'styled-components';
// import Button from './components/Button';
// import Dialog from './components/Dialog';

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;

// const ButtonGroup = styled.div`
//   & + & {
//     margin-top: 1rem;
//   }
// `;

// function App() {

//   const [dialog, setDialog] = useState(false); 
//   const onClick = () => {
//     console.log('확인'); 
//     setDialog(false);
//   };
//   const onCancel = () => {
//     console.log('취소');
//     setDialog(false); 
//   };

//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595'
//         }
//       }}
//     >
//       <>
//         <AppBlock>
//           <ButtonGroup>
//             <Button size="large">BUTTON</Button>
//             <Button>BUTTON</Button>
//             <Button size="small">BUTTON</Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button color="gray" size="large">
//               BUTTON
//             </Button>
//             <Button color="gray">BUTTON</Button>
//             <Button color="gray" size="small">
//               BUTTON
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button color="pink" size="large">
//               BUTTON
//             </Button>
//             <Button color="pink">BUTTON</Button>
//             <Button color="pink" size="small">
//               BUTTON
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button size="large" outline>
//               BUTTON
//             </Button>
//             <Button color="gray" outline>
//               BUTTON
//             </Button>
//             <Button color="pink" size="small" outline>
//               BUTTON
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup>
//             <Button size="large" fullWidth>
//               BUTTON
//             </Button>
//             <Button size="large" color="gray" fullWidth>
//               BUTTON
//             </Button>
//             <Button size="large" color="pink" fullWidth>
//               BUTTON
//             </Button>
//           </ButtonGroup>
//         </AppBlock>
//         {/* Dialog 컴포넌트를 예시 내용과 함께 AppBlock 하단에 넣어준다.
//         그리고 ThemeProvider 내부는 하나의 리액트 엘리먼트로 감싸져 있어야 하기 때문에 
//         AppBlock과 Dialog를 빈태그 <></> 로 감싸준다. */}
//         <Dialog
//           title="정말로 삭제하시겠습니까?"
//           confirmText="삭제"
//           cancelText="취소"
//           onConfirm={onConfirm}
//           onCancel={onCancel}
//           visibl={dialog}
//         >
//           데이터를 정말로 삭제하시겠습니까?
//         </Dialog>
//       </>
//     </ThemeProvider>
//   );
// }

// export default App;

// ----------------------------------------------- //
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large">
              BUTTON
            </Button>
            <Button color="pink">BUTTON</Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              BUTTON
            </Button>
            <Button size="large" color="gray" fullWidth>
              BUTTON
            </Button>
            <Button size="large" color="pink" fullWidth onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;

// ----------------------------------------------- //
// ----------------------------------------------- //
// ----------------------------------------------- //
// ----------------------------------------------- //
