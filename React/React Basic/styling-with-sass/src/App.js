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

import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="large" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;

// --------------------------------- //


