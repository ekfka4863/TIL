---
date: 2021-05-14-Friday
---

# SCSS 개요 

- CSS(cf. Cascading Style Sheets/문서의 스타일을 구현하는 스타일 시트 언어)를 익히면서 `SCSS` 그리고 `SASS`라는 것에 대해 들어봤지만 이것들이 무엇인지, 왜 사용하는지 어떻게 쓰는지, 이 둘의 차이점은 무엇인지 정확히 알고 있지 않았다.  
- 간단하게 `SCSS` 그리고 `SASS`란 **CSS를 편리하게 이용할 수 있도록 도와주며 추가 기능도 있는, CSS를 확장하는 스크립팅 언어** 정도로 생각하면 될 것 같다.  
- 처음 CSS를 접한 사람들에게는 CSS가 분명히 재밌고 다소 쉽다고 느껴지곘지만, 기존의 CSS는 약간의 raw(가곡되지 않은, 날 것의 느낌)함이 있다. 그래서 스타일 시트의 작업 양이 늘어남에 따라 코드의 양 또한 방대해지고 불편함도 같이 커지게 되는 경험을 하게 된다.   
이런 불편함을 해소시켜주기 위해 생겨난 것이 바로 SCSS와 SASS이다. 
- 흔히 `CSS Preprocessor(전처리기)`라고도 부르며 이 친구들(?)은 CSS가 동작하기 전에 사용하는 아이들로, 웹에서는 CSS가 동작하지만 우리는 CSS의 불편함을 이런 CSS 전처리기/확장판으로 줄이고자 하는데에 CSS Preprocessor 사용 목적이 있다고 할 수 있겠다.  
- 아래에는 기본 CSS로 적용한 HTML과, SCSS와 SASS를 적용한 HTML 코드가 있다.  
이들의 차이를 코드를 통해 살펴보자; 
```html
	<!-- 아래와 같은 코드가 있다고 가정하자. 
	이 HTMl 코드를 꾸밀 때 SCSS와 SASS, 그리고 CSS의 차이는 아래와 같다; -->
	<div>
		<ul class="list">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</div>
```

```css
	/* CSS */
	.list {
		width: 100px;
		float: left;
		}
	li {
		color: red;
		background: url("./image.jpg");
		}
	li:last-child {
		margin-right: -10px;
		}
```

```scss
	/* SCSS */
	.list {
		width: 100px;
		float: left;
		li {
			color: red;
			background: url("./image.jpg");
			&:last-child {
				margin-right: -10px;
			}
		}
	}
```

```scss
	/* SASS */
	.list
		width: 100px
		float: left
		li
			color: red
			background: url("./image.jpg")
			&:last-child
				margin-right: -10px
```
위의 세개의 코드는 모두 같은 동작을 하는 코드이다.   
셋 다 같은 같은 동작을 적용한 것이지만 약간씩 코드가 다른 것을 알 수 있다.    

<br>
<br>

# SASS와 SCSS의 차이점 
- 왜 사용하는 것인가? 
	- CSS가 복잡한 언어는 아니지만 작업이 크고 고도화 될수록 불편함이 증가한다.   
	SCSS와 SASS는 불필요한 선택자(Selector)의 과도한 사용과 연산기능의 한계, 구문(Statement)의 부재 등 프로젝트가 커지면서 복잡해지는 CSS 작업을 쉽게 해주며 가독성과 재사용성을 높여주어 유지보수에 편리하다는 장점이 있다.  
	- 또한 앞으로 SASS를 배우면서 이해해나갈 부분이겠지만 SASS는 CSS의 태생적인 한계를 보완하기 위해 아래와 같은 추가 기능을 허용하고 유용한 도구들을 제공한다; 
		- 변수의 사용
		- 조건문과 반복문
		- Import
		- Nesting
		-	Mixin
		- Extend/Inheritance    
		SASS의 위와 같은 추가 기능과 도구들은 CSS보다 간략하게 표기하는 것이 가능케 하기 때문에 CSS를 <u>구조화</u>하여 표현할 수 있게 한다. 특히 CSS에는 존재하지 않는 Mixin이라는 강력한 기능을 활용하면 CSS 유지보수 편의성을 증폭시킬 수 있다. 
- 그렇다면 SASS와 SCSS의 <u>>차이점</u>은? 
	- **SCSS**는 <u>Sassy CSS(멋진 CSS)</u>의 줄임말이고 **SASS**는 <u>Syntactically Awesome Style Sheets (문법적으로 완전 ~~짱~~ 멋진 스타일시트)</u>의 줄임말이다. 둘 다 "멋진 스타일 시트"란 말인데 어떤 차이가 있을까?
		-	위의 예시를 통해 대략적인/외관적인 차이는 확인하였겠지만, 간단히 말하면 **SASS보다 SCSS가 후에 등장했고, 여러가지 문법의 차이가 있지만 SCSS가 더 넓은 범용성과 CSS의 호환성 등의 장점으로 <u>SCSS의 사용을 권장하고 있다</u>.** 
		- 또한 SASS의 공식 문법도 SCSS를 기준으로 작성 되어있기 때문에, SASS가 모든 CSS 버전과 완전히 호환되기 위해서는 SCSS문법 사용이 전제되어야 한다.    
		~~또한 이런 점 때문에인지 SASS는 통상적으로 SCSS라도 불리기도 한다는 점을 알아두자!~~   
		이 둘의 차이를 더 명확하게 알고 싶다면 하단의 링크를 클릭!  
		[링크](https://designmeme.github.io/ko/blog/write-sass-with-scss/)
	- 더 쉽고 간단한 차이는 `{}(중괄호)`와 `;(세미콜론)`의 유무다.    
		- SASS는 중괄호와 세미콜론이 없지만, SCSS는 중괄호와 세미콜론을 사용한다.  
		  📌  SCSS는 선택자의 유효범위를 {} 중괄호로 구분해주지만. SASS는 선택자의 유효범위를 `들여쓰기`로 구분해준다는 차이가 있다.  

<br>
<br>

## 끝으로 ... 
- Sass외에 다른 전처리기들도 물론 존재하고, 후처리기의 개념도 있다.    
	- [LESS](http://lesscss.org/)   
	- [Stylus](http://learnboost.github.io/stylus/)   
	- [cssnext](https://cssnext.github.io/)   
	- [PostCSS](https://github.com/postcss/postcss)   
- 그리고 SASS(SCSS)를 CSS pre-processor(전처리기)라고 명한 이우는 SASS자체로 브라우저에 적용하는 것이 아니라 CSS를 확장해서 쉽고 편리하게 쓰기 위해서 사용하는 스크립팅 언어이기 때문이다. 따라서 SASS로 작성한 코드는 컴파일 해서 일반 CSS 문법으로 바꾼 뒤 브라우저에 적용된다는 말이다.  
~~아래처럼:~~
	- cf.
	![SASS가 CSS 전처리기라고 불리는 이유](https://www.mugo.ca/var/ezwebin_site/storage/images/_aliases/full_720/media/images/sass-blog-post-image01/315767-1-eng-US/sass-blog-post-image01.jpg) 

---

<details>
<summary>CLICK ME!</summary>

- cf.
	-	https://velog.io/@jch9537/CSS-SCSS-SASS
	- https://heropy.blog/2018/01/31/sass/
	- https://yunzema.tistory.com/269
	- https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS

</details>

---