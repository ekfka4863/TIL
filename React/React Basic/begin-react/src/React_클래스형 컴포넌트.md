---
date: 2021-06-19-Saturday
---

# class형 컴포넌트 
- 지금까지 공부한 컴포넌트는 함수형 컴포넌트였다.    
클래스형 컴포넌트는 컴포넌트를 선언하는 또 다른 방식이다.      
~~(cf. 컴포넌트를 선언하는 방식은 2가지; 함수형 컴포넌트와 클래스형 컴포넌트)~~     
이제는 잘 사용하지 않지만, 그래도 클래스형 컴포넌트에 대해 알아둘 필요는 있다.     
	- 이유:    
		- 나중에 클래스형 컴포넌트를 사용하는 프로젝트를 유지보수하게 되는 일이 있을 수도 있고, 
		- 함수형 컴포넌트 + Hooks로도 못하는 작업이 2개정도 있기도 하고 
		- 또, 옛날에 만들어진 리액트 관련 라이브러리의 경우에는 Hooks 지원이 아직 안되는 경우도 있고, react-native 관련 라우터 라이브러리인 react-native-navigation 의 경우에도 클래스형 컴포넌트를 어쩔 수 없이 써야 하는 일이 종종 있기 때문.

<br>

> 클래스형 컴포넌트를 만드는 방법
- 클래스형 컴포넌트를 만드는 방식으로 우리가 기존에 작성했던 `Hello` 컴포넌트를 만들어 보자;    

e.g. 

[Hello.js]

```javascript
	// step 1) 클래스형 컴포넌트를 만들 때 우선 상단에서 Commponent를 불러와야한다
	import React, { Component } from 'react';

	class Hello extends Component {   // step 2) 그리고 class라는 키워드와 컴포넌트 이름을 적고, 뒤에다 extends Component 라고 적어준다 
		render() {                      // step 3) 그리고 클래스형 컴포넌트는 render() 라는 메서드가 있어야 한다. 
			return (                      // step 4) 그리고 render() {} 의 내부에서는 JSX를 반환(return) 해 줘야한다 
				<div style={this.props.color}>
					{/* 여기서 props를 읽어주려서 this.props하고 그 뒤에 props의 이름을 넣어주면 된다 */}
					{this.props.isSpecial && <b>*</b>} 
					안녕하세요 {this.props.name}  
				</div>
			);
		}
	}

	Hello.defaultProps = {
		name: '이름없음'
	};

	export default Hello;
```
- 여기서 비구조할당을 통해서 props의 값을 따로 선언해줄 수도 있다;    
```javascript
	import React, { Component } from 'react';
	
	// Tip!!
	// defaultProps를 설정하는 것은 아래와 같이 함수형 컴포넌트에서 했을 때와 똑같이 해줘도 되고 ... 
	// Hello.defaultProps = {
	// 	name: '이름없음'
	// };
	// 아니면 클래스형 컴포넌트에서는 static 키워드를 사용해서 defaultProps를 설정할 수도 있다;  
	static defaultProps = {
    name: '이름없음'
  };

	class Hello extends Component {   
		render() {                      
			const { isSpecial, name, color } = this.props;   // 비구조할당
			return (                      
				<div style={color}>
					{isSpecial && <b>*</b>} 
					안녕하세요 {name}  
				</div>
			);
		}
	}
 
	export default Hello;
```
- 이렇게 하면 클래스형 컴포넌트가 완성된다.    
함수형 컴포넌트가 클래스형 컴포넌트로 바껴도 기능/역할상 차이점은 없다.    
다만, <u>클래스형 컴포넌트와 함수형 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 나중에 배우게 될 `state 기능 및 라이프사이클 기능`을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것</u>이다.     
- 이에 대해 더 알아보기 전에 우리가 이전에 만들었던 `Counter` 컴포넌트를 클래스형 컴포넌트로 바꾸는 연습을 해보자;   

e.g.       

[Counter.js]      

```javascript
	// 아래의 함수형 컴포넌트를 클래스형 컴포넌트로 바꾸려면 어떻게...?? 

	import React, { useReducer } from 'react';

	function reducer(state, action) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
		}
	}

	function Counter() {
		const [number, dispatch] = useReducer(reducer, 0);

		const onIncrease = () => {
			dispatch({ type: 'INCREMENT' });
		};

		const onDecrease = () => {
			dispatch({ type: 'DECREMENT' });
		};

		return (
			<div>
				<h1>{number}</h1>
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
			</div>
		);
	}

	export default Counter;
```
- `Counter` 컴포넌트 클래스형으로 바꾸기;    

[Counter.js]      

```javascript
	// 아래의 함수형 컴포넌트를 클래스형 컴포넌트로 바꾸려면 어떻게...?? 

	import React, { Component } from 'react';

	class Counter extends Component {
		render() {
			return (
				<div>
					<h1>0</h1>
					<button> +1 </button>
					<button> -1 </button>
				</div>
			);
		}
	}

	export default Counter;
	// cf. 아직 기능은 구현하지 않음!! 
```
- 위의 `Counter` 컴포넌트는 아직 기능은 구현되지 않았지만, 잘 렌더링 되는지 확인차 `index.js`를 열어서 App 대신 Counter 를 렌더링해보자.     

[index.js]    

```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';
	// import App from './App';
	import * as serviceWorker from './serviceWorker';
	import Counter from './Counter';

	ReactDOM.render(<Counter />, document.getElementById('root'));

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
```

<br>

> 커스텀 메서드 만들기
- 여기까지 잘 따라와서 카운터가 잘 렌더링 됐다면, 이번엔 커스텀 메서드를 만드는 방법을 알아보자.    
- 커스텀 메서드 만드는 방법;     
e.g.    

[Counter.js]

```javascript
	import React, { Component } from 'react';

	// step 1) handleIncrease() {}랑 handleDecrease() {} 메서드를 만들어 준다.
	// cf. 클래스 내부에 종속된 함수를 "메서드"라 부르고, 클래스에서 커스텀 메서드를 만들 때 보통 이름을 "handle..." 이라고 짓는다. 단. 정해진 규칙은 아니므로 꼭 지킬 필요는 없다.
	handleIncrease() {
		console.log(this);       // undefined를 출력
		console.log('increase');
	}
	handleDecrease() {
		console.log('decrease');
	}

	class Counter extends Component {
		render() {
			return (
				<div>
					<h1>0</h1>
					{/* step 2) 클릭시 메서드 호출. 이런식으로 -> this.메서드명 */}
					<button onClick={this.handleIncrease}> +1 </button>   
					<button onClick={this.handleDecrease}> -1 </button>
				</div>
			);
		}
	}

	export default Counter;
```
- 위와 같이 코드를 작성하고 이제 버튼을 누르면 'increase' 또는 'decrease'라는 문구가 나타날 것이다.   
- 이제 여기서 필요한 것은 상태를 업데이트 하는 건데, 결론적으로 상태를 업데이트 하기 위해서는 `this.setState`라는 함수를 사용해야 한다.   
하지만 여기서 문제!!     
`this`는 컴포넌트 인스턴스를 가르켜야 하는데, 현재 구현한 handleIncrease 와 handleDecrease에서 this를 조회하려고 `console.log(this);`를하면 컴포넌트 인스턴스를 가르키지 않고 `undefined`를 출력한다.    
이렇게 되는 이유는 우리가 만든 메서드들을 각 button 들의 이벤트로 등록하게 되는 과정 ~~(e.g. onClick={this.handleIncrease} / onClick={this.handleDecrease})~~ 에서 각 메서드(handleIncrease 와 handleDecrease)와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문이다.   
이를 해결하는 3가지의 방법이 있다; 
	- 1. 클래스 생성자 메서드 `constructor`에서 함수를 미리 `bind` 하는 작업 해주기     
```javascript
		// 가장 일반적인 방법 

		import React, { Component } from 'react';

		class Counter extends Component {
			constructor(props) {
				super(props);
				// 함수의 bind 를 사용하면, 해당 함수에서 가르킬 this 를 직접 설정해줄 수 있다
				// constructor 에서는 props 파라미터로 받아오고 super(props) 를 호출해주어야 하는데, 이는 이 클래스가 컴포넌트로서 작동 할 수 있도록 해주는 Component 쪽에 구현되어있는 생성자 함수를 먼저 실행해주고, 우리가 할 작업을 하겠다 라는 것을 의미한다
				this.handleIncrease = this.handleIncrease.bind(this);
				this.handleDecrease = this.handleDecrease.bind(this);
			}

			handleIncrease() {
				console.log('increase');
				console.log(this);
			}

			handleDecrease() {
				console.log('decrease');
			}

			render() {
				return (
					<div>
						<h1>0</h1>
						<button onClick={this.handleIncrease}>+1</button>
						<button onClick={this.handleDecrease}>-1</button>
					</div>
				);
			}
		}

		export default Counter;
```
	- 2. 커스텀 메서드를 선언 할 때 화살표 함수 문법을 사용해서 작성하기
```javascript
		import React, { Component } from 'react';

		class Counter extends Component {
			handleIncrease = () => {
				console.log('increase');
				// console.log(this);
			};

			handleDecrease = () => {
				console.log('decrease');
			};

			render() {
				return (
					<div>
						<h1>0</h1>
						<button onClick={this.handleIncrease}>+1</button>
						<button onClick={this.handleDecrease}>-1</button>
					</div>
				);
			}
		}

		export default Counter;
```
	- 3. `state`와 `setState`로 상태 선언 및 관리하기 
```javascript 
		import React, { Component } from 'react';

		class Counter extends Component {
			state = {           // 이때, state는 무조건 객체여야한다 
				counter: 0       // 초깃값 설정 
			};
			handleIncrease = () => {
				this.setState({
					counter: this.state.counter + 1
				});
			};

			handleDecrease = () => {
				this.setState({
					counter: this.state.counter - 1
				});
			};

			render() {
				return (
					<div>
						<h1>{this.state.counter}</h1>
						<button onClick={this.handleIncrease}>+1</button>
						<button onClick={this.handleDecrease}>-1</button>
					</div>
				);
			}
		}

		export default Counter;
```

///



이제 여기서 필요한 것은 `state`다. state는 컴포넌트 내부에서 바꿀 수/바뀔 수 있는 값을 의미한다.    
함수형 컴포넌트에서는 useState를 사용했다면, 클래스형 컴포넌트에서는 state를 사용하는 거라 이해하면 쉽다.   

<br>

>> 클래스형 컴포넌트에서 state 사용 방법 




<br>

> 상태 선언하기
<!-- - 여기까지 잘 따라와서 카운터가 잘 렌더링 됐어도 기능이 구현되지 않았기 때문에 작동하지 않을 것이다.    
여기서 카운터가 작동하기 위해서 (/상태가 변하게 하기 위해서) `state`가 필요하다.     -->
<br>

> 상태 업데이트하기

<br>

> setState 의 함수형 업데이트

<br>


<br>
<br>

e.g. 
[Counter.js]

[Hello.js]

```javascript
```

> 


e.g.
```javascript
```
e.g.
```javascript
```

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

📌😉

<br>
<br>
---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/20-useReducer.html
	- https://xiubindev.tistory.com/99

	
</details>
---
