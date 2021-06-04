---
date: 2021-06-03-Thursday
---

# props를 통해 컴포넌트 값 전달하기 
- 이번에는 컴포넌트의 props 라는 개념에 대해서 알아보자.
- `props`는 'properties'의 줄임말이다. 
- `props`는 우리가 어떤 특정 값을 컴폼넌트에 전달해줘야 할 때 사용하는 아이다.
더 자세한 부분은 코드를 통해 알아보자;  

<br>

> props 의 기본 사용법
- 아래와 같이 js 파일 두 개가 작성되어 있다고 하면... 
- App.js
e.g.
```javascript
	import React from 'react';
	import Hello from './Hello';

	function App() {
		return (
			<Hello name="react" />
		);
	}

	export default App;
```
- Hello.js
e.g.
```javascript
	import React from 'react';

	function Hello() {
		return <div>안녕하세요</div>
	}

	export default Hello;
```
- 여기서 이제 Hello 컴포넌트에서 **name**이라는 값을 사용하고 싶을 떄는 어떻게 해야하는지 알아보자.   
우선 App.js에는 Hello라는 컴포넌트의 name이 "react"로 적혀져 있다는 것을 알 수 있고, Hello라는 function은 Hello.js 파일에 정의되어 있다는 것을 알 수 있다. 이때 Hello의 인자로 (props)를 받아오면 된다.    
아래와 같이;
- Hello.js
e.g.
```javascript
	import React from 'react';

	function Hello(props) {   // 파라미터로 props를 전달...
	  // props라는 객체가 가지고 있는 속성중 name을 조회하고 싶으면 props.name
		// 거기다 props.name이라는 값을 조회하고 그 값을 그대로 받아오고 싶으면 중괄호 {}를 사용하면 된다!  
		return <div>안녕하세요 {props.name}</div>  
	}

	export default Hello;
```
- 위와 같이 컴포넌트에게 전달되는 props라는 파라미터를 통하여 값을 조회할 수 있고, props는 **객체 형태로 전달된다**.  
만약, `name` 값을 조회하고 싶다면 `props.name`을 조회하면 된다. 
- 응용 e.g.    
[App.js]
```javascript
	import React from 'react';
	import Hello from './Hello';

	function App() {
		return (
			// color는 red
			<Hello name="react" color="red" />
		);
	}

	export default App;
```

[Hello.js]

```javascript
	import React from 'react';

	function Hello(props) {
		// return <div style={}>안녕하세요</div>  // style에 위에서 정의된 값 자체를 받아올 거니까 중괄호 {}를 사용
		return <div style={{
			color: props.color
		}}>안녕하세요, {props.name}</div>;
	}

	export default Hello;
```
- 여기서 또 추가적으로 반복적으로 사용되는 `props.`을 생략하고 싶으면 **비구조할당(/구조분해)**라는 문법을 사용해주면 된다;
[Hello.js]

```javascript
	import React from 'react';

	function Hello({color, name}) {   // 비구조할당으로 {color, name}값을 미리 추출해 줄 수 있다...
		return <div style={{
			// color: color   -> 또는 객체에서 그냥 color만 해줘도 상관없음! 
			color  
		}}>안녕하세요, {name}</div>;
	}

	export default Hello;
```

<br>

> props를 사용하지 않고 기본적으로 사용 할 값을 설정하는 방법 
- 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 `defaultProps`라는 값을 설정하면 된다.

[App.js]
[Hello.js]




e.g.
```javascript
```
e.g.
```javascript
```

<br>
<br>

---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/02-prepare.html
	- http://tcpschool.com/xml/xml_intro_basic
	- https://ko.reactjs.org/docs/introducing-jsx.html
	- https://velog.io/@kim-jaemin420/JSX-%EA%B8%B0%EB%B3%B8-%EA%B7%9C%EC%B9%99
	- https://dabo-dev.tistory.com/20
	- https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html

</details>
---

