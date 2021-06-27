---
date: 2021-06-24-Thursday, 2021-06-27-Sunday
---

# 리액트 컴포넌트 스타일링하기

<br>

## 3. styled-components
- 이번에 배워볼 기술은 CSS in JS 라는 기술이다.    
이 문구가 뜻하는 그대로, 이 기술은 JS 안에 CSS 를 작성하는 것을 의미 ~~(cf. 자바스크립트 코드 안에서 스타일을 바로 선언할 수도 있고, 또는 스타일을 선언하면서 바로 컴포넌트를 만들어낼 수도 있다!!)~~ 하는데, 우리는 이번 튜토리얼에서 해당 기술을 사용하는 라이브러리인 [styled-components](https://www.styled-components.com/)를 다뤄볼 것이다. 
- 우선, `styled-components`를 사용하기 전에 짚고 넘어가야 하는 문법이 있다.    
바로 `Tagged Template Literal`이라는 문법인데, 이는 styled-components가 내부적으로 어떻게 작동하는지 이해할 수 있게 한다.       
~~TiP!!     
내용이 조금 어려울 수도 있는데, 완벽하게 이해하지 않아도 styled-components를 사용하는데 전혀 지장이 가지 않으니 그냥 가볍게 읽고 넘어가도 된다!~~
    
<br>
<br>

> Tagged Template Literal
- 우리는 아마 `Template Literal` 이란 ES6 문법은 익숙할 것이다.     

e.g.    

```javascript
	const name = 'react';
	const message = `hello ${name}`;

	console.log(message);   	// "hello react
```
- 여기서 만약 우리가 `Template Literal`에 `${}` 안에 일반 문자열/숫자가 아닌 **객체**를 넣는다면 어떻게 될까?      
```javascript
	const object = { a: 1 };
	const text = `${object}`    // 객체를 `${}` 안에 넣을 경우... 
	console.log(text);      	
	// "[object Object]" -> 결과: 값이 나타나지 않고 그냥 object Object가 되어버린다. 그리고 결과를 통해 ${}` 안에 들어왔던 객체가 무엇이었는지 알 방법도 없다!!
```
- 마찬가지로 객체가 아닌 **함수**를 넣게 되었을 때도 마찬가지다;      
```javascript
	const fn = () => true       // fn 이란 함수를 만들어서 ...
	const msg = `${fn}`;        // Template Literal 문법을 사용해서 `${}` 안에 함수 fn을 넣게된다면 ...
	console.log(msg);           // "() => true" 
	// 즉, `${}` 안에 들어갔던 함수의 문자열 그 자체가 들어가게 된다!! 
```
- 그러면 이제 오늘 공부할 내용인 `Tagged Template Literal` 문법을 사용하면 뭐가 달라지는지 살펴보자;       

e.g.      

```javascript
	// red와 blue를 선언하고 
	const red = '빨간색';
	const blue = '파란색';
	
	function favoriteColors(texts, ...values) {    
	// 여기서는 favoritaColors 라는 함수를 만들어 준다. 첫 번째 파라미터는 texts, 두 번째 파라미터는 rest 문법을 사용함.  
		console.log(texts);
		console.log(values);
	}

	favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
	// 유의! favoriteColors는 함수이지만 괄호 ()를 열어주지 않고 바로 백틱을 열어주고 template literal 문법을 사용했다!!  
```
- 결과는 아래와 같다;    
<div style="padding-left: 40px;">
	<img src="./images/Tagged Template Literal 예시.png" alt="Tagged Template Literal 예시" style="width: 300px;" />	
</div>

- 결과를 보면 `texts` 파라미터에는 template literal 에서 분리된 문자열들이 들어가게 된 것을 확인할 수 있다.    
e.g. "제가 좋아하는 색은", "과", "입니다"     
그리고 `values` 파라미터에는 "빨간색", "파란색"이 들어간 것을 볼 수 있다.     
- 다른 예시;        

e.g.        

```javascript
	const red = '빨간색';
	const blue = '파란색';

	function favoriteColors(texts, ...values) {
		return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
	}
	favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
	// 제가 좋아하는 색은 <b>빨간색</b>과 <b>파란색</b>입니다. 
	// 결론: -> values에 있는 값들인 빨간색과 파란색이 <b></b> 태그에 감싸져서 나오는 형태!
```
- 그래서 styled-components 에서는 이런 문법을 사용해서 컴포넌트의 props 를 읽어오기도 하는데, 지금은 맛보기로만 한번 확인해보자;     

e.g.        

```javascript
	const StyledDiv = styled`
		background: ${props => props.color};
	`;
```
- 위의 코드가 이해가 안 된다면 아래의 다른 예시 코드를 통해 **Tagged Template Literal의 작동원리**에 대해 알아보자;      

e.g.        

```javascript
	// Tagged Template Literal 을 사용하면 만약 ${} 을 통하여 함수를 넣어줬다면... 
	// 해당 함수를 사용해줄 수도 있다!!

	function sample(texts, ...fns) {   
		// sample이라는 함수를 만들어 준다. 파라미터는 texts와 ...fns  
		//  -> 첫 번째 파라미터는 탬플릿 리터럴에서 분리된 문자열들로 구성된 배열이라면, 두 번째 파라미터는 rest 문법으로 받아온, function을 의미하는 배열이다.
		const mockProps = {
			title: '안녕하세요',
			body: '내용은 내용내용 입니다.'
		};
		return texts.reduce((result, text, i) => `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`, '');
	}

	// 함수 sample을 호출하고, tagged template literal 문법으로 props로 props.title과 props.body를 반환하는 함수를 넣는다,
	sample`    
		제목: ${props => props.title} 
		내용: ${props => props.body}
	`
	/*
	"
		제목: 안녕하세요
		내용: 내용은 내용내용 입니다.
	"
	*/
```

- 즉, <u>만약 Template Literal 을 사용하면서도, 그 내부에 넣은 자바스크립트 값을 조회하고 싶을 땐 `Tagged Template Literal` 문법을 사용 할 수 있다는 것</u>!! 알아두기!!      
만약 이해가 잘 안된다면 이 문법의 동작 원리를 정확하게 이해할 필요는 없다. 다만, 이런 문법이 있고, styled-components에서 이런 문법을 활용한다고 알고있으면 되겠다.    

<br>
<br>

> styled-components 사용하기
- 그럼 이제 본격적으로 `styled-components`를 본격적으로 사용해보자.     
우선, `styling-with-styled-components`라는 새로운 프로젝트를 만들고, styled-components를 설치한다;   
```xml  
	$ npx create-react-app styling-with-styled-components
	$ cd styling-with-styled-components
	$ yarn add styled-components
```
- 그리고, 에디터로 해당 프로젝트를 열어준다. 그 다음, App 컴포넌트를 열어서 다음과 같이 styled-components 로 스타일링한 첫번째 컴포넌트를 만든다;      

e.g.      

[App.js]      

```javascript
	import React from 'react';
	import styled from 'styled-components';

	// const Circle = styled.div``;
	const Circle = styled.div`
		width: 5rem;
		height: 5rem;
		background: black;
		border-radius: 50%;
	`;

	function App() {
		return <Circle />;
	}

	export default App;
```
- `yarn start` 명령어로 개발 서버를 실행하면 아래와 같을 것;     
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시.png" alt="styled components 예시" style="width: 300px;" />	
</div> 

- 즉, `styled-components`를 사용하면 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.    
만약에 div를 스타일링 하고 싶으면 `styled.div`, input을 스타일링 하고 싶으면 `styled.input`이런식으로 사용하면 된다.
- 이번에는, Circle 컴포넌트에 `color`라는 props 를 넣어줘보겠다;     

[App.js]      

```javascript
	import React from 'react';
	import styled from 'styled-components';

	// const Circle = styled.div``;
	const Circle = styled.div`
		width: 5rem;
		height: 5rem;
		background: ${props => props.color || 'black'};
		border-radius: 50%;
	`;

	function App() {
		return <Circle color="pink" />;
	}

	export default App;
```
- Circle 컴포넌트에서는 `color` props 값을 설정해줬으면 해당 값을 배경색으로 설정하고, 그렇지 않으면 검정색을 배경색으로 사용하도록 코드를 작성해주었다. 화면에 분홍색 원이 나타났으면 성공적;     
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시 2.png" alt="styled components 예시 2" style="width: 300px;" />	
</div> 

- 이번에는, `huge`라는 props를 설정됐을 때 크기를 더 키워서 보여주도록 작업을 해보겠다;          

[App.js]      

```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';   // css 불러오기 

	// const Circle = styled.div``;
	const Circle = styled.div`
		width: 5rem;
		height: 5rem;
		background: ${props => props.color || 'black'};
		border-radius: 50%;
		${props => 
				props.huge && 
				css`
					width: 10rem;
					height: 10rem;
				`}
	`;

	function App() {
		return <Circle color="red" huge />;
	}

	export default App;
```
- 화면에 거대한 빨간색 원이 나타났으면 성공;     
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시 3.png" alt="styled components 예시 3" style="width: 300px;" />	
</div> 

- 위의 코드에서와 같이 여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 `css`  사용해야한다. `css`를 불러와서 사용을 해야 그 스타일 내부에서도 다른 props 를 조회 할 수 있다.

<br>
<br>

> Button 만들기
- 재사용성이 높은 Button 컴포넌트를 styled-components로 구현해보자.    
우선, src 안에 components 디렉토리를 생성한다. 그리고 그 안에 Button.js 파일을 만들어 준다;      
e.g.      

[Button.js]        


```javascript
	import React from 'react';
	import styled from 'styled-components';

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		height: 2.25rem;
		font-size: 1rem;

		/* 색상 */
		background: #228be6;
		&:hover {
			background: #339af0;
		}
		&:active {
			background: #1c7ed6;
		}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, ...rest }) {
		return <StyledButton {...rest}>{children}</StyledButton>;
	}

	export default Button;
```

- 버튼이 잘 나타났으면 성공;         
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시 4.png" alt="styled components 예시 4" style="width: 300px;" />	
</div> 

<br>
<br>

> polished의 스타일 관련 유틸 함수 사용하기
- Sass를 사용할 때는 `lighten()` 또는 `darken()`과 같은 **유틸 함수**를 사용하여 색상에 변화를 줄 수 있었는데, `CSS in JS`에서도 비슷한 유틸 함수를 사용하고 싶다면 `polished`라는 라이브러리를 사용하면 된다.    
우선, 패키지를 설치를 해준다;
```xml 
	$ yarn add polished
```
- 그리고 기존에 색상 부분은 polished의 유틸 함수들로 대체해 보겠다;     

[Button.js]      

```javascript
	import React from 'react';
	import styled from 'styled-components';
	import { darken, lighten } from 'polished';

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		height: 2.25rem;
		font-size: 1rem;

		/* 색상 */
		background: #228be6;
		&:hover {
			background: ${lighten(0.1, '#228be6')};
		}
		&:active {
			background: ${darken(0.1, '#228be6')};
		}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`; 

	function Button({ children, ...rest }) {
		return <StyledButton {...rest}>{children}</StyledButton>;
	}

	Button.defaultProps = {
		color: 'blue'
	};

	export default Button;
```
- 버튼이 커서를 올렸을 때 색상이 바뀌고 있다면 정상!     
이제, 회색, 핑크색 버튼들을 만들어 볼 것!    
색상 코드를 지닌 변수를 Button.js에서 선언을 하는 대신에 styled-components의 [ThemeProvider](https://www.styled-components.com/docs/api#themeprovider) 라는 기능을 사용하여 styled-components 로 만드는 모든 컴포넌트에서 조회하여 사용 할 수 있는 전역적인 값을 설정해보겠다.      
- App.js를 아래와 같이 수정;    
e.g.      

[App.js]      

```javascript
	import React from 'react';
	import styled, { ThemeProvider } from 'styled-components';   // ThemeProvider 사용!
	import Button from './components/Button';

	// AppBlock 컴포넌트를 바로 선언 및 스타일링을 동시에! 
	const AppBlock = styled.div`
		width: 512px;
		margin: 0 auto;
		margin-top: 4rem;
		border: 1px solid black;
		padding: 1rem;
	`

	function App() {
		return(
			{/* ThemeProvider을 사용해서 theme을 설정하면
			ThemeProvider 내부에 렌더링된 styled-components 로 만든 컴포넌트에서 palette 를 조회하여 사용 할 수 있다. */}
			<ThemeProvider
				theme = {{
					palette: {
						blue: '#228be6',
						gray: '#495057',
						pink: '#f06595'
					}
				}}
			>
				<AppBlock>
					<Button>BUTTON</Button>
				</AppBlock>
			</ThemeProvider>
		)
	}

	export default App;
```
- <u>`ThemeProvider`을 사용해서 `theme`을 설정하면 ThemeProvider 내부에 렌더링된 styled-components 로 만든 컴포넌트에서 `palette`를 조회하여 사용 할 수 있다</u>.     
OR...     
App 컴포넌트에서 <u>`ThemeProvider`로 설정한 값은 `styled-components`에서 `props.theme`로 조회할 수 있다</u>.       
지금은 `selected` 값을 무조건 blue 값을 가르키게 해놨는데 (cf. `const selected = props.theme.palette.blue;`), 이 부분을 Button 컴포넌트가 `color`props를 통하여 받아오게 될 색상(cf. 회색, 핑크색)을 사용하도록 수정해 보겠다;             
e.g.       

[Button.js]        

```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';
	import { darken, lighten } from 'polished';

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		height: 2.25rem;
		font-size: 1rem;

		/* 색상 -> props.color로 "어떤 색상이 오냐에 따라 색상을 분리해서" 호버와 액티브 시 lighten과 darken "유틸 함수를 적용"시킬 수 있게 된다. */
		${props => {
			const selected = props.theme.palette[props.color];
			return css`
				background: ${selected};
				&:hover {
					background: ${lighten(0.1, selected)};
				}
				&:active {
					background: ${darken(0.1, selected)};
				}
			`;
		}}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, ...rest }) {
		return <StyledButton {...rest}>{children}</StyledButton>;
	}

	export default Button;
```
-이제, App 컴포넌트를 열어서 회색, 핑크색 버튼을 렌더링 해보자;     

[App.js]       

```javascript
	import React from 'react';
	import styled, { ThemeProvider } from 'styled-components';
	import Button from './components/Button';

	const AppBlock = styled.div`
		width: 512px;
		margin: 0 auto;
		margin-top: 4rem;
		border: 1px solid black;
		padding: 1rem;
	`;

	function App() {
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
				<AppBlock>
					<Button>BUTTON</Button>
					<Button color="gray">BUTTON</Button>
					<Button color="pink">BUTTON</Button>
				</AppBlock>
			</ThemeProvider>
		);
	}

	export default App;
```
- 버튼이 파란색, 회색, 분홍색. 이렇게 세 개가 만들어 졌으면 성공;     
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시 5.png" alt="styled components 예시 5" style="width: 300px;" />	
</div> 

- 위의 Button 컴포넌트 코드 아래와 같이 리팩토링이 가능하다;      

[components/Button.js]        

```javascript
	import React from 'react';
	import styled, {css} from 'styled-components';   
	import {darken, lighten} from 'polished';

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		height: 2.25rem;
		font-size: 1rem;

		/* 색상 -> 비구조할당 문법 */
		${({ theme, color }) => {
			const selected = theme.palette[color];
			return css`
				background: ${selected};
					&:hover {
						background: ${lighten(0.1, selected)};
					}
					&:active {
						background: ${darken(0.1, selected)};
					}
				`;
		}}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, color, ...rest }) {   //  children, color, ...rest -> props로 받아오기! 
		return <StyledButton color={color} {...rest}>{children}</StyledButton>;
	}

	Button.defaultProps = {
		color: 'blue'
	};

	export default Button;
```  
- **비구조화 할당 문법**을 사용하여 가독성을 높여주었다.     
참고로 위 로직은 다음과 같이 색상에 관련된 코드를 분리하여 사용 할 수도 있다;       

[Button.js]        

```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';
	import { darken, lighten } from 'polished';

	const colorStyles = css`
		${({ theme, color }) => {
			const selected = theme.palette[color];
			return css`
				background: ${selected};
				&:hover {
					background: ${lighten(0.1, selected)};
				}
				&:active {
					background: ${darken(0.1, selected)};
				}
			`;
		}}
	`;

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		height: 2.25rem;
		font-size: 1rem;

		/* 색상 */
		${colorStyles}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, color, ...rest }) {
		return <StyledButton color={color} {...rest}>{children}</StyledButton>;
	}

	Button.defaultProps = {
		color: 'blue'
	};

	export default Button;
```

<br>
<br>


<!--  여기부터 다시! --> 

> Button 컴포넌트 사이즈 조정하기
- 이제, `size` props 를 설정하여 버튼의 크기도 다양하게 만들어보겠다;      

[components/Button.js]        

```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';
	import { darken, lighten } from 'polished';

	const colorStyles = css`
		${({ theme, color }) => {
			const selected = theme.palette[color];
			return css`
				background: ${selected};
				&:hover {
					background: ${lighten(0.1, selected)};
				}
				&:active {
					background: ${darken(0.1, selected)};
				}
			`;
		}}
	`;

	const sizeStyles = css`
		${props =>
			props.size === 'large' &&  // props.size가 large일 때... 
			css`
				height: 3rem;
				font-size: 1.25rem;
			`}

		${props =>
			props.size === 'medium' &&
			css`
				height: 2.25rem;
				font-size: 1rem;
			`}

			${props =>
				props.size === 'small' &&
				css`
					height: 1.75rem;
					font-size: 0.875rem;
				`}
	`;

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		${sizeStyles}    

		/* 색상 */
		${colorStyles}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, color, size,  ...rest }) {      // props로 size를 받아오게 한다
		return (
			<StyledButton color={color} size={size} {...rest}>
				{children}
			</StyledButton>
		);
	}

	Button.defaultProps = {
		color: 'blue',
		size: 'medium'  // 사이즈의 기본값을 미디움으로 설정
	};

	export default Button;
```
- 참고로 `sizeStyles`에 해당하는 코드를 따로 분리하지 않고 StyledButton의 스타일 내부에 바로 적어도 상관은 없지만, 이렇게 분리해두면 나중에 유지보수를 할 때 더 편해질 수 있다.    
- 이제 사이즈가 커스터마이징된 버튼들을 렌더링해보자;       

[App.js]       

```javascript
	import React from 'react';
	import styled, { ThemeProvider } from 'styled-components';
	import Button from './components/Button';

	const AppBlock = styled.div`
		width: 512px;
		margin: 0 auto;
		margin-top: 4rem;
		border: 1px solid black;
		padding: 1rem;
	`;

	// 새로운 컴포넌트 만들기 -> ButtonGroup
	// 해석: ButtonGroup이 나란이 있으면 margin-top으로 1rem을 줄 것!
	cont ButtonGroup = styled.div`
		& + & {       
			margin-top: 1rem;
		}
	`;

	function App() {
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
				<AppBlock>
					<ButtonGroup>
						<Button size="large">BUTTON</Button>
						<Button>BUTTON</Button>
						<Button size="small">BUTTON</Button>
					</ButtonGroup>
				</AppBlock>
			</ThemeProvider>
		);
	}

	export default App;
```
- 아래와 같이 파랑, 회색, 분홍색을 지닌 버튼들이 사이즈 별로 나타났으면 성공;      
<div style="padding-left: 40px;">
	<img src="./images/styled components 예시 6.png" alt="styled components 예시 6" style="width: 300px;" />	
</div>

- 위의 코드를 리팩토링 한다면;      

[App.js]       

```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';
	import { darken, lighten } from 'polished';

	const colorStyles = css`
		${({ theme, color }) => {
			const selected = theme.palette[color];
			return css`
				background: ${selected};
				&:hover {
					background: ${lighten(0.1, selected)};
				}
				&:active {
					background: ${darken(0.1, selected)};
				}
			`;
		}}
	`;

	const sizes = {
		large: {
			height: '3rem',
			fontSize: '1.25rem'
		},
		medium: {
			height: '2.25rem',
			fontSize: '1rem'
		},
		small: {
			height: '1.75rem',
			fontSize: '0.875rem'
		}
	};

	const sizeStyles = css`
		${({ size }) => css`
			height: ${sizes[size].height};
			font-size: ${sizes[size].fontSize};
		`}
	`;

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		${sizeStyles}

		/* 색상 */
		${colorStyles}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, color, size, ...rest }) {
		return (
			<StyledButton color={color} size={size} {...rest}>
				{children}
			</StyledButton>
		);
	}

	Button.defaultProps = {
		color: 'blue',
		size: 'medium'
	};

	export default Button;
```
- 여기까지 했다면 그 다음에는 Button 컴포넌트에 `outline`이라는 props를 설정하여 이 값이 `true`일 때는 테두리만 지닌 버튼을 보여주도록 설정해보겠다. 이 작업을 할 때에는 `colorStyles`만 수정해주면 된다;      

[components/Button.js]         

<!--  여기부터!! -->
```javascript
	import React from 'react';
	import styled, { css } from 'styled-components';
	import { darken, lighten } from 'polished';

	const colorStyles = css`
		${({ theme, color }) => {
			const selected = theme.palette[color];
			return css`
				background: ${selected};
				&:hover {
					background: ${lighten(0.1, selected)};
				}
				&:active {
					background: ${darken(0.1, selected)};
				}
			`;
		}}
	`;

	const sizeStyles = css`
		${props =>
			props.size === 'large' &&  // props.size가 large일 때... 
			css`
				height: 3rem;
				font-size: 1.25rem;
			`}

		${props =>
			props.size === 'medium' &&
			css`
				height: 2.25rem;
				font-size: 1rem;
			`}

			${props =>
				props.size === 'small' &&
				css`
					height: 1.75rem;
					font-size: 0.875rem;
				`}
	`;

	const StyledButton = styled.button`
		/* 공통 스타일 */
		display: inline-flex;
		outline: none;
		border: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		padding-left: 1rem;
		padding-right: 1rem;

		/* 크기 */
		${sizeStyles}    

		/* 색상 */
		${colorStyles}

		/* 기타 */
		& + & {
			margin-left: 1rem;
		}
	`;

	function Button({ children, color, size,  ...rest }) {      // props로 size를 받아오게 한다
		return (
			<StyledButton color={color} size={size} {...rest}>
				{children}
			</StyledButton>
		);
	}

	Button.defaultProps = {
		color: 'blue',
		size: 'medium'  // 사이즈의 기본값을 미디움으로 설정
	};

	export default Button;
```







```javascript
```

e.g.
```scss
```

<br>

> Dialog 만들기

<br>

> 트랜지션 구현하기


<br>

> 정리

📌😉




<br>
<br>


> 


e.g.     

[]      


```javascript
```

e.g.
```scss
```


<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div> 



<br>
<br>

---

<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/styling/03-styled-components.html
	- 
	- 
	- 
	- 

	
</details>
---
