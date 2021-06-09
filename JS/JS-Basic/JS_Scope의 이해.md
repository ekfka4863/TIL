---
date: 2021-05-04-Tuesday
---

# scope의 이해 
- `scope`란 우리가 변수 혹은 함수를 선언하게 될 때, 해당 변수 또는 함수가 어디서부터 어디까지 유효한지에 대한 범위를 의미한다. 
- `scope`는 총 3 가지 종류이다;
	- `Global scope(전역)`: 코드의 모든 범위에서 사용 가능 
	- `Function scope`: 특정 함수 내부에서만 사용이 가능
	- `Block scope`: if-/for-/switch문 같은 것을 작성할 때 중괄호 {}로 코드를 감싸게 되는데, 그렇게 감싸진 블록 내부에서만 사용이 가능

<br>
<br>

## scope 이해하기 
- 예시를 통해 이해해보자; 
```javascript
	// 글로벌 스코프
	const value = 'hello';

	function myFunction() {
		console.log('myFunction: ');
		console.log(value);            
	}


	// 함수형 스코프 
	function otherFunction() {
		console.log('otherFunction: ');
		const value = 'bye!';
		console.log(value);
	}


	// 결과:
	myFunction();
	// myFunction: 
	// hello
	otherFunction();
	// otherFunction: 
	// bye!
	console.log('Global scope: ');
	console.log(value);
	// Global scope: 
	// hello
```
- 다른 예시; 
```javascript
	// 
	const value = 'hello';

	function myFunction() {
		const value = 'bye!';
		const anotherValue = 'world';

		function functionInAFunction() {
			console.log('functionInAFunction: ');
			console.log(value);
			console.log(anotherValue);
		}
		functionInAFunction();      // 호출 (cf. 만약 호출 안하면 함수 안의 함수에서 console.log한 부분은 출력 되지 않는다!)
	}

	myFunction();
	// functionInAFunction: 
	// bye!
	// world
	console.log('Global scope: ');
	// Global scope: 
	console.log(value);
	// hello
```
- 다음 예시에서는 `블록 스코프`에 대해서 알아보자;
```javascript
	const value = 'hello';   

	function myFunction() {
		const value = 'bye!';    
		if (true) {           // cf. if문이긴 하지만 조건이 true니까 무조건 실행되는 if문이다.  
			const value = 'world';  // 블록 스코프 
			console.log('block scope: ');  
			console.log(value);
		}
		console.log('function scope: ');
		console.log(value);
	}

	// 결과: 
	myFunction();    
	// block scope: 
	// world
	// function scope: 
	// bye!
	console.log('global scope: ');
	// global scope: 
	console.log(value);
	// hello


	// 해석: 
	/* 위의 (if문의) 블록 스코프를 보면 알 수 있듯이, const 로 선언한 값은 Block Scope 로 선언이 된다. 
	따라서, if 문 같은 블록 내에서 새로운 변수/상수를 선언하게 된다면, 해당 블록 내부에서만 사용이 가능하고, 
	또 블록 스코프기 때문에 블록 밖의 범위에서 똑같은 이름을 가진 값이 있다고 해도 영향을 주지 않는다. */

	// 여기서 잠깐!
	// 우리는 const와 let 말고도 var 라는 것으로 변수와 상수를 선언할 수 있다는 것을 알고 있다. 
	// var로 변수와 상수를 선언했을 경우 약간 다르게 동작하는데 이에 대해 알아보자! 
```
- `var` 키워드로 변수를 선언하면 블록 단위가 아니라 함수 스코프로 설정된다는 점을 유의!   
아래와 같이; 
```javascript
	var value = 'hello!';

	function myFunction() {
		var value = 'bye!';
		if (true) {
			var value = 'world';        // 원래는 블록 스코프 -> var 때문에 함수 스코프로 설정됨.
			console.log('block scope: ');
			console.log(value);
		}
		console.log('function scope: ');
		console.log(value);
	}


	// 결과: 
	myFunction();
	//block scope: 
	// world
	// function scope: 
	// world
	console.log('global scope: ');
	// global scope: 
	console.log(value);
	// hello
``` 

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://learnjs.vlpt.us/useful/08-scope.html
	- https://medium.com/@yeon22/javascript-%EC%8A%A4%EC%BD%94%ED%94%84-scope-%EB%9E%80-bc761cba1023
	- https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e

</details>

---

