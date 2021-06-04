---
date: 2021-06-03-Thursday
---

# JSX 
- `JSX`는 리액트에서 생김새를 정의할 때, 사용하는 문법이다.   
(cf. UI가 어떻게 실제로 보일지를 설명한다.)   
- 얼핏보면 HTML 같이 생겼지만 실제로는 JavaScript 이다.   
(cf. [Babel](https://babeljs.io/)이라는 도구를 사용해서 XML 형태를 JavaScript로 변환시켜줄 수 있다.)   
- 단, JSX를 사용하기 위해서는 몇가지의 규칙들을 잘 따라줘야한다. 어떤 규칙들이 있는지 알아보자! 

> JSX 작성 규칙 
- 태그는 무조건 닫혀있어야 한다;   
e.g. 
```javascript
	// 당연한 소리라고 할 수 있지만 HTML에서 input이나 br 태그와 같은 경우 닫히는 태그가 없이 그냥 사용해도 무방하기 때문에 실수할 수 있다.
	// 꼭 아래와 같이 태그를 닫아주자!
	<div></div>
	<input />     // cf. self closing tag
```
- 두개 이상의 태그는 꼭 하나의 태그로 감싸져 있어야 한다;
e.g. 
```javascript
	// 아래와 같이 불필요한 div를 하나 더 만들어서...  
	<div>
		<Hello />
		<div>안녕히계세요</div>
	</div>

	// 또는 ... 불필요한 div를 넣어주기 싫으면 fragment를 사용해서... 
	<>
		<Hello />
		<div>안녕히계세요</div>
	</>
```
- `return` 할 때, 괄호 ()는 단순히 가독성을 위한 것이다;
e.g. 
```javascript
	// 아래와 같이 return 뒤에 괄호 ()가 없어도 정상작동 한다. 
	// 하지만 같은 선상에 <></>가 있지 않기 때문에 가독성에 좋지 않다... 그래서 ... 
	function App() {
		return <>     
		  <Hello />
			<div>안녕히계세요</div>
		</>
	}
	
	// 아래와 같이 괄호 ()를 사용해서 가독성을 높여주는 것!
	function App() {
		return (
			<>     
				<Hello />
				<div>안녕히계세요</div>
			</>
		) 
	}
```
- JSX 내부에서 JS 값을 사용하는 방법;
e.g. 
```javascript
	function App() {
		const name = 'react';    // name 이라는 상수에 'react'를 할당했다고 가정해보자... 
		return (
			<>
				<Hello />
				<div></div>
			</>
		);
	}
	// 그리고 JSX 내부 <div></div>안에서 이 name 이라는 상수를 사용하고 싶다고 하면 어떻게 사용해야 할까??
	// 만약 그냥 <div>name</div>이라고 해버리면 브라우저에서는 그냥 name이라는 텍스트가 보일 것이다. 그래서 name이라는 상수가 갖고있는 값을 불러내고 싶을 때는 아래와 같이 중괄호 {}를 사용한다;
	function App() {
		const name = 'react';    
		return (
			<>
				<Hello />
				<div>{name}</div>     
			</>
		);
	}
```
- JSX에서 스타일입히는 방법;
e.g. 
```javascript
	// HTML에서 inline 방식으로 스타일을 입히는 방법은 아래와 같다;
	<div style="background-color: black"> name </div>

	// 위와 같은 방식은 JSX에서 작동하지 않는다. 
	// 대신에 객체를 만들어 줘야한다;
	function App() {
		const name = 'react';    
		const style = {   // style이란 객체를 만들어 준다...
			backgroundColor: 'black',   // CSS에서 -로 구분되어 있는 속성은 카멜케이스로 작성한다 
			color: 'aqua',
			// font-size는 단위를 생략하면 기본적으로 px로 간주한다.
			fontSize: 24,
			// 단위를 정해주고 싶다면 문자열로 입력한다.
			padding: '1rem'
		};

		return (
			<>
				<Hello />
			// JSX 스타일 적용할 때는 아래와 같이;
				<div style={style}>{name}</div>  
			</>
		);
	}

```
- JSX에서 클래스 설정하는 방법;
e.g. 
```html
  // 일반적으로 HTML에서는 아래와 같이 클래스를 넣어준다; 
	<div class="name">name</div>

	// 하지만 JSX에서는 class가 아니라 className이라고 적어줘야 한다; 
```
```css
	 /* JSX에서 클래스를 넣어주는 방법을 확인하기 위해 우선 지난 시간에 사용하던 App.css 파일에 가서 아래와 같은 클래스를 만들어 준다;  */
	.gray-box {
		background-color: gray;
		width: 64px;
		height: 64px;
	}
```
```javascript
	// 그리고 다시 App.js 로 돌아가 css 파일을 import 한다. 
	// import './App.css';
	// 그리고 className을 통해 클래스 이름을 부여해준다;
	function App() {
		const name = 'react';
		const style = {
			backgroundColor: 'black',
			color: 'aqua',
			fontSize: 24,
			padding: '1rem'
		};

		return (
			<>
				<Hello />
				// className을 통해 미리 css 파일에서 만들어논 gray-box라는 클래스 이름을 부여한다; 
				<div className="gray-box" style={style}>{name}</div>
			</>
		);
	}
	// 이때, 사실 class를 통해 클래스 이름을 부여해도 작동하기는 한다. 하지만 브라우저에서 경고를 띄우기 때문에 작동가능해도 꼭 className을 사용하자! 
```
- JSX에서 주석다는 방법;
e.g. 
```javascript
	// 원래 우리가 사용하는 주석을 JSX에서 그대로 사용하면 화면에 노출된다.
	// 따라서 JSX에서 주석을 달려면 중괄호 {}를 사용해서 작성해야 한다.
	function App() {
		return (
			{/* 어쩌고 저쩌고 */}
			<>
				<Hello />
				<div></div>
			</>
		);
	}

	// 태그 안에 주석을 달아줄 수 도 있다;
	function App() {
		return (
			{/* 어쩌고 저쩌고 */}
			<>
				<Hello
				// 이렇게 작성한 주석은 화면에 보이지 않는다. 
				/>
				<div
				// 프론트엔드 개발자가 되는 날까지 홧팅! 
					></div>
			</>
		);
	}
```




-----

e.g. 
```javascript
	return <div>안녕하세요</div>;
```
>> 부록: XML이란? 
- 위에서 잠깐 언급된 `Babel`이란 도구가 XML 형태를 자바스크립트로 변환해 준다고 했는데...  
- 리액트 컴포넌트 파일에 작성되는 XML 형태란 <u>XML(Extensible Markup Language)은 W3C에서 개발된, 다른 특수한 목적을 갖는 마크업 언어를 만드는데 사용하도록 권장하는 다목적 마크업 언어</u>다.
- 더 자세하게는...
	- XML은 EXtensible Markup Language의 약자이며, 1998년에 W3C 표준 권고안에 포함되었다.
	- XML은 HTML과 매우 비슷한 문자 기반의 마크업 언어(text-based markup language)이다.
	- 이 언어는 사람과 기계가 동시에 읽기 편한 구조로 되어 있다.
	- 그러나 XML은 HTML처럼 데이터를 보여주는 목적이 아닌, 데이터를 저장하고 전달할 목적으로만 만들어졌다.
	- 또한, XML 태그는 HTML 태그처럼 미리 정의되어 있지 않고, 사용자가 직접 정의할 수 있다.   
	e.g. 
	```xml 
		<?xml version="1.0" encoding="UTF-8"?>

		<programming_languages>

		<language>
			<name>HTML</name>
			<category>web</category>
			<developer>W3C</developer>
			<version status="working draft">5.1</version>
			<priority rating="1">high</priority>
		</language>

			<language>
				<name>CSS</name>
				<category>web</category>
				<developer>W3C</developer>
				<version status="stable">3.0</version>
				<priority rating="3">middle</priority>
			</language>

		<language>
			<name korean="파이썬">Python</name>
			<category>application</category>
			<developer>Python</developer>
			<version status="stable">3.52</version>
			<priority rating="4">middle</priority>
		</language>

		</programming_languages>
	```
	- 더 많은 정보는 [링크](http://tcpschool.com/xml/intro) 참고! 

<br>

>> 부록: JSX이란? 
- e.g. 
```jsx
	const element = <h1>Hello, world!</h1>;
```
- 위에 희한한 태그 문법은 문자열도, HTML도 아니다.  
`JSX`라 하며 JavaScript를 확장한 문법이다. 
- 더 많은 정보는 [링크](https://ko.reactjs.org/docs/introducing-jsx.html) 참고! 

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

