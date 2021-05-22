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
- Sass에서 기본적으로 제공하는 내장 함수에는 많은 종류가 있습니다.
```scss
	// SCSS
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */


```
> 색상(RGB / HSL / Opacity) 함수
> 문자(String) 함수
> 숫자(Number) 함수
> List 함수
> Map 함수
> 관리(Introspection) 함수

💡
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
	- http://sass-lang.com/documentation
	-	https://www.sitepoint.com/sass-basics-operators/
	-	https://sass-guidelin.es/ko/
	-	http://www.thesassway.com/
	- https://soooprmx.com/sass-%EB%82%B4%EC%9E%A5-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC/

</details>

---

<!-- [계획]
금요일: 재활용 - 7개의 강의랑 ... 이후 ... 확장 - 2개 강의 
토요일: 함수 - 4개 강의 ... 조건문 - 2개 강의 ... 반복문 - 5개 강의 ... 내장함수 강의 1개 
-> 금요일까지 SASS 문법 전부 정리! + 프로젝트 마무리 -->