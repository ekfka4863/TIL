---
date: 2021-05-22-Saturday
---

# 함수(Functions)
- SCSS 문법으로 함수를 정의하여 사용할 수 있다.  
	- 함수 기본 문법은 아래와 같다; 
	```scss
		// Function 

		@function 함수이름($매개변수) {
			@return 값
		}
	```
- 함수는 Mixins은 거의 유사하지만 반환되는 내용이 다르다.
	- Mixin은 지정한 스타일(Style)을 반환하는 반면, 함수는 보통 연산돤(computed) 특정 값을 `@return 지시어`를 통해서 반환한다.
	- 사용하는 방법에도 차이가 있다;   
	Mixin은 `@include` 지시어를 사용하는 반면, 함수는 <u>함수이름으로 바로 사용</u>한다. 
	```scss
		// Mixins
		// 정의
		@mixin 믹스인이름($매개변수) {
			스타일;
		}

		// 사용 
		@include 믹스인이름(인수);


		// ---------------------------- //


		// Function
		// 정의 
		@function 함수이름($매개변수) {
			@return 값;      
		}

		// 사용 
		함수이름(인수)
	```
- e.g. 
```scss
	// SCSS
	// 함수 정의 

	$max-width: 980px;   // 변수 
	// columns라는 이름의 함수 
	@function columns($number: 1, $columns: 12) {     // 키워드 인수로 원하는 인수에 기본값 설정  
		@return $max-width * ($number / $columns);      // 함수는 특정한 값을 반환할 수 있어야 한다 
	}

	// 사용 
	.box_group {
		width: $max-width;

		.box1 {
			width: columns();  // 함수 이름 columns
		}
		.box2 {
			width: columns(8);
		}
		.box3 {
			width: columns(3);
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box_group {
		/* 총 너비 */
		width: 980px;
	}
	.box_group .box1 {
		/* 총 너비의 약 8.3% */
		width: 81.66667px;
	}
	.box_group .box2 {
		/* 총 너비의 약 66.7% */
		width: 653.33333px;
	}
	.box_group .box3 {
		/* 총 너비의 25% */
		width: 245px;
	}
```

<br>

💡 _이때, 함수는 `@include`와 같은 별도의 지시어 없이 그냥 함수의 이름으로 바로 사용되기 때문에 내가 만든 함수와 내장 함수(Built-in Functions)의 이름이 충돌할 수도 있다.  
따라서 내가 만든 함수의 이름에 별도의 접두어를 붙여주는 것을 추천한다._   
e.g. 내장 함수에 있는 `red()`와 헷갈리지 않게 `extract-red()`와 같이 별도의 접두어를 추가하여 내장함수와 같은 이름을 갖지 않도록 한다. 

<br>
<br>


## 내장 함수(Built-in Functions)
- Sass에서 기본적으로 제공하는 함수를 '내장 함수'라고 하고, 내장함수의 종류는 다양하다.   
모든 내장 함수를 숙지하고 있기 어려우니, 가장 많이 사용되고 필요한 내장 함수를 알아보도록 하자. 
💡 (cf. 모든 내장 함수를 확인하고 싶다면 [링크](http://sass-lang.com/documentation/Sass/Script/Functions.html)를 클릭!) 
- 유의! 
	- `[]` 안에 들어가는 인자는 기본값이 있어 값을 넣어주지 않아도 되는 **선택 가능한(optional)** 인수(argument)이다. 
	- `Zero-based numbering`을 사용하지 않는다.   
	💡 (cf. zero-based numbering이란 0부터 세지 않는 것을 말한다.)   

<br>
<br>

> 1. 색상(RGB / HSL / Opacity) 함수
- mix($color1, $color2) : 두 개의 색을 섞는다.
- lighten($color, $amount) : 더 밝은색을 만든다.
- darken($color, $amount) : 더 어두운색을 만든다.
- saturate($color, $amount) : 색상의 채도를 올린다.
- desaturate($color, $amount) : 색상의 채도를 낮춘다.
- grayscale($color) : 색상을 회색으로 변환한다.
- invert($color) : 색상을 반전시킨다.
- rgba($color, $alpha) : 색상의 투명도를 변경한다.
- opacify( $color, $amount) / fade-in( $color, $amount) : 색상을 더 불투명하게 만든다.
- transparentize( $color, $amount) / fade-out( $color, $amount) : 색상을 더 투명하게 만든다.

<br>

> 2. 문자(String) 함수
- unquote( $string) : 문자에서 따옴표를 제거한다.
- quote( $sting) : 문자에 따옴표를 추가한다.
- str-insert( $string, $insert, $index) : 문자의 index번째에 특정 문자를 삽입한다.
- str-index( $string, $substring) : 문자에서 특정 문자의 첫 index를 반환한다.
- str-slice( $sting, $start-at, [ $end-at]) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출한다.
- to-upper-case( $sting) : 문자를 대문자로 변환한다.
- to-lower-case( $string) : 문잘르 소문자로 변환한다.

<br>

> 3. 숫자(Number) 함수
- percentage( $number) : 숫자(단위무시)를 백분율로 변환한다.
- round( $number) : 정수로 반올림한다.
- cell( $number) : 정수로 올림한다.
- floor($number) : 정수로 내림(버림)한다.
- abs( $number) : 숫자의 절대 값을 반환한다.
- min( $number...) : 숫자 중 최소 값을 찾는다.
- max( $number...) : 숫자 중 최대 값을 찾는다.
- random() : 0부터 1사이의 난수를 변환한다.

<br>

> 4. List 함수   
  
👉 모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환한다.  
👉 모든 List 내장 함수는 Map 데이터에서도 사용할 수 있다.   

- length( $list) : list의 개수를 반환한다.
- nth( $list, $n) : list에서 n번째 값을 반환한다.
- set-nth( $list, $n, $value) : list에서 n번째 값을 다른 값으로 변경한다.
- join( $ilst1, $list2, [ $seperator]) : 두개의 list를 하나로 결합한다.
- zip( $lists...) : 여러 list들을 하나의 다차원 List로 결합한다.
- index( $list, $value): list에서 특정한 값의 index를 반환한다.

<br>

> 5. Map 함수  

👉 모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환한다.   
   
- map-get( $map, $key) : Map에서 특정 key의 value를 반환한다.
- map-merge( $map1, $map2) : 두 개의 Map을 병합하여 새로운 Map을 만든다.
- map-keys( $map) : Map에서 모든 Key를 List로 변환한다.
- map-values( $map) : Map에서 모든 value를 List로 반환한다.

<br>

> 6. 관리(Introspection) 함수
- variable-exist(name) : 변수가 현재 범위에 존재하는지 여부를 반환한다.(인수는 $없이 변수의 이름만 사용한다.)
- unit( $number) : 숫자의 단위를 변환한다.
- unitless( $number) : 숫자에 단위가 있는지 여부를 반환한다.
- comparable($number1, $number2) : 두 개의 숫자가 연산 가능한지 여부를 반환한다.

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://www.sassmeister.com/
	- https://velog.io/@hey_jude/SASS-1
	- https://heropy.blog/2018/01/31/sass/
	- https://m-veloper.github.io/devlog/2020/03/22/sass-15/
	- https://lunuloopp.tistory.com/entry/Sass-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-8-Sass%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98%EB%93%A4
	- https://blog.naver.com/PostView.nhn?blogId=nbsp3&logNo=221997128353&parentCategoryNo=10&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView
	- https://velog.io/@gytlr01/SCSS-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC
	- https://lazyload.tistory.com/4

</details>

---
