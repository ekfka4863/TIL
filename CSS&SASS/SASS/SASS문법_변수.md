---
date: 2021-05-15-Saturday
---

# SASS 문법: 07 - 10. 변수 
- 변수란? 
	- `변수(Variables)`라는 것은 '반복적으로 사용되는 값을 하나의 변수라는 "그릇"에 담아 놓아 재사용할 수 있게 지정해 놓은 것. 또는 그 "그릇"'을 의미한다.
	- 기본 문법: 
		- `$변수이름 : 속성값;`  
		```scss 
			// 변수들을 만든다...
			$color-primary: #e96900;      // 변수 이름 앞에는 항상 $ 사인을 붙인다. 
			$url-images: "/assets/images/";   
			$w: 200px;                   // 즉, e.g. w 라는 이름을 가진 변수 $w는 200px라는 값을 갖는다는 의미다.

			.box {
				width: $w;
				margin-left: $w;
				background: $color-primary url($url-images + "bg.jpg");   
				/* 즉, e.g. .box에 background라는 속성을 지정할 건데 색상은 변수 $color-primary를 적용할 거고
				   url이란 속성을 사용해서 그 안에 주소는 특정 주소를 담고있는 변수인 $url-images에서 결과적으로는 
					 "bg.jpg" 라는 소스를 찾게끔 코드를 입력한다. */ 
			}
		```
		```css
			/* 위의 코드를 CSS로 컴파일 시키면 아래와 같다; */ 
			.box {
				width: 200px;
				margin-left: 200px;
				background: #e96900 url("/assets/images/bg.jpg");
			}
			/* 즉, 우리는 반복적으로 사용될 수 있는 내용의 부분을 변수라는 개념을 통해서 정의할 수 있다. */
		```
<br>
<br>

## 변수의 유효범위 (Variable Scope)
- 변수는 선언된 블록 {} 내에서만 유효하다.   
예를 들어; 
```scss
	.box1 {
		$color: #111;     // 변수 $color는 .box1의 블록 안에서 설정됐다
		background: $color;
	}
	// Error
	.box2 {
		background: $color;   // 따라서 .box1블록 밖에서 사용될 수 없다. 에러! 
	}
```

<br>
<br>

##  변수의 재할당 (Variable Reassignment)
- 변수에 변수를 재할당 할 수 있다.   
```scss
	$red: #FF0000;
	$blue: #0000FF;

	$color-primary: $blue;
	$color-danger: $red;

	.box {
		// 변수를 만들어 놓고, 만들어 놓은 변수를 새로운 변수를 만들어서 변수에 변수를 다시 할당해 줄 수 있다. 
		color: $color-primary;
		background: $color-danger;
	}
```
- 위의 SCSS 코드는 CSS로 컴파일 되면 아래와 같아진다; 
```css
	.box {
		color: #0000FF;
		background: #FF0000;
	}
```

<br>
<br>

## 변수의 전역 설정 (!global)
- 변수는 선언된 블록 내에서만 유효범위를 갖는 것이 일반적이나, `!global` 플래그(~~뒤에 붙이는 아이...~~)를 사용하면 변수의 유효범위를 전역으로 설정할 수 있게된다.     
```scss
	.box1 {
		$color: #111 !global;
		background: $color;
	}
	.box2 {
		background: $color;
	}
```
- `!global` 플래그를 사용하지 않으면 .box1 {} 범위 안에서만 변수 $color를 사용할 수 있겠지만, 플래그를 사용하여 $color를 전역 변수로 설정했기 때문에 Error가 뜨지 않고 정상적으로 작동한다.    
위의 SCSS 코드를 CSS로 컴파일 해주면 아래와 같아진다;  
```css
	.box1 {
		background: #111;
	}
	.box2 {
		background: #111;
	}
```
- 하지만, 변수의 유효 범위를 전역으로 바꿔 설정하면 기존에 사용하던 같은 이름의 변수가 있을 때 ~~(만약 같은 이름의 변수가 존재한다면)~~ 해당 변수의 값이 덮어쓰일 수 있다는 점을 유의하자!  

<br>
<br>

## 변수의 초깃값 설정 (!default)
- 현재 설정한 변수의 값을 사용하지 않겠다는 의미다.  
		- `!default` 플래그는 변수의 초깃값을 설정한다.   
		예를 들어, 외부 라이브러리를 연결했더니 변수 이름이 이미 작성한 변수 이름과 겹친다고 가정해보자. 이럴 경우 해당 변수는 값이 덮어쓰기 되어 문제가 생기게 된다. 이 때 라이브러리의 변수 뒤에 !default 플래그가 있다면 기존 값을 사용할 수 있게 된다.   
		~~(cf. 플래그(flag)란 프로그래밍에서 '무엇인가를 기억해야하거나 또는 다른 프로그램에게 약속된 신호를 남기기 위한 용도로 프로그램에 의해 사용되는 미리 정의된 메세지 같은 것이다.')~~
		
```scss

```
```css

```

<br>
<br>

## 변수의 문자 보간 (#{}) 
```scss

```
```css

```

<br>
<hr>
<br>

📌 정리하자면 ... 
- 변수
	1. 변수 유효 범위   
		- 변수는 선언된 블록 {} 내에서만 유효하다. 
	2. 변수 재할당   
		- 변수에 변수를 재할당 할 수 있다. 
	3. 전역 설정  
		- 변수는 선언된 블록 내에서만 유효범위를 갖는 것이 일반적이나,   
		`!global`을 사용하면 변수의 유효범위를 전역으로 설정할 수 있게된다.   
		하지만, 변수의 유효 범위를 전역으로 바꿀 설정하면 기존에 사용하던 같은 이름의 변수가 있을 때 해당 변수의 값이 덮어쓰일 수 있다. 
	4. 초깃값 설정 
		- 현재 설정한 변수의 값을 사용하지 않겠다는 의미다.  
		- `!default` 플래그는 변수의 초깃값을 설정한다.   
		예를 들어, 외부 라이브러리를 연결했더니 변수 이름이 이미 작성한 변수 이름과 겹친다고 가정해보자. 이럴 경우 해당 변수는 값이 덮어쓰기 되어 문제가 생기게 된다. 이 때 라이브러리의 변수 뒤에 !default 플래그가 있다면 기존 값을 사용할 수 있게 된다.   
		~~(cf. 플래그(flag)란 프로그래밍에서 '무엇인가를 기억해야하거나 또는 다른 프로그램에게 약속된 신호를 남기기 위한 용도로 프로그램에 의해 사용되는 미리 정의된 메세지 같은 것이다.')~~
	5. 문자 보간   
		- `#{}`


<br>
<br>

```scss

```

---

<details>
<summary>CLICK ME!</summary>

- cf.
	-	https://heropy.blog/2018/01/31/sass/
	- https://kishe89.github.io/java/2018/01/06/java-refactoring-02-ControlFlag.html    
	(프로그래밍에서 플래그란? - 1)
	- http://www.terms.co.kr/flag.htm    
	(프로그래밍에서 플래그란? - 2)
	- 
	- 
	- 
	- 



</details>

---