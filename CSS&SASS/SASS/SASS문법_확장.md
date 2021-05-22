---
date: 2021-05-21-Friday
---

# 확장(Extend)
- 특정 선택자가 다른 선택자의 모든 스타일을 가져야하는 경우가 종종 있다.  
이럴 경우 선택자의 `확장 기능(@extend)`을 사용할 수 있다.
- 기본 문법; 
```scss
	@extend 선택자;   // 내가 끌어오고 싶은 선택자를 적어주면 된다 
```
- e.g.  
```scss
	// SCSS

	.btn {             // 일단 .btn이라는 선택자의 코드는 아래와 같다; 
		padding: 10px;
		margin: 10px;
		background: blue;
	}
	/* 이때, .btn-danger 부분에서 나머지는 다 .btn과 같은 스타일링을 원하지만, 
	배경색상만 red;로 하고싶다고 가정해보자 */
	.btn-danger {      
		@extend .btn;     // 이럴 때, @extend라는 지시어와 .btn이라는 클래스 선택자를 통해서, 기존의 .btn이 갖고있던 스타일이 지금의 코드 라인으로 전달된다  -> 여기서 기존의 .btn이라는 클래스 선택자의 스타일을 "확장해서 사용한다!" 
		background: red;  // .btn에서는 배경색상이 blue;였지만 그 밑에서 이렇게 덮어쓰기를 해준다
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.btn, .btn-danger {   /* .btn도 .btn-danger도 같은 스타일을 공유! */
		padding: 10px;
		margin: 10px;
		background: blue;
	}
	.btn-danger {
		background: red;    /* 하지만 여기서 ... 배경색상 덮어쓰기 효과 */
	}
```
<!-- 💡 약간 위의 예시 부분은 mixin의 @content가 생각난다는 점... 또는 확장 기능은 엄밀히 말하면 약간 상속과 같은 기능이라고 할 수 있음.  -->
💡 SCSS의 확장 기능(@extend)을 사용하면 코드를 쉽게 관리 할 수 있고, 중복되는 코드를 줄이고, 통합적으로 관리할 수 있다는 장점이 있다. 하지만 그럼에도 불구하고 확장 기능을 추천하지 않는다.   
그에 대한 이유는...; 
- 바로 위의 예시에서 SCSS의 확장 기능(@extend)을 사용한 .btn과 .btn-danger는 `콤마(,)`로 구분되는 `다중 선택자`가 된 것을 확인할 수 있다. 이런 점에서 물론 SCSS의 확장 기능(@extend)은 얼핏보면 효과적인 코딩을 할 수 있게 하는 것 같지만, 확장 기능(@extend)을 사용하려면 아래와 같은 문제점들도 고려해야 한다는 것을 알 수 있다; 
	- 내 현재 선택자(위 예제의 .btn-danger)가 어디에 첨부될 것인가?
	- 원치 않는 부작용이 초래될 수도 있는가?
	- 이 한 번의 확장으로 얼마나 큰 CSS가 생성되는가?
- 위와 같은 내용을 고려하였을 떄, 확장기능의 사용은 장점도 있겠지만 의도하지 않은 여러 부작용을 초래할 수 있기 떄문에 확장 기능의 사용은 권장되지 않으며, 이를 대체하기 위해 **mixin**을 사용하는 것을 권장하고 있다.     
~~💡 (cf. mixin으로 확장 기능을 완벽하게 대체할 수 있다!)~~
```scss
	// SCSS 
	.container {
		width: 300px;
		height: 300px;
		background: red; 
		.item {
			width: 200px;
			height: 200px;
			background: blue; 
			.icon {
				width: 100px;
				height: 100px;
				background: green; 
			}
		}
	}

	.wrapper {
		.new-icon {
			@extend .icon; 
		}       
	}
```
```css
	/* CSS */
	/* 위의 SCSS 코드를 CSS로 컴파일 하면 아래와 같다; */

	.container {
		width: 300px;
		height: 300px;
		background: red;
	}
	.container .item {
		width: 200px;
		height: 200px;
		background: blue;
	}

	/* 아래의 코드는 우리가 바라던 것과는 약간은 다름! 결과적으로 .new-icon은 .icon의 스타일을 고대로 가지게는 되었지만, 선택자 부분이 다중선택자로 바뀜. 이런 부분을 의도한 것이면 상관 없지만, 의도 하지 않은 것이라면 곤란할 것! */
	.container .item .icon, .container .item .wrapper .new-icon, .wrapper .container .item .new-icon {
		width: 100px;
		height: 100px;
		background: green;
	}
```

💡 (cf. 추가적인 내용은 [링크](https://sass-guidelin.es/ko/#extend)에서 확인!)

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://www.sassmeister.com/
	- https://www.sitepoint.com/avoid-sass-extend/
	- https://heropy.blog/2018/01/31/sass/
	- https://velog.io/@hey_jude/SASS-1
	- https://m.blog.naver.com/PostView.naver?blogId=psj9102&logNo=221177093641&proxyReferer=https%3A%2F%2Fwww.google.com%2F

</details>

---

