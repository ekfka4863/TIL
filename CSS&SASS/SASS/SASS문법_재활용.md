---
date: 2021-05-20-Thursday
---

# 재활용(Mixins)
- `@mixin`은 SASS 언어 전체에서 가장 많이 사용되는 기능 중 하나이며, 코드의 재사용성과 특정 코드의 중복 사용을 막는데에 효과적이다. 
	- e.g. 버튼이나 아이콘 등을 class로 만들어 놓고 필요한 태그 스타일링에 따라 클래스를 추가로 넣어주는 경우가 있는데, 이런 경우 @mixin을 사용하면 손쉽게 반복적인 작업을 할 수 있다.
	<!-- 예전 방식인 class를 지양하고 SCSS의 @mixin과 @include를 사용하는 방법을 지향하자. -->
- Mixin을 선언할 때는 `@mixin` 키워드를 사용하며, 적용 시에는 `@include` 키워드를 사용한다. 
- Mixin <u>정의</u> 방법; 
```scss
	// SCSS

	@mixin 믹스인이름 {
		// code;
	}

	// Sass
	= 믹스인이름 
			스타일
```
- 괄호 () 안에 아래와 같이 인자를 포함할 수도 있다; 
```scss
	// SCSS

	@mixin 믹스인이름( $arg1, $arg2, ... ) {
		// code;
	}
```
- Mixin <u>사용</u> 방법;
```scss
	// SCSS

	@include 믹스인이름;

	// Sass
	+믹스인이름
```
- 만약 인자를 받은 mixin이라면 아래와 같이 사용; 
```scss
	@include 믹스인이름( value1, value2, ... );
```
- 예시를 통해 더 알아보자;
```scss
	// SCSS 
	// 정의 
	@mixin size ($w: 100px, $h: 200px) {  // 기본값 설정하기 
		width: $w;
		height: $h;
	}

	// 사용 
	.box1 {
		@include size;
	}

	.box2 {
		@include size($h: 300px);   // 인자는 순서대로 들어가니까
	}
	.box3 {
		@include size(100px);
	}
``` 
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box1 {
		width: 100px;
		height: 200px;
	}

	.box2 {
		width: 100px;
		height: 300px;
	}

	.box3 {
		width: 100px;
		height: 200px;
	}
```
- 응용 예시 2; 
```scss
	// SCSS 
	// 정의 
	@mixin large-text {
		font-size: 22px;
		font-weight: bold;
		font-family: sans-serif;
		color: orange;
	}

	// Sass
	// 정의 
	=large-text
		font-size: 22px
		font-weight: bold
		font-family: sans-serif
		color: orange


	// SCSS
	// 사용
	h1 {
		@include large-text;
	}
	div {
		@include large-text;
	}

	// Sass
	// 사용
	h1
		+large-text
	div
		+large-text
```
```css
	/* CSS */
	/* 위의 SCSS (그리고 Sass) 코드를 CSS로 컴파일 하면 아래와 같다; */

	h1 {
		font-size: 22px;
		font-weight: bold;
		font-family: sans-serif;
		color: orange;
	}

	div {
		font-size: 22px;
		font-weight: bold;
		font-family: sans-serif;
		color: orange;
	}
```
- 이때, mixin은 선택자를 포함 가능하고 상위(부모) 요소 참고(`&` 같은)도 할 수 있다; 
```scss
	// SCSS 
	// 정의 
	@mixin large-text {
		font: {          // 중첩사용 
			size: 22px;
			weight: bold;
			family: sans-serif;
		}
		color: orange;
 
		&::after {       // &로 참조/치환
			content: "!!";
		}

		span.icon {      // span 태그에 .icon이라는 클래스가 붙어있을 경우의 스타일링 
			background: url("/images/icon.png");
		}
	}

	// SCSS
	// 사용
	// SCSS
	h1 {
		@include large-text;
	}
	div {
		@include large-text;
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	h1 {
		font-size: 22px;
		font-weight: bold;
		font-family: sans-serif;
		color: orange;
	}
	h1::after {
		content: "!!";
	}
	h1 span.icon {
		background: url("/images/icon.png");
	}

	div {
		font-size: 22px;
		font-weight: bold;
		font-family: sans-serif;
		color: orange;
	}
	div::after {
		content: "!!";
	}
	div span.icon {
		background: url("/images/icon.png");
	}
```
- `@mixin`과 `@include`는 공통적인 선언부를 그대로 재활용하지만 필요에 따라 각각의 부분에 다른 스타일을 적용하는 것이 가능하다는 것을 위의 예시를 통해 알아보았다.    
이제, 


<br>
<br>

## 재활용(Mixins) - 인수(Arguments)
- 위에서 mixin을 사용할 때, 인수를 가질 수 있다고 했는데, 이에 대해 더 살펴보자.
	- 더 정확히 말하자면 mixin 함수는 아래와 같이 `매개변수` 그리고 `인수`를 가질 수 있다;
	```scss
		// SCSS 
		// SCSS
		@mixin 믹스인이름($매개변수) {
			// code;
		}
		@include 믹스인이름(인수);

		// Sass
		=믹스인이름($매개변수)
			// code

		+믹스인이름(인수)
		```
- 그렇다면 여기서 `매개변수`와 `인수`는 다른 것일까? 둘의 차이점은 무엇인가?    
	- **매개변수(Parameters)** 란 변수 ~~(cf. `$`로 시작)~~ 의 한 종류로, 제공되는 여러 데이터 중 하나를 가리키기 위해 사용된다.
제공되는 여러 데이터들을 **전달인수(Arguments)** 라고 부른다.    
	- e.g. 
```scss
		// SCSS 
		// 정의 
		@mixin dash-line($width, $color) {   // 괄호 () 안은 매개변수 -> parameters
			border: $width dashed $color;
		}

		// 사용 
		.box1 { @include dash-line(1px, red); }   // 괄호 () 안은 인수(/인자) -> arguments
		.box2 { @include dash-line(4px, blue); }
```
```css
		/* CSS */
		/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

		.box1 {
			border: 1px dashed red;
		}
		.box2 {
			border: 4px dashed blue;
		}
```

<br>
<br>

## 재활용(Mixins) - 인수의 기본값 설정 
- 우리는 인수(argument)에다가 기본값(default value)을 설정할 수 있다.  
- `@mixin` 키워드로 믹스인을 정의할 때 `$매개변수: 기본값`의 형태로 기본값을 설정해주면,   
`@include` 키워드를 통해 재활용하는 단계에서 별도의 인수가 전달되지 않아도 기본값으로 이미 정의된 아이를 사용한다.
- Mixin 인수의 기본값 설정하기; 
```scss
	// SCSS 
	// 정의 
	@mixin 믹스인이름($매개변수: 기본값) {
		// code;
	}
```
- 예를 들어; 
```scss
	// SCSS 
	// 정의 
	@mixin dash-line($width: 1px, $color: black) {
		border: $width dashed $color;
	}

	// 사용 
	.box1 { @include dash-line; }
	.box2 { @include dash-line(4px); }
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box1 {
		border: 1px dashed black;
	}
	.box2 {
		border: 4px dashed black;
	}
```
💡 믹스인 인수에 기본값을 설정해주면 만약에 @include 적용 단계에서 인수에 값을 안 넣어줘도 에러가 발생하지 않는다는 장점이 있다.  

<br>
<br>

## 재활용(Mixins) - 키워드 인수(Keyword Arguments)
- 키워드 인수 사용법; 
```scss
	// SCSS 
	// 정의 
	@mixin 믹스인이름($매개변수A: 기본값, $매개변수B: 기본값) {   // 매개변수는 $매개변수A와 $매개변수B로 2개 
  	// code;	
	}

	// 사용 
	@include 믹스인이름($매개변수B: 인수);   // 하지만 명시적으로 $매개변수B만 키워드(변수)로 입력하여 값을 전달할 수 있음
```
- 다시, mixin에 전달할 인수를 입력할 때 명시적으로 키워드(변수)를 입력하여 작성할 수 있다.  
별도의 인수 입력 순서를 고려할 필요가 없어 편리하게 원하는 키워드(변수)를 대상으로 스타일링 할 수 있다는 장점이 있다.  
단, 키워드 인수를 사용할 때도 어떤 인수에는 값이 지정되지 않아 에러가 나는 일이 없도록 기본값을 설정해 주는 것이 좋겠다.
- 키워드 인수 사용 예시; 
```scss
	// SCSS 
	// 정의 
	@mixin position(
		$p: absolute,
		$t: null,
		$b: null,
		$l: null,
		$r: null
	) {
		position: $p;
		top: $t;
		bottom: $b;
		left: $l;
		right: $r;
	}

	// 사용 
	.absolute {
		// 여러개의 매개변수가 있지만 키워드로 $b와 $r만 값을 전달한 인수로 지정한 것을 확인할 수 있다
		@include position($b: 10px, $r: 20px);  
	}
	.fixed {
		// tip! 인수가 많아짐에 따라 가독성을 확보하기 위해 줄바꿈
		@include position(
			fixed,
			$t: 30px,
			$r: 40px
		);
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.absolute {
		position: absolute;
		bottom: 10px;
		right: 20px;
	}
	.fixed {
		position: fixed;
		top: 30px;
		right: 40px;
	}
```

<br>
<br>

## 재활용(Mixins) - 가변 인수(Variable Arguments)
- 입력할 인수의 개수가 확실하지 않을 때 사용하는 아이가 `가변 인수(Variable Arguments)`다.
- 가변 인수 사용 방법;
```scss
	// SCSS 
	// 정의 
	@mixin 믹스인이름($매개변수...) {   // 매개변수 뒤에 점 3개 (...)
		// code;
	}

	// 사용 
	@include 믹스인이름(인수A, 인수B, 인수C);
```
- 구체적인 예시를 통해 더 살펴보자; 
```scss
	// SCSS 
	// 정의 
	// 인수를 순서대로 하나씩 전달 받다가, 3번째 매개변수($bg-values)는 인수의 개수에 상관없이 받음
	@mixin bg($width, $height, $bg-values...) {  
		width: $width;
		height: $height;
		background: $bg-values;
	}

	// 사용 
	div {
		// 위의 Mixin(bg) 설정에 맞게 인수를 순서대로 전달하다가 3번째 이후부터는 개수에 상관없이 전달
		@include bg(
			100px,
			200px,
			url("/images/a.png") no-repeat 10px 20px,   
			url("/images/b.png") no-repeat,             
			url("/images/c.png")
		);
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		width: 100px;
		height: 200px;
		background: url("/images/a.png") no-repeat 10px 20px,  /* 위의 SCSS 코드에서 세 번째 매개변수는 ...을 사용해 가변 인수를 활용했다. */
								url("/images/b.png") no-repeat,           /* 그 결과, 세 번째 매개변수인 $bg-values에는 전달받은 3개의 인수들이 입력된 것을 확인할 수 있다. */
								url("/images/c.png");
	}
```
💡 위의 예시에서는 인수를 받는 <u>매개변수에 `...`을 사용하여 가변 인수를 활용</u>했다면, 이번에는 반대로 <u>가변 인수를 전달할 값으로 사용</u>해 보겠다.
- 가변 인수 사용 방법;
```scss
	// SCSS 
	// 정의 
	@mixin font(             
		$style: normal,          // 매개변수 $style
		$weight: normal,         // 매개변수 $weight
		$size: 16px,             // 매개변수 $size
		$family: sans-serif,     // 매개변수 $family
	) {
		font: {
			style: $style;         // font-style 
			weight: $weight;       // font-weight 
			size: $size;           // font-size
			family: $family;       // font-family
		}
	}

	// 사용 
	div {
		// 매개변수 순서와 개수에 맞게 전달
		$font-values: italic, bold, 16px, sans-serif;   // $font-values라는 변수에다가 매개변수 개수에 맞게 값을 넣는다. 단, 이때 변수에 들어가는 값들은 'list(데이터 종류)' 형태.
		@include font($font-values...);                 // @include 키워드를 통해 위에서 정의한 font라는 믹스인을 사용할 때, @include font(이 안에 들어가는 값)이 조금씩 다르다고 한다면, 이럴 때 가변 인수를 전달할 값으로 사용할 수 있다
	}                                                 // cf. 자바스크립트의 '전개 연산자'와 비슷하다
	span {
		// 필요한 값만 키워드 인수로 변수에 담아 전달
		$font-values: (style: italic, size: 22px);      // 키워드 인수로 필요한 부분만 변수에 담아서 값을 전달하는 것도 가능하다. 이때, 변수에 들어가는 값의 데이터 종류는 Map(key: value 형태)이다.
		@include font($font-values...);                 // 맵 데이터 형태를 전달하는 것이다 보니 "전개해서(/...을 사용해서)" 값을 전달해야한다! 
	}
	a {
		// 필요한 값만 키워드 인수로 전달
		@include font((weight: 900, family: monospace)...);  // 마찬가지로 바로 ()안에다가 맵 데이터 형식으로 필요한 값만을 넣고 이를 전개해서(/...을 사용해서) 값을 전달하는 방법도 있다. 
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	div {
		font-style: italic;
		font-weight: bold;
		font-size: 16px;
		font-family: sans-serif;
	}
	span {
		font-style: italic;
		font-weight: normal;
		font-size: 22px;
		font-family: sans-serif;
	}
	a {
		font-style: normal;
		font-weight: 900;
		font-size: 16px;
		font-family: monospace;
	}
```

<br>
<br>

## 재활용(Mixins) - @content
- 이번에는 믹스인에서 사용가능한 `@content`에 대해서 알아보자.   
	- 선언된 Mixin에 `@content`가 포함되어 있다면 해당 부분에 **스타일 블록** 을 전달할 수 있는데,
이 방식을 사용하여 기존 Mixin이 가지고 있는 기능에 선택자나 속성 등을 추가할 수 있다.
	- e.g. 믹스인을 정의(@mixin)해서 사용(@include)할 때, 믹스인에서 정의하지는 않았지만 추가적으로 스타일링을 추가하고 싶을 때 @content를 사용하면 간편해진다.   
- @content 사용법; 
```scss
	// SCSS 
	// 정의 
	@mixin 믹스인이름() {
		// code;
		@content;    // 이 부분에 새롭게 추가된 '스타일 블록' 들어가는데, 
	}

	// 사용 
	@include 믹스인이름() {
		// 스타일 블록   // 새로운 '스타일 블록'은 여기서 정의한다 
		// code;
	}
```
- 예시를 통해 더 알아보자; 
```scss
	// SCSS 
	// 정의 
	@mixin icon($url) {      // icon이란 이름의 믹스인을 정의하는데, 받을 매개변수는 ($url)이다
		&::after {             // &로 참조한 부분의 ::after(가상요소)의 content: $url; 이라고 정의한다 
			content: $url;       // 이때, $url은 매개변수로 받을 값
			@content;
		}
	}

	// 사용 
	.icon1 {
		// icon Mixin의 기존 기능만 사용
		@include icon("/images/icon.png");      // $url은 "/images/icon.png"
	}
	.icon2 {
		// icon Mixin에 스타일 블록을 추가하여 사용
		@include icon("/images/icon.png") {      // $url은 "/images/icon.png"
			position: absolute;                    // 그리고 position: absolute;라는 추가적인 '스타일 블록'은 믹스인 정의 부분의 @content로 들어간다  
		};
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.icon1::after {
		content: "/images/icon.png";
	}
	.icon2::after {
		content: "/images/icon.png";
		position: absolute;            /* @content 부분 */ 
	}
```
💡 즉, @mixin 정의하는 부분에 @content가 있으면, 기존의 정의된 믹스인에다가 추가적으로 삽입하고자 하는 코드가 있으면 스타일 블록을 기존의 믹스인 내용에다가 내용을 추가할 수 있고, 그게 아니면 기존에 믹스인이 정의된 것처럼 기존 내용 그대로 사용된다는 점을 유의하자.    

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://heropy.blog/2018/01/31/sass/
	- https://www.codingfactory.net/10110
	- https://webisfree.com/2019-10-08/[scss]-mixin-include-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C%EB%B3%B4%EA%B8%B0
	- https://velog.io/@hey_jude/SASS-1
	- https://13akstjq.github.io/sass/2020/02/22/mixin%EA%B3%BC-extend-%EC%95%8C%EB%A7%9E%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html
	- https://happycording.tistory.com/entry/Sass-mixin-%EA%B3%BC-include-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
	- https://www.codingfactory.net/10110

</details>

---

