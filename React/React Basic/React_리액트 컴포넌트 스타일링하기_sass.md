---
date: 2021-06-21-Monday
---

# 리액트 컴포넌트 스타일링하기
- 리액트에서 컴포넌트를 스타일링할 때는 다양한 방식을 사용할 수 있다. 리액트에서 컴포넌트를 스타일링 하는 가장 기본적인 방법은 css 파일을 만들어서 컴포넌트에서 import 해서 사용하는 것이다. 이 방법은 어떤 사람들에게는 충분히 편리할 수도 있지만, 컴포넌트를 스타일링 할 때 다른 도구들을 사용하면 훨씬 더 편하게 작업을 할 수 있다.    
이번 시간에는 리액트 프로젝트에서 컴포넌트를 스타일링 할 때 자주 사용되는 다음과 같은 기술들에 대해 알아보겠다;    
	- **Sass**: 자주 사용되는 CSS 전처리기 중 하나로 확장된 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있도록 해 준다
	- **CSS Module**: 스타일을 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 ㅇ낳도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션이다
	- **Styled-components**: 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해준다

<br>
<hr>
<br>

## 1. Sass
- Sass _(cf. Syntactically Awesome Style Sheets: 문법적으로 짱 멋진 스타일시트)_ 는 **CSS pre-processor**로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라, 코드의 가독성을 높여주어 유지보수에도 도움을 준다.       
~~(cf. Sass에 대해 더 알아보고 싶다면 [링크1](https://velopert.com/1712), [링크2](https://sass-guidelin.es/ko/) 클릭!)~~
- Sass 에서는 두가지의 확장자 (.scss/.sass) 를 지원한다.     
~~Sass 가 처음 나왔을떈 sass 만 지원되었다. 하지만 기존 css와는 달라 개발자들에게 혼란스러운 부분이 있었다. 그래서 나온것이 scss이고, scss는 css와 조금 더 유사한 면이 있다. 더 많은 차이점은 [링크](https://sass-lang.com/guide) 클릭!~~     
보통은 `.scss` 확장자를 많이 사용한다.     
그리고 여기서도 예시로 사용되는 것은 scss 문법일테지만 그냥 sass라고 읽을 것이다.     

<br>

> 시작하기 
- 본격적으로 Sass를 사용해보자. 먼저 새로운 리액트 프로젝트를 만든다;     
```xml
	$ npx create-react-app styling-with-sass
```
- 그 다음, 해당 프로젝트 디렉터리로 이동해서 `node-sass`라는 라이브러리 ~~(cf. 이 라이브러리는 Sass 를 CSS 로 변환해주는 역할을 한다)~~ 를 설치한다;    
```xml
	$ cd styling-with-sass
	$ yarn add node-sass
```

<br>

> Button 컴포넌트 만들기
- Button 이라는 컴포넌트를 만들고, Sass 를 사용해서 스타일링을 해보자. styling-with-sass 폴더 안에 src 디렉터리러 이동한 뒤, components 디렉터리를 생성 한다. 그리고 그 안에 Button 컴포넌트를 이라고 만든다;      

e.g.    

[components/Button.js]    

```javascript
	import React from 'react';
	import './Button.scss';

	function Button({ children }) {
		return <button className="Button">{children}</button>;
	}

	export default Button;
```
- 그리고, components 디렉터리에 Button.scss 파일도 만든다;    

e.g.     

[components/Button.scss]     

```scss
	$blue: #228be6; // scss 에서 변수 선언시 $ 를 사용 

	.Button {
		display: inline-flex;
		color: white;
		font-weight: bold;
		outline: none;
		border-radius: 4px;
		border: none;
		cursor: pointer;

		height: 2.25rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;

		background: $blue; // 위에서 변수로 만들어준 색 배경색상으로 지정
		&:hover {
			background: lighten($blue, 10%); // 호버시 lighten이란 함수로 색상 10% 밝게
		}

		&:active {
			background: darken($blue, 10%); // 클릭시 darken이란 함수로 색상 10% 어둡게
		}
	}
```
- 위와 같이 기존의 css에서는 사용하지 못하던 문법(e.g. 변수의 사용, lighten/darken과 같은 함수 등)들을 사용해보았다.  
- 이제 이 버튼을 App 컴포넌트에서 사용해보자;    
e.g.    

[App.js]    

```javascript
	import React from 'react';
	import './App.scss';
	import Button from './components/Button';

	function App() {
		return (
			<div className="App">
				<div className="buttons">
					<Button>BUTTON</Button>
				</div>
			</div>
		)
	}

	export default App;
```
- 이때, 기존의 App.css 파일은 `App.scss`로 파일 이름을 수정한 뒤, 내용도 아래와 같이 수정해줘야한다;   

[App.scss]      

```scss
	.App {
		width: 512px;
		margin: 0 auto;
		margin-top: 4rem;
		border: 1px solid black;
		padding: 1rem;
	}
```
- 그러면 아래와 같은 화면이 보일 것이다;    

<div style="padding-left: 40px;">
	<img src="./images/리액트컴포넌트스타일링하기scss.png" alt="리액트컴포넌트스타일링하기scss" style="width: 300px;" />	
</div>

- 여기까지 성공했다면 이제 보다 다양한 옵션들을 가진 버튼들을 만들어보자;   

<br>

> 버튼 사이즈 조정하기 (👉 버튼의 size props 설정하기)
- 방금 만들었던 버튼을 large, medium, small 크기별로 렌더링 될 수 있게 버튼의 사이즈를 조정해보자.
- 우선, Button.js에서 아래와 같이 `defaultProps`를 통하여 `size`의 기본값을 `medium`으로 설정하고, 이 값은 button의 className에 넣어보자;    

e.g.    

[Button.js]       

```javascript
	import React from 'react';
	import './Button.scss';

	function Button({ children, size }) {    // children, size라는 props를 설정. 이때, size는 large, medium, small 
		
		{/* size로 받아온 값을 className에다 넣어줄건데, 이를 구현하기 위해서는 배열을 하나 만들고, 그 배열 안에 'Button'과 size를 넣고, 그리고 .join()메서드를 사용해서 공백(' ')을 가지고 조인시키면... e.g. 받아온 size 값이 'medium'이라고 가정하면 className은 "Button medium"이런식으로 형성될 것이다! */}
		{/* 옵션 2. 아니면은 템플릿 리터럴을 사용해서 className을 정해줘도 괜찮다. e.g. <button className={`Button ${size}`}> 
		하지만! 나중에 size말고도 다른 props를 받아올 것을 계획하고 있다면 옵션 1.과 같이 배열을 만들어서 공백으로 join시키는 것을 추천! */}
		return <button className={['Button', size].join(' ')}>   {children}</button>;
	}

	Button.defaultProps = {
		size: 'medium'
	};

	export default Button;
```





<br>

> 버튼 색상 설정하기 (👉 버튼의 color props 설정하기)




<br>

> outline 옵션 만들기 (👉 outline props 설정하기)

<br>

> 전체 너비 차지하는 옵션 (👉 fullWidth props 설정하기)

<br>

> ...rest props 전달하기 



<br>
<br>

e.g.
```javascript
```
e.g.
```javascript
```

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
	- https://react.vlpt.us/styling/01-sass.html
	- https://twojobui.tistory.com/8
	- https://codingmania.tistory.com/339
https://velog.io/@ji-yeong/React%EC%97%90%EC%84%9C-SassScss-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
- https://medium.com/@jsh901220/react%EC%97%90-scss-%EC%A0%81%EC%9A%A9%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-1-c7bd2895f5a6

	
</details>

---
