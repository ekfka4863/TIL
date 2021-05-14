---
date: 2021-05-14-Friday
---

# SASS 컴파일 방법 

<br>
<br>


## 번들러 이해하기 
- `The Bundler(번들러)`란 웹개발자가 하위 툴 그룹을 관리하는데 도움을 주는 도구다.   
초기의 웹 어플리케이션의 규모는 지금처럼 방대한 양이 아니었지만 기술의 발전으로 컴퓨터 성능이 좋아지고, 네트워크 속도도 빨라지면서 자연스럽게 웹 애플리케이션의 규모 또한 커져갔다. 이로 인해 파일의 양은 점차 늘어났고, 그에 따라 다양한 문제를 야기했다. 예를 들면, 수백 수천 개의 자바스크립트 파일이 있는데 어쩌다 보니 중복된 변수명을 만들어서 그로 인해 에러가 발생한다든지, 파일이 너무 많아서 서버가 파일 1개를 요청하고 응답하는데 너무 많은 시간이 소요된다든지... 
- 이와 같은 문제들을 해결하기 위해 번들러가 등장했다. 번들러를 더 쉽게 얘기하자면 **여러개의 파일을 하나의 파일로 묶어주는 역할을 하는 아이**라고 소개할 수 있겠다. 
- 웹 브라우저는 원래 HTML, CSS, JavaScript. 이렇게 3가지 언어만 해석 할 수 있다.   
하지만 개발자들은 raw한 이 언어들을 더 쉽고 간결하게 하기 위해 새롭게 언어들을 만들었다.   
  - e.g. CSS의 경우 SASS, Less가 그렇고, 자바스크립트는 Typescript 등이 그러하다.    
	우리는 단 3가지의 언어밖에 이해하지 못하는 브라우저를 위해 더 쉬운 언어로 작성을 하고 브라우저가 알아들을 수 있는 언어로 `변환하는 작업(= 트랜스파일(transpile). 어떤 특정 언어로 작성된 소스 코드를 다른 소스 코드로 변환하는 것을 의미)`을 해주는 것이다.   
	- **번들러는 이런 작업을 자동적으로 해준다.**
- 가장 보편적이고 인기있는 웹 번들러에는 Wepack, Parcel, browserify, Grunt, Gulp 등이 있다.   
아래 그림과 같이 번들러는 웹 어플리케이션을 구성하는 몇십, 몇백개의 소스(source)들을 하나의 파일로 병합 및 압축해주는 작업을 한다. 그리고 이런 작업/동작을 `모듈 번들링`이라고 한다.    
~~빌드, 번들링, 변황. 이 세 단어는 모두 같은 의미라고 한다!~~
	![번들러 예시](https://joshua1988.github.io/webpack-guide/assets/img/webpack-bundling.e79747a1.png)
- 위와 같이 번들러를 사용해서 얻는 <u>장점</u>:
	1. 번들러는 네트워크의 병목현상을 최소화 시켜준다.   
	번들러는 여러 파일을 하나의 파일로 묶어서 보내주고, 또 번들러가 여러 개의 파일들을 하나의 번들로 만들어 줄 때는 '종속성'을 알아서 확인하여 사용하지 않는 파일은 포함시키지 않는다. 따라서 파일의 크기가 줄어들고 페이지 로딩을 보다 빠르게 할 수 있게 된다. 
	2. '모듈'이라는 독립적인 공간 단위로 코딩을 할 수 있게된다. 
	번들러는 모듈 단위의 코딩을 가능하게 한다. 모듈 단위 코딩을 하게 되면 각 모듈이 독립적이기 때문에 앞서 문제점으로 언급된 중복된 변수명 등으로 인해 에상치 못한 에러가 발생하는 것을 막을 수 있다. 또 모듈 단위로 웹 어플리케이션의 기능을 구분하여 코딩하기 때문에 코드의 가독성이나 유지보수 측면에서 유용하단 장점이 있다. 
	3. 번들러 중 webpack은 로더(babel-loader)~~라는 것이 있는데 이~~ 를 통해 Babel이라는 ES6 이상의 자바스크립트 문법을 ES5 버전의 자바스크립트 문법으로 변환시켜주는 트랜스파일러를 사용할 수 있다. 이를 활용하여 ES5만 지원하는 오래된 브라우저에서도 ES6+ 문법으로 이루어진 자바스크립트 파일을 작동할 수 있게 힌다.  
	4. **SASS를 사용할 수 있게한다. 예를 들어, webpack에는 style-loader와 css-loader, sass-loader라는 로더가 있다. 이 로더를 사용하면 SASS를 CSS로 컴파일하여 사용할 수 있게된다.**


<br>
<br>

### 모듈 
- 번들러를 이해할 때 빠질 수 없는 개념이 바로 `모듈`이다.   
(cf. 위에 번들러의 장점에서도 나오는 개념!)
- 모듈의 사전적 정의는 아래와 같다;  
	- `프로그램 내부를 기능별 단위로 분할한 부분`
- 쉽게 말하자면 웹 어플리케이션을 구성하는 기능들을 각각 단위별로 분할해서, 그에 해당하는 코드를 여러개의 파일로 분리하는 것을 의미한다. 
-	모듈의 <u>장점</u>:
	- 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
	- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
	- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
	- 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
	- 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다. (브라우저에서만 해당)

<br>
<br>

# 번들러 알아보기 (Parcel VS Webpack)
- Parcel 과 WebPack은 Bundler라는 공통점을 가진다.   
WebPack의 경우는 일반적으로 많은 설정이 필요하고 이를 구성하는데 많은 시간을 필요로 하지만, Parcel의 경우 설정이 따로 필요하지 않아 빠르게 적용이 가능하다라는 장점이 있다.   
그래서 우리는 Parcel을 알아보는 시간을 갖도록 하겠다...   
~~(cf. 특히 우리는 현재 SASS를 배우고 있으니 이를 중점으로...!)~~

<br>
<br>

## Parcel 
- 먼저, What is parcel? 
	- Parel은 Webpack과 함께 bundler 시장의 점유율을 나눠갖고 있는 모듈 번들러이다. 번들러(bundler)란 dependency가 있는 자바스크립트 파일들을  최적화, 압축하여 하나 혹은 여러개의 static 파일로 빌드해주는 컴파일러이다.
	- How to start with Parcel?    
	공식 홈페이지의 헤드라인부터 **불꽃 튀게 빠르고 설정이 필요 없는 웹 애플리케이션 번들러**라고 적혀있는 Parcel은 아래와 같이 간단한 명령어로 설치가 가능하다.
		- CLI 환경에서 Yarn 이나 npm 으로 Parcel을 설치하면 된다;    
		Yarn:  
		`yarn global add parcel-bundler`
		<br>
		npm:  
		`npm install -g parcel-bundler`  
		[참고 링크1](https://ko.parceljs.org/getting_started.html)
		[참고 링크2](https://junhobaik.github.io/parcel-start/https://junhobaik.github.io/parcel-start/)
		- 빠른 빌드 실행:   
		별도의 설정 없이 진입 파일(Entry file)만 지정하면 바로 빌드(Build)한다.   
		`parcel index.html`
		- 자동 변환:   
		Parcel은 가장 많이 사용하는 Babel, PostCSS(특히 Autoprefixer) 같은 트랜스파일러들을 내장 하여 지원한다. ~~다시,~~ 모듈 안에 .babelrc, .postcssrc 같은 설정 파일들을 발견하면 자동으로 변환해준다.
 		- 시작하기:    
		디렉토리(폴더)를 만들고, 디렉토리로 이동해서 파일을 .json형식으로 만들어 준다. 그리고 `npm init`을 하면 된다. 


	https://2donny-world.tistory.com/13
	https://junhobaik.github.io/parcel-start/

<br>
<br>

## Webpack 

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>
- cf.  
	- https://ideveloper2.tistory.com/166
	- https://developer-alle.tistory.com/297
	- https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%97%90%EC%84%9C%EC%9D%98-%EB%AA%A8%EB%93%88
	- https://velog.io/@eastshine94/Bundler-%EC%99%9C-Bundler%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94%EA%B0%80
	- https://rumor1993.tistory.com/57
	- https://ko.parceljs.org/
	- https://heropy.blog/2018/01/20/parcel-1-start/
	-

</details>

---