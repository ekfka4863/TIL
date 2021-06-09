---
date: 2021-04-19-Monday - 2021-04-21-Tuesday
---

# 함수 

> 학습 목표
- 자바스크립트는 함수를 만드는 방법이 많아서 처음에는 어떤 함수를 언제 활용해야 하는지 이해하기 힘들기도 하다. 오늘은 이런 자바스크립트의 `함수`라는 개념에 대해 알아보자. 

<br>
<br>

> 함수 관련 용어
- 우선 함수를 알아보기에 앞서 몇 가지 용어를 정리해보자.   
함수를 사용하기 위해 불러내는 것을 `함수 호출`이라고 하고, '함수를 호출하다'라고 표현한다. 함수를 호출할 때는 `function` 키워드를 사용하고 그 옆에 `함수 이름`을 적은 뒤, 그 옆에 () 안에 여러 가지 자료(`매개변수`)를 넣는다. 그리고 함수를 호출해서 최종적으로 나오는 결과값을 `리턴값`이라고 한다.

<br>
<hr>
<br>

## 자바스크립트의 함수 선언 방식 - 1. 선언적 함수 
- 자바스크립트에서 함수를 생성하는 가장 전통적인/기본적인 방법은 `function`이라는 키워드를 사용하는 것이다. 아래와 같이;
```javascript
	// 기본 문법
	function 함수이름 (매개변수 목록) {
		함수 실행부
	}

	// e.g.
	function hello1() {     // 일단 함수의 매개변수 X
		console.log('hello');
	}
	// 확인하는 차원에서 이 함수는 어떤 타입인지 typeof를 사용하여 확인해본다. 
	console.log(hello1, typeof hello1); 
	/* 출력 결과: 
			[Function: hello1] 'function' */
	/* 해석: 
			타입이 무엇인지 물어봤을 때, 문자열로 'function'이라고 나오는데, --
			이것은 우리가 기본 자료형으로 배운 데이터 타입이 아니다. 
			즉, 이것은 객체 중에 하나라는 사실을 알 수 있다. 
			(cf. 이에 대해서는 '객체'를 정리하는 시간에 좀 더 다룰 예정! 
			일단은 '함수'도 결국 객체의 한 종류라는 사실만 알고 넘어가기!) */


	// ---------------------------------- //


	// 함수의 매개변수
	/* 설명: 
			먼저, function 이라는 키워드로 함수를 만들고, 함수 이름은 hello2로 지정한다 
			그리고 () 안에 매개변수로 함수의 {} 블럭 안에서 사용할 매개변수의 이름을 지정해 주면 된다. 
			지금 예시에서는 name이 매개변수로 들어간다. */
	function hello2 (name) { 
		console.log('Hello there,', name);
	}


	// ---------------------------------- //


	// 함수의 리턴(값): 함수의 리턴값은 함수를 실행하면 얻어지는 값을 의미한다.
	// e.g. 
	function hello3(name) {
		return `Hello there, ${name} :)`;
	}
	console.log(hello3('Choi'));    // 출력 결과: Hello there, Choi :)
```

<br>
<hr>
<br>

## 자바스크립트의 함수 선언 방식 - 2. 익명 함수
- 자바스크립트에서 함수를 만드는 또 다른 방법은 똑같이 `function`이라는 키워드를 사용하는데, function 다음으로 함수 이름이 나오는 것이 <u>아니라</u> 함수의 이름이 없이 함수를 만든 후에, 그 만들어진 함수를 특정한 변수에 담아두는 것도 가능하다. 아래와 같이; 
```javascript
	const hello4 = function() {
		console.log('Hello! Nice to meet u :)');
	}

	console.log(hello4, typeof hello4);  // 리턴값: [Function: hello4] 'function'
	hello4();             // 리턴값: Hello! Nice to meet u :)


	// 함수의 매개변수 
	// ()안에 매개변수가 들어갔다고 해서 달라지는 것은 없다 
	const hello5 = function(name) {
		console.log('Hello! See u later :)', name);
	}

	hello5('Charlotte');
	// 출력 결과: Hello! See u later :) Charlotte


	// 함수의 리턴(값): 함수를 실행하면 얻어지는 값 
	const hello6 = function(name) {
		return `Hello! ${name}`;
	}

	hello6('Charlotte');
	
	// 리턴값: 'Hello! Charlotte'
```
<br>
<br>
<br>

> 선언적 함수와 익명 함수의 차이점

<br>

- 위에서 살펴본 함수를 만드는 두 방식의 **차이점**:
	- 위에서 함수를 만드는 첫번째 방법으로 살펴본 function 키워드 뒤에 함수 이름을 붙여서 만든 함수를 `선언적 함수를 만드는 방식`이라고 하고, 함수 이름을 붙이지 않고 만든 함수는 함수의 이름이 없다 하여 `익명 함수를 만들어 변수에 할당했다`라고 표현한다. 
	- 이 두개의 차이점을 조금 더 살펴보자; 
	```javascript
	// 두 함수 선언 방식은 차이점이 있다는 것을 확인하기 위해, 함수를 선언하기 전에 함수를 호출해보도록 하곘다
	hello_named_function();     
	// 출력 결과: 선언적 함수.
	// 해석: 선억적 함수는 어디에서 호출하든 함수가 먼저 메모리에 올라가기 때문에  
	hello_anonymous_function_var();
	// 출력 결과: Uncaught TypeError: hello_anonymous_function_var is not a function
	// 해석: 아예 함수 자체가 아니라고 한다. 이는 호이스팅 현상 때문에 var hello_anonymous_function_var;이라는 선언문만 호이스팅 돼서 undefined라는 값을 갖게 되고, 그렇기 때문에 아직 변수만 선언된 상태고 값은 할당되지 않은 undefined를 하나의 함수라고 판단하지 않는 것이다. 
	hello_anonymous_function_const();
	// 출력 결과: Uncaught ReferenceError: Cannot access 'hello_anonymous_function' before initialization 
	// 해석: 위의 에러와는 약간 다른 에러가 뜬다. 해석을 하려면 변수 선언 단계에 대해서 이해할 필요가 있다. 변수 선언 단계는 3단계가 있다; 1. 선언 단계, 2. 초기화 단계, 3. 할당 단계. 먼저 변수를 선언하면 변수가 등록이 되고, 변수는 메모리 공간을 확보하고 undefined라는 값으로 초기화된다. 이후, 변수 할당문에 도달하면 값의 할당이 이루어지는데, 현재는 const hello_anonymous_function_const라는 변수 선언은 됐지만, 초기화 되지 않은 상태기 때문에 접근을 할 수 없다고 에러메세지를 보여주는 것이다. 
	
	// 방법 1: 선언적 함수 
	function hello_named_function() {
		console.log('선억적 함수.');
	}



	// 방법 2: 익명 함수 - var 
	var hello_anonymous_function_var =  function() {
		console.log('익명함수를 var로 선언한 변수에 할당하면...');
	}

	// 방법 2: 익명 함수 - const 
	const hello_anonymous_function_const =  function() {
		console.log('익명함수를 const로 선언한 변수에 할당하면...');
	}
	```


<br>
<hr>
<br>

## 자바스크립트의 함수 선언 방식 - 3. 화살표 함수  
- 자바스크립트에서 함수를 만드는 또 하나의 방법은 바로 `화살표 함수(arrow function)`이다.  
- 기존 함수를 간결하게 표현할 수 있는 기능이 개션된 화살표 함수는 ES6에서 생겨났다.   
화살표 함수는 function 키워드를 사용하지 <u>않고</u> 화살표 모양의 `=> 연산자`를 이용하여 정의한다. 화살표 함수의 기본 문법은 아래와 같다; 
```javascript
	// 기본 문법
	() => { 함수의 바디 };

	// e.g.
	// arrow 함수를 만들어 이름이 hello1인 변수에 할당 
	const hello1 = () => {
		console.log('hello1');
	};
	// 유의! 화살표 함수는 변수에 할당하는 것이 기본 문법이기 때문에 항상 익명 함수다.


	// ---------------------------------- //


	// 함수의 매개변수: 함수를 호출할 때 값을 지정 
	// 유의! 매개변수가 하나일 때, 괄호를 생략할 수 있다 
	// e.g.1. 
	const hello2 = (name) => {
		console.log('hello2', name);
	}
	// e.g.2.  --> 위의 e.g.1와 동일! 매개변수가 하나이기 때문에 괄호를 생략했을뿐! 
	const hello2 = name => {
		console.log('hello2', name);
	}
	// e.g.3 --> 단, 매개변수가 하나 이상일 때는 무조건 ()를 붙여줘야 한다. 
	const hello3 = (name, age) => {
		console.log('hello3', name, age);
	}


	// ---------------------------------- //


	// 함수의 리턴(값): 함수를 실행하면 얻어지는 값 
	const hello4 = name => {
		return `hello4 ${name}`;
	}
	// 유의! 화살표 함수 코드 블록을 한 문장으로 작성 시 return 키워드와 중괄호 {}를 생략해도 화살표 오른쪽 표현식의 계산 결과값이 반환된다. 
	const hello5 = name => `hello4 ${name}`;
	// 유의! 만약 함수 코드 블록이 한문장이 아니라면 {}을 사용하고, return문을 작성해야 한다. return문이 없을 시 undefined가 반환된다. 
```

<br>
<hr>
<br>

## 자바스크립트의 함수 선언 방식 - 4. new Function 문법 
- 자바스크립트에서 함수를 만드는 또 한 가지 방법이 있다. 바로 `new`라는 키워드를 사용해서 함수를 만드는 방법이다.   
~~이 방법은 잘 사용하는 방법은 아니다. 하지만 이 방법 외에는 대안이 없을 때 사용하기도 해야하니 알아 둘 것!~~   
기본 문법은 아래와 같다; 
```javascript
	const 변수명 = new Function([arg1, arg2, ...argN], functionBody); 
	/* 설명: 
		새로 생성되는 함수는 인수 arg1, arg2, ...argN라는 매개변수들과 
		함수의 본문/바디(함수가 호출될 때 실행될 코드)인 functionBody로 구성된다.
				- 유의! 매개 변수들은 문자열로 들어간다 
				- 유의! 앞서 함수의 본문의 코드는 {}안에 들어가는 경우가 많았는데, 
			   new Function 문법에서는 {}가 없고 이것도 문자열로 들어간다       */
```
- 어떻게 보면 위에서 배운 익명함수를 만들어서 변수에 할당하는 방법과 유사하다.   
다만 생성자 함수는 아래 두 컨벤션을 따른다; 
	- 1. 함수 이름의 첫 글자는 대문자로 시작한다 
	- 2. 반드시 `new` 연산자를 붙여 실행한다 
```javascript
	// e.g. 
	const sum = new Function('a', 'b', 'return a + b');

	console.log(sum(1,2));    // 출력 결과: 3

	/* 설명: 
		new Function 문법으로 생성된 함수는 선언적 함수가 아니기 때문에 
		함수를 선언하기 전에 console.log(sum(1,2));를 사용하게 되면 
		sum is not defined 라는 에러를 보여주게 된다.              */
```
- new Function 문법으로 생성한 함수는 자심의 유효 스코프 안에 지역변수가 있어도, 전역 변수를 받아서 사용한다. 아래와 같이;  
```javascript
	global.a = 0;     // 글로벌 - / 전역 변수
	{
		const a = 1;   // 지역 변수를 만들어 준다 

		const test = new Function('return a');   // 여기 언급된 a가 바로 윗줄에 있는 지역변수라고 생각할 수 있곘지만, 아니라는 점! 여기서 a는 지역변수가 아닌 전역변수를 받아 사용하게 된다. 

		console.log(test());
	}


	// ---------------------------------- //
	// 그렇다면 다른 방법(익명 함수)으로 함수를 생성했을 경우에는? 
	{
		const a = 2; 

		const test = function() {
			return a;
		};

		console.log(test());        // 출력 결과: 2
	}
	// 보통 우리가 필요한 상황은 후자지만, new Function 문법으로 생성한 함수가 전역 변수를 받아서 사용한다는 사실은 알아두자! 
```

<br>
<hr>
<br>

>> 생성자 함수를 사용해서 객체 생성하기 

<br>
 
 - 나중에 클래스와 객체에 대해서 더 배우겠지만, 우선 이 생성자 함수를 이용하여 새로운 객체를 만들어 낼 수 있다는 사실을 기억하자. 
 - 생성자 함수를 사용하여 객체를 만들면 여러개의 동일한 프로퍼티를 가지는 객체를 생성할 수 있다. 아래와 같이; 
```javascript
	// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
	// step 1) 먼저 Person이라는 "틀"을 만든다 
	function Person(name, age) {
		this.name = name;
		this.age = age; 
		// 설명: 인자로 넣어준 name과 age를 객체가 프로퍼티로 가질 수 있게 만들어 주는 과정이다 
	}

	// step 2) 실제로 위에서 정의한 "틀"을 가지고 p라는 객체를 만든다
	const p = new Person('Mark', 37);

	console.log(p, p.name, p.age);

	// step 3) 이 Person 이라는 "틀"을 활용하여 여러명의 "사람 객체"를 만들어 낼 수 있다  
	const a = new Person('Charlotte', 62);
	console.log(a, a.name, a.age);

	const b = new Person('Maria', 12);
	console.log(b, b.name, b.age);

	const c = new Person('Chris', 49);
	console.log(c, c.name, c.age);
	// 객체 p, a, b, c 모두 각자 다른 객체이다 
```
<!-- - 이때, 위의 예시에서 등장하는 `this`는 기본적으로 문맥에 따라 그 것이 가리키는 대상이 달라진다. 즉, this의 값이 어디에서 어떻게 누가 호출하느냐에 따라 변한다는 의미다.   
	- 만약, 전역 범위(Global context)로 this를 호출한다면 this는 `window`라는 전역 객체를 가리킨다.
	- 하지만 this를 함수 내에서 호출한다면 현재 실행되고 있는 코드 문맥(Context)에 따라 this가 달라지게 된다. 
	- 객체 또는 클래스 내부에서 선언된 메소드 함수를 실행할 때 this를 호출하면 객체 (Object) 자기 자신을 의미한다. 
- 위와 같이 생성자 함수를 사용하여 객체를 만들고, 객체 안에서 `this`라는 키워드를 사용하여 해당 객체의 메서드를 호출 할 때는 this는 해당 메서드를 호출한 객체로 바인딩 되어 해당대해 여러개의 프로퍼티를 설정할 수 있다  -->
<!-- - 이때, `this`의 문맥을 가질 수 있는 것은 생성자 함수만 가능하고, 생성자 함수는 function 을 키워드로 사용해야 하는데, function 키워드를 사용하지 않는 화살표 함수(const 함수명 = () => {};)는 this라는 '문맥'을 갖지 못하기 때문에 위와 같은 객체 생성이 불가능하다.  -->


```javascript
```

<br>
<hr>
<br>


>> 참고: TDZ(Temporal Dead Zone)

<br>

- 여기서 잠깐! 오해하지 말아야 할 부분이 있다.  
	- `var`는 호이스팅이 발생하고, `let`과 `const`는 호이스팅이 발생하지 않는다고 오해할 수 있지만, 그렇지 않다. let과 const도 호이스팅이 발생한다. 
	- 다만, var 키워드로 변수를 선언하면 초기화가 **동시에** 일어나기 때문에, `undefined`가 출력되는 것이고, 
	- const 키워드는 초기화 전에는 접근할 수 없단느 `ReferenceError`가 발생하는 것이다. const 키워드로 만들어낸 변수는 변수 선언문 부분이 호이스팅이 되어 변수 선언은 됐지만, 초기화 전이기 때문에 접근(만/)이 불가하다는 뜻이다. 

<!-- 미완성 -->

<br>
<hr>
<br>

>> 참고: 함수 호이스팅 

<br>

- 방금 살펴본 위의 에제와 같이 함수를 선언하기 전에 어떻게 함수 호출이 가능한지 알아보자. 
- 위와 같은 현상을 `호이스팅`이라고 부른다.  
호이스팅을 직역하면 '끌어 올리기'인데 함수가 실제 호출하기 이전으로 끌어올라간 것처럼 동작하기 때문에 이런 현상을 호이스팅이라고 부른다. 
- ~~익명 함수가 아닌~~ 선언적 함수가 호이스팅 현상을 보인다. 이는 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타나는 현상인데, 간단하게 생각하면 자바스크립트 코드를 해석하는 단계와 실행하는 단계로 나뉘는데, 해석하는 단게에서 선언 문장을 초기화하면서 스코프를 형성하고 실행하는 단계에서 값을 할당하거나 게산을 하는 행위를 한다고 볼 수 있다.  
예제를 보면서 좀 더 확인해 보자; 
```javascript
	const


// 미완성




```
<br>
<hr>
<br>

>> 참고: 블록 레벨 스코프 VS 함수 레벨 스코프

<br>

- `var`는 함수 레벨 스코프
- `let`과 `const`는 블록 레벨 스코프
```javascript
	var x = 0; 
	{
		var x = 1;
		console.log(x);    // 출력 결과: 1
	}
	console.log(x);      // 출력 결과: 1


	let y = 0;
	{
		let y = 1;
		console.log(y);    // 출력 결과: 1
	}
	console.log(y);    // 출력 결과: 0
```

<!-- 미완성  -->


<br>
<hr>
<br>

>> 콜백 함수 

<!-- 혼공 시리즈 함수 보기 p. 220 ~  -->


<br>
<hr>
<br>

>> 타이머 함수 

<!-- 혼공 시리즈 함수 보기 p. 220 ~  -->


<br>
<hr>
<br>

>> 즉시 호출 함수 

<!-- 혼공 시리즈 함수 보기 p. 220 ~  -->


<br>
<hr>
<br>

>> 자바스크립트 console.log와 return의 차이점

<br>

<!-- https://hashcode.co.kr/questions/9574/자바스크립트-consolelog-와-return의-차이점이-궁금합니다 -->
<!-- https://www.codeit.kr/community/threads/10574 -->
<!-- https://3jun.tistory.com/140 -->
-
- 
```javascript
```

```javascript
```
```javascript
```



---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://deftkang.tistory.com/19 
	- https://first-class.tistory.com/15
	- 
	- 
	- 
	- 
	- 
	- 
	- 

</details>


---
