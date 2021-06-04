---
date: 2021-05-22-Saturday
---

# 반복문

## @for (지시어) 
- <u>`@for`는 스타일을 반복적을 출력</u>한다.   
자바스크립트의 [for문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)과 유사하다.
- `@for`는 `through`를 사용하는 형식과 `to`를 사용하는 형식으로 나뉜다.    
두 형식은 종료 조건이 해석되는 방식이 다르다. 
```scss
	// 1. through
	// 종료 만큼 반복
	@for $변수 from 시작 through 종료 {   
		// 반복 내용
	}

	// 2. to
	// 종료 직전까지 반복
	@for $변수 from 시작 to 종료 {
		// 반복 내용
	}
```
- 예시를 통해 차이점을 이해해 보자;     
```scss
	// SCSS
	
	// 1부터 3번 반복
	@for $i from 1 through 3 {
		.through:nth-child(#{$i}) {   // 바로 $i를 넣는 것이 아니라, #{} 문자보간을 사용해줘야 한다는 점 유의!
			width : 20px * $i
		}
	}

	// 1부터 3 직전까지만 반복 (즉, 2번 반복)
	@for $i from 1 to 3 {
		.to:nth-child(#{$i}) {
			width : 20px * $i
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.through:nth-child(1) { width: 20px; }
	.through:nth-child(2) { width: 40px; }
	.through:nth-child(3) { width: 60px; }

	.to:nth-child(1) { width: 20px; }
	.to:nth-child(2) { width: 40px; }
```
<br>

💡 Tip!  
- `to`는 주어진 값 직전까지만 반복해야할 경우 유용할 수 있다.   
- 그러나 `:nth-child()`에서 특히 유용하게 사용되는 `@for`는 일반적으로 `through`를 사용하길 권장합니다.

<br>
<br>

## @each (지시어) 
- `@each`는 List와 Map 데이터를 반복할 때 사용한다.     
자바스크립트의 [for in문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in)과 유사하다.
~~💡 (cf. List는 자바스크립트의 배열과, Map 데이터는 자바스크립트의 객체와 유사한 데이터 종류!)~~
- `@each`의 사용법; 
```scss
	@each $변수 in 데이터 {
		// 반복 내용
	}
```
- e.g.     
List 데이터를 반복해보자; 
```scss
	// List Data
	$fruits: (apple, orange, banana, mango);    // 배열과 유사한 List data인 $fruits

	.fruits {
		@each $fruit in $fruits {
			li.#{$fruit} {          // li. 뒤에 붙는 과일이름은 매번 달라질 것. 반복문에 의해...
				background: url("/images/#{$fruit}.png");  // img의 url도 #{문자보간}에 각 $fruit에 해당하는 부분이 들어가기 때문에 매번 달라진다.
			}
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.fruits li.apple {
		background: url("/images/apple.png");
	}
	.fruits li.orange {
		background: url("/images/orange.png");
	}
	.fruits li.banana {
		background: url("/images/banana.png");
	}
	.fruits li.mango {
		background: url("/images/mango.png");
	}
```
<br>

💡 Tip!
- 혹시 반복문에서 index 값이 필요하다면 아래와 같이 `index()`라는 내장 함수를 사용할 수 있다;     
~~(예를 들어, 배열 $fruits에는 인덱스가 없지만 반복문을 돌릴 때, 변수 $i를 정의한 뒤, index() 라는 내장함수를 통해서 현재 반복하는 구간이 몇번째 반복하고 있는 구간인지를 알아내는데 사용할 수 있다.)~~ 
- e.g.2   
```scss
	$fruits: (apple, orange, banana, mango);

	.fruits {
		@each $fruit in $fruits {
			$i: index($fruits, $fruit);    // index() 내장 함수 사용. 첫 번째 인수는 list data 전체를 입력하고, 두 번째 인수로는 우리가 이 list data에서 반환하고 싶은 index에 해당하는 value를 적어준다... 이 경우는 $fruit
			li:nth-child(#{$i}) {    // #{} 문자보간 꼭 기억할 것~!
				left: 50px * $i;
				background: url("images/#{$fruit}.png");
			}
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.fruits li:nth-child(1) {
		left: 50px;
		background: url("images/apple.png");
	}
	.fruits li:nth-child(2) {
		left: 100px;
		background: url("images/orange.png");
	}
	.fruits li:nth-child(3) {
		left: 150px;
		background: url("images/banana.png");
	}
	.fruits li:nth-child(4) {
		left: 200px;
		background: url("images/mango.png");
	}
```

<br>

💡 Tip!
- 동시에 여러 개의 List 데이터를 반복 처리할 수도 있다.  
단, 각 데이터의 Length가 같아야 한다.
- e.g.3   
```scss
	// SCSS

	$apple: (apple, korea);      // $apple, $orange, $banana 모두 list data이고 length가 2로 동일한 length를 갖는다.
	$orange: (orange, china);
	$banana: (banana, japan);

	@each $fruit, $country in $apple, $orange, $banana {   
		.box-#{$fruit} {
			background: url("/images/#{$country}.png");
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box-apple {
		background: url("/images/korea.png");
	}
	.box-orange {
		background: url("/images/china.png");
	}
	.box-banana {
		background: url("/images/japan.png");
	}
```

<br>

💡 Tip!
- Map 데이터 ~~(cf. 괄호 안에 (key: value,)의 형태)~~ 를 반복할 경우 하나의 데이터에 두 개의 변수가 필요하다.   
아래와 같이; 
```scss
	@each $key변수, $value변수 in 데이터 {
		// 반복 내용
	}
```
- e.g.4
```scss
	// SCSS

	$fruits-data: (
		apple: korea,
		orange: china,
		banana: japan
	);

	@each $fruit, $country in $fruits-data {    // $fruits-data는 map 데이터. key: value 로 이루어져 있는데, key를 받을 변수 하나 그리고 value를 받을 변수 하나. 이렇게 각각의 변수가 총 2개($fruit, $country) 필요하다.  
		$fruits-data--key-list: map-keys($fruits-data);
		// $fruits-data--value-list: map-values($fruits-data);
		$index : index($fruits-data--key-list, $fruit); 
		.box-#{$fruit} {         // .box- 라는 접두사가 붙고, 그 뒤에 #{}문자 보간을 통해서 변수에 오는 값들에 따라 값이 달라지게 한다.
			width: $index;     // tip! map data와 index(), map-keys()...등의 내장 함수를 이용해서 index를 추출 및 사용할 수 있다.
			height: 100px * $index;
			background: url("/images/#{$country}.png");   // 여기도 마찬가지로 #{}로 변수 $country가 받는 값에 따라 달라진다...
		}
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.box-apple {
		width: 1;
		height: 100px;
		background: url("/images/korea.png");
	}

	.box-orange {
		width: 2;
		height: 200px;
		background: url("/images/china.png");
	}

	.box-banana {
		width: 3;
		height: 300px;
		background: url("/images/japan.png");
	}
```

<br>
<br>

## @while (지시어)  
- `@while`은 조건이 `false`로 평가될 때까지 내용을 반복한다.    
자바스크립트의 while 문과 유사하게 잘못된 조건으로 인해 컴파일 중 무한 루프에 빠질 수 있다는 단점이 있다. 또한 그렇기 때문에 사용을 권장하지 않는다.   
💡 (cf. while 문은 for 또는 each 로 대체가 가능하니, 되도록이면 사용하지 않을 것!)
- `@while` 기본 사용법;
```scss
	@while 조건 {
		// 반복 내용
	}
```
- e.g. 
```scss
	// SCSS

	$i: 6;        // 관례상 $i로 하기... 

	@while $i > 0 {    // 조건: $i 가 0보다 큰 수라는 것이 true일 때까지 아래와 같은 코드를 반복...
		.item-#{$i} {   // 출력되는 .item- __들... __부분은 $i의 숫자에 따라 달라질 것.
			width: 2px * $i;   // width는 2px * $i의 값이여라~
		}
		$i: $i - 2;      // 6으로 시작하는 $i는 while 반복문을 돌때마다 -2 된다는 말...
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.item-6 { width: 12px; }   /* width 는 2px 곱하기 6 */
	.item-4 { width: 8px; }    /* width 는 2px 곱하기 4 */
	.item-2 { width: 4px; }    /* width 는 2px 곱하기 2 */
```

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://heropy.blog/2018/01/31/sass/
	- https://velog.io/@hey_jude/SASS-1
	- https://zero-dimension.tistory.com/38?category=909567
	- https://viaeoo.tistory.com/31
	- https://gahyun-web-diary.tistory.com/61
	- http://blog.naver.com/PostView.nhn?blogId=m_veloper&logNo=221867355722&redirect=Dlog&widgetTypeCall=true&directAccess=false

</details>

---