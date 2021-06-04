---
date: 2021-05-22-Saturday
---

# 조건문

## IF 함수 
- 조건의 값(`true`, `false`)에 따라 두 개의 표현식 중 하나만 반환한다.    
💡 (cf. [조건부 삼항 연산자(conditional ternary operator)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)와 유사하니 참고!)
```scss 
	// (삼항 연산자처럼...)
	// 조건의 값이 true면 표현식1을 반환
	// 조건의 값이 false면 표현식2를 반환

	if(조건, 표현식1, 표현식2)
```
- e.g. 
```scss
	// SCSS

	$width: 555px;         // 변수 

	div {
		width: if($width > 300px, $width, null);   // 해석: 만약 변수 $width가 300px보다 큰것이 참이면 $width를 반환, 거짓이면 null을 반환하라. 속성 값으로 null 이 들어가면 이 말은 "해당 속성을 사용하지 않겠다"라는 의미! 
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		width: 555px;    /* 위에서 if함수의 조건이 참이었기 때문에 $width의 값인 555px을 반환한다. */
	}
```

<br>
<br>

## @if (지시어) 
- <u>`@if` 지시어는 조건에 따른 분기 처리가 가능</u>하며, 자바스크립트의 [if문(if statement)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)과 유사하다.   
- 같이 사용할 수 있는 지시어 `@else`, `if`가 있다.   
~~💡 (cf. 추가 지시어를 사용하면 좀 더 복잡한 조건문을 작성할 수 있다!)~~
- `@if` 지시어의 사용법은 아래와 같다; 
```scss
	// @if
	@if (조건) {
		/* 조건이 참일 때 구문 */
	}

	// @if @else
	@if (조건) {
		/* 조건이 참일 때 구문 */
	} @else {
		/* 조건이 거짓일 때 구문 */
	}

	// @if @else if
	@if (조건1) {
		/* 조건1이 참일 때 구문 */
	} @else if (조건2) {
		/* 조건2가 참일 때 구문 */
	} @else {
		/* 모두 거짓일 때 구문 */
	}
```
- 이때, <u>조건에서 `괄호 ()`를 생략할 수 있다.</u> 
	- e.g.1
	```scss
		// SCSS

		$bg: true;
		div {
			@if $bg {     // @if 조건에서 괄호 ()를 생략할 수 있다
				background: url("/images/a.jpg");
			}
		}


		// CSS
		div {       // 조건이 true이기 때문에 그에 따라 아래와 같은 값이 주어짐.
			background: url("/images/a.jpg");
		}
	```
	- e.g.2
	```scss
		// SCSS

		$color: orange;
		div {
			@if $color == strawberry {
				color: #FE2E2E;
			} @else if $color == orange {
				color: #FE9A2E;
			} @else if $color == banana {
				color: #FFFF00;
			} @else {
				color: #2A1B0A;
			}
		}
	```
	```css
		/* CSS */
		/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

		div {
			color: #FE9A2E;
		}
	```
- 뿐만 아니라 <u>조건에는 논리 연산자 `and`, `or`, `not`을 사용할 수 있다.</u> 
```scss
	// SCSS

	@function limitSize($size) {
		@if $size >= 0 and $size <= 200px {
			@return 200px;
		} @else {              // @else 와 같이 사용 
			@return 800px;
		}
	}

	div {
		width: limitSize(180px);
		height: limitSize(340px);
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		width: 200px;     /* limitSize(180px)이기 때문에 @if 조건은 참. 200px을 값으로 반환한다. */
		height: 800px;    /* limitSize(340px)이기 때문에 @if 조건은 거짓. 800px을 값으로 반환한다. */
	}
```
- 좀 더 복잡하고 실용적인 예시;  
💡 (cf. SASS의 내장 함수 `unitless()`는 숫자에 단위가 있는지 여부를 반환한다.)
```scss
	// SCSS
	// @mixin pCenter를 정의 
	@mixin pCenter($w, $h, $p: absolute) {   // 인수로 $w, $h, $p를 받는데, 그중 $p의 기본값은 absolute. 그리고 아래는 @if의 조건들 (+ 논리 연산자 사용). 괄호 ()를 생략함. 
		@if                                    
			$p == absolute                       
			or $p == fixed
			or not $p == relative
			or not $p == static
		{
			width: if(unitless($w), #{$w}px, $w);   // unitless() -> 숫자에 단위가 있는지 여부를 반환. (+ #{문자보건} -> 문자보간을 이용하면 코드의 어디든지 변수값을 넣을 수 있음.)
			height: if(unitless($h), #{$h}px, $h);  // if(cf. 조건부 삼항 연산자와 유사)와 같이 사용! if([조건], [표현식1], [표현식2])
			position: $p;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}

	// @mixin pCenter를 사용 
	 .box1 {
		@include pCenter(10px, 20px);   // (해석 --> ) $w: 10px;이고 $h: 20px;인데, if(만약) unitless() -> 숫자에 단위가 없는것이 참이면 #{$w}px를 반환하고, 단위가 없는것이 거짓. 즉, 단위가 붙어있는 숫자라면 그냥 변수 $w 그대로를 반환한다. 
	}
	.box2 {
		@include pCenter(50, 50, fixed);
	}
	.box3 {
		@include pCenter(100, 200, relative);     // 위에 @if 조건 때문에 relative 값을 갖고 있는 .box3은 실행 X 
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box1 {
		width: 10px;
		height: 20px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.box2 {
		width: 50px;
		height: 50px;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
```

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	-	https://heropy.blog/2018/01/31/sass/
	- https://zero-dimension.tistory.com/39
	- https://velog.io/@hey_jude/SASS-1

</details>

---