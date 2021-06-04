---
date: 2021-05-18-Tuesday
---

# SASS 문법: 11 - 12. 가져오기(Import) 
- 우리는 CSS를 학습할 때, 지금 현재 CSS 파일에서 외부에 존재하는 또 다른 CSS 파일을 가져오려고 할 때 `@import` 키워드로 외부 파일을 연결시키는 방법을 배웠다.    
- CSS에서 사용하는 @import는 SASS에서도 굉장히 유사하게 사용된다.  
다만 다른점이 있다면 CSS는 외부에서 import된 여러 CSS 파일의 로딩을 http에 요청해야 한다면, SASS는 여러개의 SCSS 파일을 외부에서 import 해와도 최종적으로 하나의 CSS 파일로 컴파일 해주기 때문에 여러번 요청을 보낼 필요가 없다.   
<!-- 다시, SCSS에서 @import는 외부에서 가져온 SASS 파일을 모두 단일 CSS 출력 파일로 `병합`시켜준다.     -->
이제 SCSS에서 @import 규칙을 사용하는 방법에 대해서 알아보자!  
- 기본 문법: 
	- `@import "path/filename"`;  
	<!-- cf. SCSS 파일을 import 할 경우, .scss 확장자를 쓰지 않아도 된다. -->
	- e.g.  
	```scss
		// SCSS	

		@import "inc.css";
	```	
	```css
		/* CSS */

		@import url(inc.css);
	``` 
- Sass @import는 기본적으로 Sass 파일을 가져오는데, CSS @import 규칙으로 컴파일되는 몇 가지 상황이 있다;
	- 파일 확장자가 `.css`일 때
	- 파일 이름이 `http://`로 시작하는 경우
	- `url()`이 붙었을 경우
	- 미디어쿼리가 있는 경우   
	```scss
		// SCSS	

		@import "hello.css";	
		@import "http://hello.com/hello";
		@import url(hello);
		@import "hello" screen;
	```
	위의 경우 CSS @import 규칙대로 컴파일 된다.

<br>
<br>

## 가져오기(Import) - 여러 파일 가져오기
- 하나의 @import로 여러 파일을 가져올 수도 있는데, 이때 파일 이름은 `,`로 구분한다.
```scss
	// SCSS	

	@import "header", "footer";
```	

<br>
<br>

## 가져오기(Import) - 파일 분할(Partials)
- 프로젝트를 진행할 때, 프로젝트의 규모가 커지면 파일들을 각 기능과 부분/영역으로 나눠서 관리하면 유지복수가 쉬어진다. 하지만 이렇게 파일들을 분할하면 파일 수가 많아지는데, 모든 파일이 컴파일 시 각각의 `~.css` 형태로 나눠서 저장된다면 ~~너무 많은 양의 파일들이 따로 저장되기 때문에~~ 관리나 퍼포먼스 차원에서 문제가 될 수도 있다. 그래서 <u>SASS는 Partial 기능을 지원한다</u>.    
파일 이름 앞에 `_`를 붙여 ~~(e.g. _footer.scss 처럼...)~~ `@import`로 가져오면 컴파일 시 `~.css` 파일로 컴파일 하지 않는다.   
예를 들어; 
```scss
	// SCSS: _를 붙이지 않고 컴파일 할 때

	// 아래와 같이 scss/ 안에 3개의 .scss 파일이 있는데... 
	Sass-App
		# ...
		├─scss
		│  ├─header.scss
		│  ├─side-menu.scss
		│  └─main.scss
		# ...

	// main.scss로 나머지 ~.scss 파일을 가져올 때, 위에서 배운 여러개의 파일 import 하는 방법을 사용해서...
	@import "header", "side-menu";

	// 그리고 이 파일들을 css/ 디렉토리로 컴파일 하겠다고 하면... CLI에 가서 아래와 같은 명령어를 입력 ( cf. node-sass 로 진행! )
	$ node-sass scss --output css

	// 위와 같이 진행하면 컴파일 후 아래와 같이 scss/에 있던 파일들이 css/ 안에 각 하나씩의 파일로 컴파일되는 것을 볼 수 있다;
	Sass-App
		# ...
		├─css
		│  ├─header.css
		│  ├─side-menu.css
		│  └─main.css
		├─scss
		│  ├─header.scss
		│  ├─side-menu.scss
		│  └─main.scss
		# ...
```	
```scss
	// SCSS: _를 붙이고 컴파일 할 때

	// 이번에는 그럼 가져올 파일이름에 언더스코어(_)를 붙여보겠다 
	// 단, 메인 파일인 main.scss 에는 _를 붙이지 않겠다 
	Sass-App
		# ...
		├─scss
		│  ├─_header.scss
		│  ├─_side-menu.scss
		│  └─main.scss
		# ...

	// 위와 똑같이 main.scss로 나머지 .scss 파일들을 가져온다 
	@import "header", "side-menu";

	// 같은 명령어로 node-sass를 이용해서 컴파일 하면 ... 
	$ node-sass scss --output css

	// 이번에는 아래처럼 별도의 파일로 컴파일되지 않는다
	Sass-App
		# ...
		├─css
		│  └─main.css  // main + header + side-menu
		├─scss
		│  ├─header.scss
		│  ├─side-menu.scss
		│  └─main.scss
		# ...
```

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://heropy.blog/2018/01/31/sass/
	- http://megaton111.cafe24.com/2017/01/13/sass-문법-불러오기import-상속extend-믹스인mixin/
	- https://sso-feeling.tistory.com/240

</details>

---