---
date: 2021-05-20-Thursday
---

# 재활용(Mixins)
- `@mixin`은 SASS 언어 전체에서 가장 많이 사용되는 기능 중 하나이며, 코드의 재사용성과 특정 코드의 반복적 사용을 줄이는데에 효과적이다. 
	- e.g. 버튼이나 아이콘 등을 class로 만들어 놓고 필요한 태그 스타일링에 따라 클래스를 추가로 넣어주는 경우가 있는데, 이런 경우 @mixin을 사용하면 손쉽게 반복적인 작업을 할 수 있다.
- Mixin을 선언할 때는 `@mixin` 지시자를 사용하며, 적용 시에는 `@include` 지시자를 사용한다. 
- Mixin 정의 방법; 
```scss
	@mixin mixin-name {
		// code
	}
```
- 괄호 () 안에 아래와 같이 인자를 포함할 수도 있다; 
```scss
	@mixin mixin-name( $arg1, $arg2, ... ) {
		// code
	}
```
- Mixin 사용 방법;
```scss
	@include mixin-name;
```
- 만약 인자를 받은 mixin이라면 아래와 같이 사용; 
```scss
	@include mixin-name( value1, value2, ... );
```
- 예시를 통해 더 알아보자;
 







```scss

```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */


```


<br>
<br>



#
```scss
	// SCSS
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */


```

<br>
<br>


#
```scss
	// SCSS
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */


```
<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://www.codingfactory.net/10110
	-
	-
	-
	-
	-
	-
	-


</details>

---



<!-- [계획]
목요일: 재활용 - 7개의 강의랑 ... 이후 ... 확장 - 2개 강의 
금요일: 함수 - 4개 강의 ... 조건문 - 2개 강의 ... 반복문 - 5개 강의 ... 내장함수 강의 1개 
-> 금요일까지 SASS 문법 전부 정리! + 프로젝트 마무리 -->