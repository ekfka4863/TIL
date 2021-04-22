---
date: 2021-04-20-Tuesday
---

# 객체(Object)
- `객체` 또는 `개체`라고 부르기도 한다.   
이 `객체`란 함수 또는 클래스로 "`틀`"을 만드는 것을 의미한다. 
- 그 "틀"에서 object를 하나씩 하나씩 찍어내게 되는데, 그렇게 만들어낸 `개체`를 `인스턴스(instance)`라고 부른다. 
- 인스턴스를 생성해내는 방법은 다양하다:

<br>

>> `function 틀() {} => new 틀()`
- 먼저, 함수를 이용해서 객체 생성을 하는 방법을 알아보자;
	- 객체를 만들어내는 "틀"의 역할을 하는 함수를 `생성자 함수`라고 한다. 
	- 먼저, `function` 키워드로 "틀"의 역할을 할 함수를 생성하고, 
	- 그리고 `new`라는 키워드를 "틀"에 사용하여 객체를 만든다. 
```javascript
	// 생성자 함수 
	function Z() {}

	const z = new Z();
	console.log(z, typeof z);     // 출력 결과: Z {} 'object'
	console.log(Z());      
	// 출력 결과: undefined
	// 설명: Z();는 생성자 함수가 아니기 떄문에 객체가 생성되는 것이 아니라 Z()라는 함수를 그냥 실행하고 리턴값을 반환 한다. 근데 지금 리턴이 없기 때문에 그냥 undefined가 찍히게 되는 것이다. 


	// ------------------------------ //
	// 생성하면서 데이터 넣기 
	function Y(name, age) {
		console.log(name, age);
	}

	const y = new Y();
	const x = new Y('Anna', 17);
	// 출력 결과: Anna 17


	// ------------------------------ //
	// 객체에 속성(property) 추가하는 방법 
	// case 1. 값을 속성으로 넣는 방법 
	// step 1) 우선 생성자 함수로 객체를 만든다 
	function A() {}
	new A(); 
	// step 2) 생성된 객체가 {name: 'Mark'}라는 속성과 속성값을 넣으려면 아래와 같이 ...
	function A() {
		this.name = 'Mark';
	}
	const a = new A(); 
	console.log(a);


	// case 2. 함수를 속성으로 넣기 
	// step 1) 우선 생성자 함수로 객체를 만든다 
	function B() {}
	new B(); 
	// step 2) 생성된 객체가 function() {console.log('hello');}라는 함수를 속성으로 갖게 하려면 아래와 같이 ...this.hello라고 적어 객체를 대상으로 한 속성명을 hello로 적고, = 연산자 우항에 함수를 적는다 
	function B() {
		this.hello = function() {
			console.log('hello');
		}
	}
	new B().hello();
	// (new B()).hello();  --> 위와 같은 거~ 
	// 출력 결과: hello
```

<br>
<br>

>> `new Object()`
- 자바스크립트에서 객체를 만드는 또 다른 방식은 `Object`라는 키워드로 객체 만드는 방법이다.   
~~단, 이 방법은 별로 권장되는 방법이 아니다.~~
```javascript
	// new Object()로 객체 만들기 

	// e.g. 
	const a = new Object();
	console.log(a, typeof(a));
	// 출력 결과: {} "object"


	// e.g. 
	const b = new Object(true);
	console.log(b, typeof(b));
	// 출력 결과: Boolean {true} "object"
	// 설명: 불린이라고 하는 생성자를 이용해서 true라는 값을 가진 "object"(자료)형의 객체가 나오게 된다는 의미.

	
	// e.g. 
	const c = new Object({name : 'Mark'});
	console.log(c, typeof(c));
	// 출력 결과:  {name : "Mark"} "object"
	// 설명: {name : "Mark"}이라는 (리터럴)형태의 객체가 나온다 
```
- 자바스크립트에는 `프로토타입(.prototype)`이란 개념이 있다. 프로토타입을 이용하면 모든 객체와 객체를 연결해서 표현할 수 있다. 이것을 `프로토타입 체인`이라고 하고, 프로토타입 체인을 사용하여 객체들을 연결해 한쪽 방향으로 상속을 받는 형태를 만들 수가 있는데, ~~자바스크립트에서 객체와 객체를 연결해서 상속 받는다는 것은 다른 말로 객체와 객체를 연결해 멤버 함수나 멤버 변수를 공유 한다는 뜻이다.~~ 이런 점을 이용해 자바스크립트에서는 상속과 비슷한 효과를 얻을 수 있게된다.   
```javascript
	// prototype

	// function으로 Person이라는 생성자 함수를 만들어보자
	// 생성자 함수 Person은 name, age를 인자로 받는다 
	function Person(name, age) {
		this.name = name;
		this.age = age; 
		this.hello = function() {
			console.log('hello', this.name, this.age);
		}
	}
	 
	const p = new Person('Mark', 37);   // 객체 생성 
	p.hello();
	/* 이때, 우리가 작성하지 않은 toString();이라는 함수를 사용하면... 
    우리는 이런 함수는 존재하지 않는다거나 하는 메세지를 기대하지만, 출력 결과는: 
		[object Object]라고 나온다. */
	console.log(p.toString());
	/* 위와 마찬가지로 ... */
	console.log(Person.prototype);
	// 출력 결과: Person {}
	console.log(Person.prototype.toString);  
	// 출력 결과: [Function: toString]
	console.log(Person.prototype.constructor);  
	// 출력 결과: [Function: Person]    --> 여기서 constructor는 이 함수 자체를 의미한다 
	console.log(Person.hello);
	// 출력 결과: undefined --> 객체로 생성이 되어야지 hello()라는 함수를 사용할 수 있기 때문... 
	console.log(Person.prototype.hello);
	/* 출력 결과: 그래도 undefined --> 왜냐면 ... 
	프로토타입에 hello가 있는 것이 아니라 객체가 만들어지고 난 뒤 
	객체에 hello라는 함수가 '객체의 프로퍼티로' 바로 할당이 됐기 때문이다... 
	즉, 프로토타입은 객체 Person에서 
	this.hello = function() {
			console.log('hello', this.name, this.age);
		} 부분 보다 더 "안 쪽"에 있는 "무언가" 라는 의미다. */
	// 만약 Person의 prototype에 함수 hello를 프로퍼티로 지정하고 싶다면 아래와 같이 해야한다;
	Person.prototype.hello = function() {
		console.log('hello', this.name, this.age);
	}	
	/* 위와 같이 하면 출력 결과는: [Function]으로 나온다. 
		즉, Person이라는 객체의 프로토타입의(.prototype) 프로퍼티(.hello)도 그냥 객체의 프로퍼티를 지정하는 것처럼 값이나 또는 함수를 지정을 할 수 있다는 의미다. */

	// 이번에는 Object를 통해서 확인해 보자; 
	console.log(Object.prototype);
	// 출력 결과: [Object: null prototype] {} --> 객체의 프로토 타입은 빈 객체의 형태이다 
	console.log(Object.prototype.toString);
	// 출력 결과: [Function: toString] 
	console.log(Object.prototype.constructor);
	// 출력 결과: [Function: Object]

	console.log(p instanceof Person);
	// 해석: p라는 것이 Person으로 부터 나온 인스턴스이니? 라고 묻고 true/false로 나타내주는 표현식 
	// 출력 결과: true  
	// 설명: 즉, 이 p라고 하는 객체는 Person이라는 생성자 함수에서 나왔는데, 이 Person이라는 것은 Object로 부터 프로토타입 체인을 받아온 후에, 내가 설정한 프로퍼티(name, age, hello 등과 같은...)를 가지고 있는 형태라는 것을 의미한다.
	console.log(p instanceof Object);
	// 해석: p라는 것이 Object으로 부터 나온 인스턴스이니? 라고 묻고 true/false로 나타내주는 표현식 
	// 출력 결과: true 
```
- 위에서 살펴 봤듯이, 자바스크립트에서 프로토타입이라는 개념은 굉장히 중요하다.  
프로토타입을 이용한 객체 확장에 대해 알아보자; 
```javascript 
	// prototype 상속 
	function Person() {}    // (부모) 객체 생성 

	Person.prototype.hello = function() {   // Person의 프로토타입에 hello 라는 함수를 만들고 ... 
		console.log('hello');
	};

	function Korean(region) {  // (자식) 객체 생성해서 ... 
		this.region = region;     // 프로퍼티도 만들어 준다 ... 
		this.where = function() {
			console.log(`I'm from ${this.region}!`);
		};
	}

	Korean.prototype = Person.prototype;  // Korean의 프로토타입을 Person의 프로토타입으로 바꾼다. 즉, 자식 객체인 Korean에 부모 객체의 prototype에 저장되어 있는 프로퍼티를 '상속'시켜주는 것~ 

	const k = new Korean('Seoul');   // 그렇게 변수 k에 객체 Korean을 할당하고 ... 

	k.hello();   // hello --> 부모 객체의 프로퍼티를 자식 객체의 프로퍼티로 사용하는 것이 가능하다는 것을 보여준다! 
	k.where();   // I'm from Seoul!

	console.log(k instanceof Korean);  // true
	console.log(k instanceof Person);  // true
	console.log(k instanceof Object);  // true
	// 위의 3줄 모두 true가 나온 이유 설명: 1. Korean이란 객체의 인스턴스도 맞고, 2. 그 부모 객체인 Person의 인스턴스도 맞고, 3. 그리고 모든 기초 객체인 Object의 인스턴스도 맞기 때문이다. 
	// 이런 구조가 바로 "프로토타입 체인"이다. 가장 가까운 객체는 Korean이고, 그 다음으로는 Person 그리고 Object이다. 
```

<br>
<br>

> 객체 리터럴 
- `객체 리터럴`이란? 
	- 객체를 <u>function 키워드 없이</u> 보다 간략하게 생성할 수 있다.
```javascript
	// 객체 리터럴 - 기본 문법 
	const a = {}; 

	console.log(a, typeof a);   // {} 'object'

	// e.g.1
	const b = {
		name: 'Mark', 
		age: 37,
		region: 'Seoul'
	};

	console.log(b, typeof b);   // { name: 'Mark', age: 37, region: 'Seoul' } 'object'


	// e.g.2
	const c = {
		name: 'Mark', 
		hello1() {
			console.log('hello1', this.name);
		},
		hello2: function() {
			console.log('hello2', this.name);
		}, 
		hello3: () => {
			console.log('hello3', this.name);
		}
	};

	c.hello1();
	/*  hello1 Mark	*/
	c.hello2();
	/*  hello2 Mark	*/
	c.hello3();
	/*  hello3 undefined
	설명: 화살표 함수는 this 가 바인딩 되지 앉기 때문에 위의 hello1과 hello2과는 다르게 this.name에 할당된 값이 출력되는 것이 아니라 undefined가 출력되는 것이다. */
```
<!-- - ES6부터 도입된 객체 리터럴 방식을 사용하면 아래와 같은 기능 가능; 
	- <u>첫째</u>, 프로퍼티 key에 계산식 사용 가능 
	- <u>둘째</u>, 변수만으로 프로퍼티/메서드 생성 가능
	- <u>셋째</u>, 메서드 생성 방식 간소화 가능 
https://curryyou.tistory.com/191

https://velog.io/@jimmyjoo/자바스크립트-객체리터럴 


미완성

-->
<!-- https://meetup.toast.com/posts/104 -->
<br>
<br>

> 표준 내장 객체 
- 표준 내장 객체란 객체가 이미 런타임 환경에 만들어져 있는 객체들을 의미한다.  
더 쉽게 얘기하자면, `표준 내장 객체(Standard Built-in Object)`는 자바스크립트가 기본적으로 가지고 있는 객체들을 의미한다. 
- 자바스크립트는 기본적으로 여러 객체들을 제공한다. 아래와 같이;
	- Object
	- Function
	- Array
	- String
	- Boolean
	- Number
	- Math
	- Date
	- RegExp
- 대표적인 표준 내장 객체인 Array를 예시로 하여 좀 더 이해해보자;
```javascript
	// 표준 내장 객체: Array
	const a = new Array('red', 'black', 'white');    // new 생성자 함수로 Array라는/ Array() 생성자 함수로 배열을 생성하는 방법

	console.log(a, typeof a);  // 출력 결과: [ 'red', 'black', 'white' ]  "object"  --> a라는 변수에 할당한 배열은 "object"라고 출력이 된다. 즉, 이것또한 객체라는 의미이다.
	console.log(a instanceof Array);  // 출력 결과: true
	console.log(a instanceof Object);  // 출력 결과: true
	
 
	const b = ['red', 'green', 'yellow'];    // 배열 리터럴 대괄호([])를 사용하여 만드는 방법 
	

	console.log(b, typeof b);  // 출력 결과: [ 'red', 'black', 'white' ] "object"
	console.log(b instanceof Array);  // 출력 결과: true
	console.log(b instanceof Object);  // 출력 결과: true  (cf. 프로토타입 체인으로 연결되어 있으니까~)
	console.log(b.slice(0, 1));     // 출력 결과: ['red']
	console.log(Array.prototype.slice, Object.prototype.slice);     // 출력 결과: [Function: slice] undefined  --> 앞에 배열의 프로토타입에는 slice가 있는데, 뒤에 Object의 프로토타입에는 slice가 define 되지 않았다고 하는 이유는,프로토타입 체인 상 Object에 있는 것이 아니라, Object를 프로토타입 체인으로 받아온 Array가 따로 추가한 함수이기 때문이다.
```



```javascript
```
```javascript
```
```javascript
```
---
```javascript
```
---
<details>
<summary>CLICK ME!</summary>

- cf. 
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
	- https://meetup.toast.com/posts/104 
	- https://velog.io/@jimmyjoo/자바스크립트-객체리터럴
	- https://curryyou.tistory.com/191
	- https://ko.javascript.info/constructor-new
	- https://gent.tistory.com/294
	-
	-
	-
	-
	-
	-


</details>


---