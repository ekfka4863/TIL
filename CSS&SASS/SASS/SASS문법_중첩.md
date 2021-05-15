---
date: 2021-05-15-Saturday
---

# SASS 문법: 03 - 06. 중첩(Nesting)
- SASS에서는 중첩 기능을 사용할 수 있다.   
중첩(Nesting)을 사용하면 부모/후손 선택자를 동일하게 계속 작성하는 것을 방지해주고 좀 더 편리하게 복잡한 구조를 작성할 수 있다. 특히 가상 클래스 선택자 선택시나 이름이 비슷한 클래스에 이용이 가능하기 때문에 SASS의 중첩기능의 편리함을 느낄 수 있다.   
예를 들어;
```css
	/* 아래와 같은 구조로 section안에 list가 있다고 하면... .section 안에 있는 .list를 선택하기 위해 부모 요소인 .section을 선택해야 하고, .list 안에 있는 li 태그를 선택하기 위해서는 또 .section과 .list를 입력해줘야 하는 번거로움이 있다. 
	즉, 우리가 선택하고 싶은 요소 말고도 그 앞에 상위 선택자들을 지속적으로 입력해줘야 하는 상황이다. */
	.section {
  	width: 100%;
	}
	.section .list {
		padding: 20px;
	}
	.section .list li {
		float: left;
	}
```
```scss
	// 위와 같은 복잡함을 SASS의 문법인 중첩 기능을 활용하면 아래와 같이 작성이 가능하다!
	.section {
		width: 100%;
		.list {
			padding: 20px;
			li {
				float: left;
			}
		}
	}
	// SASS의 문법으로 선택자의 반복을 피해 작성된 코드는 나중에 CSS로 컴파일 된다.
```

<br>
<br>

## Ampersand (상위 선택자 참조)
- 중첩 안에서 `&(Ampersand)` 키워드를 사용하면 부모 선택자를 참조하여 치환한다.   
예를 들어;
```scss
	// .list라는 것을 정의하는 중괄호 {}가 있고, 만약에 그 .list 라는 클래스의 last-child의 number를 one으로 적용하고 싶으면 아래와 같은 코드를 적을 수 있다.
	.list{
		&:last-child{
			number: one;
			}
		}
```
```css
	/* 위의 SCSS 코드가 기본 CSS로 컴파일 되면 아래와 같은 CSS 코드가 작성된다. */
	.list:last-child{
		number: one;
	}
```
- `&` 키워드가 참조한 상위 선택자로 치환되는 것이기 때문에 다음과 같이 응용할 수도 있다;
```scss
	// 예를 들어, font size를 정의하기 위한 클래스인 .fs를 만들고, 만약 이 .fs 클래스에 -small, -medium, -large라고 붙어있는 경우에 따라 font size를 각각 다르게 적용하고 싶다고 하면 아래와 같이 코드를 짤 수 있다.
	// .fs를 & 가 치환하기 때문에 .fs 대신에 &를 적어넣으면 된다.
	.fs {
		&-small { font-size: 12px; }
		&-medium { font-size: 14px; }
		&-large { font-size: 16px; }
	}
```
```css
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같아진다. */
	.fs-small {
		font-size: 12px;
	}
	.fs-medium {
		font-size: 14px;
	}
	.fs-large {
		font-size: 16px;
	}
```

<br>
<br>

## @at-root (중첩 벗어나기)
- 이번에는 우리가 중첩 안에서 뭔가를 적용/생성해야 하는데, 중첩 밖에서 사용해야 하는 경우에 사용할 수 있는 중첩기능을 알아보겠다.  
- 우선 `@at-root (중첩 벗어나기)`기능을 사용하는 방법부터 예시를 통해 알아보자.   
@at-root 사용하면 반복되는 변수를 사용하고 중첩문에서 벗어나 독립적으로 사용이 가능해진다. 
```scss
	.list {
		$w: 100px;   // 변수 (cf. $로 시작)
		$h: 50px;    // 변수 (cf. $로 시작)
		li {
			width: $w; // 위에서 정의한 변수 $w에 해당하는 100px과 연결된다 
			height: $h;  // 위에서 정의한 변수 $h에 해당하는 50px이 적용된다 
		}
		@at-root .box { // .box라는 것을 이 .list{} 범위 밖에서 사용하긴 해야하는데 $w, $h가 .list{} 범위 밖에서 .box 를 사용할 때 필요하다고 가정하면...
		// 이런 경우 	@at-root 를 사용해 .box를 .list {} 범위 안에서 정의하면 된다. 
			width: $w;
			height: $h;
		}
	}
```
```css 
	/* @at-root를 사용해 .list{} 안에서 정의한 .box 는 (당연하겠지만) $w와 $h에 입력된 값을 받게 된다. 이것은 변수의 유효범위가 적용됐기 때문이다. */
	/* SCSS 코드 상으로 .box가 .list {} 범위 안에서 정의 되긴 했으나 실제 CSS 코드로 컴파일 될 때는 아래와 같이 .list {} 범위 안이 아닌, 밖에 컴파일 된다; */
	.list li {
		width: 100px;
		height: 50px;
	}
	.box {      /* .box는 독립적으로 생성이 됨! */
		width: 100px;   /* 하지만 변수는 .list{} 밖에서도 사용할 수 있음! */
		height: 50px;
	}
```
- 하지만 만약, .list {} 안에 있는 특정 변수를 `@at-root` 키워드를 사용하지 않고 범위 밖에서 사용하려고 한다면, Error가 나게된다.   
~~(cf. 변수는 다음 .md 파일에서 더 알아볼 예정!)~~
```scss
	.list {
		$w: 100px;
		$h: 50px;
		li {
			width: $w;
			height: $h;
		}
	}

	// Error
	.box {
		width: $w;
		height: $h;
	}
```

<br>
<br>

## 중첩된 속성
- 이번에는 중첩된 속성을 정의하는 방법에 대해서 알아보자.   
e.g. font-weight, font-size, margin-left, margin-top 등... `font-`, `weight-`와 같이 동일한 네임 스페이스를 가지는 속성들이 있을 때, 이런 동일한 네임 스페이스(범위)를 갖는 속성들을 다음과 같이 사용할 수 있다;  		
	- `x:`의 형식으로 사용
	- e.g. 
```scss
		.box {
			font: {
				weight: bold;   // e.g. font-weight은 bold 고...
				size: 10px;     // e.g. font-size는 10px이다... 이런 의미! 
				family: sans-serif;
			};
			margin: {
				top: 10px;
				left: 20px;
			};
			padding: {
				bottom: 40px;
				right: 30px;
			};
		}
```
```css
		/* 그래서 위의 SCSS 코드는 CSS로 아래와 같이 컴파일 된다. */
		.box {
			font-weight: bold;
			font-size: 10px;
			font-family: sans-serif;
			margin-top: 10px;
			margin-left: 20px;
			padding-bottom: 40px;
			padding-right: 30px;
		}
```
	📌 이렇게 중첩된 속성. 즉, 동일한 네임 스페이스 (cf. 같은 수식 접두사를 공유하는) 속성들을 SCSS 문법으로 작성할 떄는 `수식 접두사:____`와 같은 형식으로 작성하면 된다. 

<br>
<br>

---

<details>
<summary>CLICK ME!</summary>

- cf.
	-	https://heropy.blog/2018/01/31/sass/
	- https://velog.io/@cash2cash/sassscss
	- https://velog.io/@yj6151122/CSS-Preprocessor-SASS
	- https://velog.io/@ylem76/SCSS-%EC%8B%A4%EC%8A%B5-%ED%99%98%EA%B2%BD-%EA%B0%96%EC%B6%94%EA%B8%B0

</details>

---