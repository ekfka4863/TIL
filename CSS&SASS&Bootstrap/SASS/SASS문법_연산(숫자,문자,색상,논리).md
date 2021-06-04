---
date: 2021-05-18-Tuesday
---

# SASS 문법: 13 - 17. 연산(Operations)
- SASS는 기본적인 연산 기능을 지원한다.   
이런 SASS의 연산 기능은 레이아웃 작업시 상황에 맞게 크기를 계산하거나 정해진 값을 나눠서 작성할 경우 유용하다.  
- SASS에서 사용할 수 있는 연산자 종류는 아래와 같다; 

> 산술 연산자

|종류|설명|주의사항|
|:---:|:---:|:---:|
|`+`|**더하기**|_단위를 통일 시켜야한다. 아니면 오류. (단, CSS의 calc() 함수를 사용하면 단위 통일 불필요)_|
|`-`|**빼기**|_단위를 통일 시켜야한다. 아니면 오류. (단, CSS의 calc() 함수를 사용하면 단위 통일 불필요)_|
|`*`|**곱하기**|_하나 이상의 값이 반드시 숫자(Number)_|
|`/`|**나누기**|_오른쪽 값이 반드시 숫자(Number)_|
|`%`|**나머지**||

<br>

> 비교 연산자

|종류|설명|
|:---:|:---:|
|`==`|**동등**|
|`!=`|**부등**|
|`<`|**대소/보다 작은**|
|`>`|**대소/보다 큰**|
|`<=`|**대소 및 동등/보다 작거나 같은**|
|`>=`|**대소 및 동등/보다 크거나 같은**|

<br>

> 논리(불린, Boolean) 연산자

|종류|설명|
|:---:|:---:|
|`and`|**그리고**|
|`or`|**또는**|
|`not`|**부정**|

<br>
<br>

## 연산 - 숫자(Numbers)

> 상대적 단위 연산
- 일반적으론 절댓값을 나타내는 px 단위로 연산을 하지만, 상대적 단위(e.g. %, em, vw 등)의 연산의 경우 CSS의 `calc()` 함수로 연산해야 한다.  
예를 들어; 
```scss
	// SCSS - e.g. 	
	
	// SCSS에서 +/- 연산자를 사용할 때는 단위를 통일 시켜야한다. 안 그러면 '단위 모순 에러'가 뜬다.
	width: 50% - 20px;  // 단위 모순 에러(Incompatible units error)

	// 하지만, 이럴 경우 순순 CSS 문법인 calc() 함수를 사용하면 연산이 가능하다.
	width: calc(50% - 20px);  // 연산 가능
```

<br>

> 나누기 연산의 주의사항
- CSS는 속성 값의 숫자를 분리하는 방법으로 `/`를 허용하기 때문에 `/`가 나누기 연산으로 사용되지 않을 수 있다.    
예를 들어, `font: 16px / 22px serif;` 같은 경우 `font-size: 16px`와 `line-height: 22px`의 속성값 분리를 위해서 `/`를 사용한다.  
그래서 아래 예제를 보면 나누기 연산자만 연산 되지 않고 그대로 컴파일 되는 모습을 확인할 수 있다;    
```scss
	// SCSS

	div {
		width: 20px + 20px;  // 더하기
		height: 40px - 10px;  // 빼기
		font-size: 10px * 2;  // 곱하기
		margin: 30px / 2;  // 나누기
	}
```

```css
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		width: 40px;  /* OK */
		height: 30px;  /* OK */
		font-size: 20px;  /* OK */
		margin: 30px / 2;  /* NOOOOOOOoooooope! */
	}
```
- 그래서 `/`를 나누기 연산 기능으로 사용하고 싶다면 아래와 같은 조건에 부합해야 한다;  
	- 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
	- 값이 `괄호 ()`로 둘러싸인 경우
	- 값이 다른 산술 표현식(e.g. +, -, ...)의 일부로 사용되는 경우
	- e.g.   
	```scss
		// SCSS
		// 오른쪽 값이 반드시 숫자여야 한다 

		div {
			$x: 100px;
			width: $x / 2;  // 변수에 저장된 값을 나누는 경우 -> OK
			height: (100px / 2);  // 괄호로 묶어서 나누는 경우 -> OK
			font-size: 10px + 12px / 3;  // 더하기 연산과 같이 사용(/정상적인 산술 표현식과 /를 끼워팔기 🤪)하는 경우 -> OK
		}
	```
	```css
		/* CSS */
		/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

		div {
			width: 50px;
			height: 50px;
			font-size: 14px;
		}
	```

<br>
<br>

## 연산 - 문자(Strings) 
- 문자 연산에는 `+` 연산자가 사용된다.   
- 문자 연산의 결과는 <u>첫 번째 피연산자를 기준으로 한다</u>.  
첫 번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶고, 반대로 첫 번째 피연산자에 따옴표가 붙어있지 않다면 연산 결과도 따옴표를 처리하지 않는다.   
예를 들어;  
```scss
	// SCSS

	div::after {
		content: "Hello " + World;   // 첫 번째 피연산자에 ""가 있음. 두 문자열을 + 연산자로 이어준다. 
		flex-flow: row + "-reverse" + " " + wrap;  // 첫 번째 피연산자에 ""가 없음.
	}
```

```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div::after {
		content: "Hello World";  /* "" 가 있다 */
		flex-flow: row-reverse wrap; /* "" 가 없다 */
	}
```

<br>
<br>

## 연산 - 색상(Colors)
- SCSS 문법으로 색상도 연산할 수 있다.    
예를 들어; 
```scss
	// SCSS

	div {
		color: #123456 + #345678;
		// R: 12 + 34 = 46
		// G: 34 + 56 = 8a
		// B: 56 + 78 = ce

		background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
		// R: 50 + 10 = 60
		// G: 100 + 20 = 120
		// B: 150 + 30 = 180
		// A: Alpha channels must be equal -> 알파값이 반드시 동일할 것!
	}
```

```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		color: #468ace;  /* R:46, G:8a, B:ce */
		background: rgba(60, 120, 180, 0.5);  /* R:60, G:120, B:180, A:0.5 */
	}
```
📌 RGBA에서 <u>Alpha 값은 연산되지 않으며</u> 서로 동일해야 다른 값의 연산이 가능하다.   
📌 만약, Alpha 값을 연산하고 싶을 때는 다음과 같은 색상 함수(Color Functions)를 사용해야 한다; 👉 **opacify(), transparentize()**
```scss
	// SCSS
	$color: rgba(10, 20, 30, .5);

	div {
		color: opacify($color, .3);  // 해석: 30% 더 불투명하게 -> 0.5 + 0.3
		background-color: transparentize($color, .2);  // 해석: 20% 더 투명하게 -> 0.5 - 0.2
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		color: rgba(10, 20, 30, 0.8);
		background-color: rgba(10, 20, 30, 0.3);
	}
```

<br>
<br>

## 연산 - 논리(Boolean)
- SASS의 `@if 조건문`에서 사용되는 논리(Boolean) 연산에는 `그리고`, `또는`, `부정`이 있다. 이는 자바스크립트 문법의 &&, ||, !와 같은 기능으로 생각하면 된다.   
예제를 통해 더 살펴보자;
```scss
	// SCSS

	$width: 90px;
	
	div {
		@if not ($width > 100px) {  // @if $width(90px)가 100px보다 크지 않아면(부정)...
			height: 300px;  // 높이는 300px로 해라~ 이런 의미! 
		}
	}

```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		height: 300px;  /* height는 300px이다. 왜냐면 위의 if문의 조건문이 true이기 때문. */
	}
```
- 응용 예시 2;
```scss
	// SCSS

	$w: 100px; 

	.item {
		display: block;
		@if ($w > 50px and $w > 90px) {  // 참이 되는 조건! 
			width: 400px;
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.item {
		display: block;
		width: 400px;
	}

```
<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://heropy.blog/2018/01/31/sass/
	- http://megaton111.cafe24.com/2017/01/13/sass-문법-연산자/
	- https://tutorialpost.apptilus.com/code/posts/css/scss-variable-function/
	- https://velog.io/@recordboy/SASS-연산Operations
	- https://m.blog.naver.com/jjmah/221994384250

</details>

---