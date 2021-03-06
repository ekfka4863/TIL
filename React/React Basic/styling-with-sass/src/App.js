// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// --------------------------------- //

// import React from 'react';
// import './App.scss';
// import Button from './components/Button';

// function App() {
//   return (
//     <div className="App">
//       <div className="buttons">
//         <Button size="large" color="blue">BUTTON</Button>
//         {/* <Button size="medium">BUTTON</Button>  -> medium은 이미 디폴트 값으로 정해져있으니까! */}
//         <Button color="blue">BUTTON</Button>
//         <Button size="small" color="blue">BUTTON</Button>
//       </div>
//       <div className="buttons">
// 					<Button size="large" color="gray">
// 						BUTTON
// 					</Button>
// 					<Button color="gray">BUTTON</Button>
// 					<Button size="small" color="gray">
// 						BUTTON
// 					</Button>
// 				</div>
// 				<div className="buttons">
// 					<Button size="large" color="pink">
// 						BUTTON
// 					</Button>
// 					<Button color="pink">BUTTON</Button>
// 					<Button size="small" color="pink">
// 						BUTTON
// 					</Button>
// 				</div>
//     </div>
//   );
// }

// export default App;

// --------------------------------- //

// import React from 'react';
// import './App.scss';
// import Button from './components/Button';

// function App() {
//   return (
//     <div className="App">
//       <div className="buttons">
//         <Button size="large">BUTTON</Button>
//         <Button>BUTTON</Button>
//         <Button size="small">BUTTON</Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="gray">
//           BUTTON
//         </Button>
//         <Button color="gray">BUTTON</Button>
//         <Button size="small" color="gray">
//           BUTTON
//         </Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="pink">
//           BUTTON
//         </Button>
//         <Button color="pink">BUTTON</Button>
//         <Button size="small" color="pink">
//           BUTTON
//         </Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="blue" outline>
//           BUTTON
//         </Button>
//         <Button color="gray" outline>
//           BUTTON
//         </Button>
//         <Button size="small" color="pink" outline>
//           BUTTON
//         </Button>
//       </div>
//       {/* fullWidth 클래스 추가한 버튼들 구현 */}
//       <div className="buttons">
//         <Button size="large" fullWidth>
//           BUTTON
//         </Button>
//         <Button size="large" fullWidth color="gray">
//           BUTTON
//         </Button>
//         <Button size="large" fullWidth color="pink">
//           BUTTON
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App;

// --------------------------------- //


// import React from 'react';
// import './App.scss';
// import Button from './components/Button';

// function App() {
//   return (
//     <div className="App">
//       <div className="buttons">
//         <Button size="large" onClick={() => console.log('클릭됐다!')}>
//           BUTTON
//         </Button>
//         <Button>BUTTON</Button>
//         <Button size="small">BUTTON</Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="gray">
//           BUTTON
//         </Button>
//         <Button color="gray">BUTTON</Button>
//         <Button size="small" color="gray">
//           BUTTON
//         </Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="pink">
//           BUTTON
//         </Button>
//         <Button color="pink">BUTTON</Button>
//         <Button size="small" color="pink">
//           BUTTON
//         </Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" color="blue" outline>
//           BUTTON
//         </Button>
//         <Button color="gray" outline>
//           BUTTON
//         </Button>
//         <Button size="small" color="pink" outline>
//           BUTTON
//         </Button>
//       </div>
//       <div className="buttons">
//         <Button size="large" fullWidth>
//           BUTTON
//         </Button>
//         <Button size="large" color="gray" fullWidth>
//           BUTTON
//         </Button>
//         <Button size="large" color="pink" fullWidth>
//           BUTTON
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App;

// --------------------------------- //

import React, {useState} from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>checked: </b>
        {check ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default App;
// --------------------------------- //


// --------------------------------- //
