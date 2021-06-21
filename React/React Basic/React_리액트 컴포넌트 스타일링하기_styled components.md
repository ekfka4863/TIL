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

		background: $blue; // 주석 사용
		&:hover {
			background: lighten($blue, 10%); // 색상 10% 밝게
		}

		&:active {
			background: darken($blue, 10%); // 색상 10% 어둡게
		}
	}
```




<br>
<hr>
<br>

## 2. CSS Module



<br>
<hr>
<br>

## 3. Styled-components



<br>
<br>


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
