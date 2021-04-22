---
date: 2021-04-17-Saturday
---

# 조건문 
- 조건문이란 어떤 조건(표현식)이 참인지 거짓인지에 따라 해당 코드 블럭 ~~(cf. 코드 블록: 중괄호를 사용하여 한 개 이상의 statement를 작성한 코드 덩어리)~~ 이 실행되는지에 대한 여부를 결정하는 구문을 의미한다. 
- 조건문을 활용하면 조건문에 따라 특정 코드를 실행하게 만들 수도, 실행하지 못하게 만들 수도 있다. 
- 자바스크립트의 조건문에는 대표적으로 `if`, `switch`가 있다.    
<!-- 그리고 if 조건문을 단축 형태로 사용할 수 있게끔 하는 `삼항 (조건) 연산자`라는 개념이 있다.   -->
먼저 `if`부터 살펴보자! 

<br>

---
## if 조건문

<br>
<br>

> `if 조건문`의 기본 문법

- `if 조건문`의 기본 문법은 아래와 같다;
```javascript
	if (표현식)     // if 조건문의 표현식은 소괄호 ()로 둘러싼 형태고, 이 조건문의 결과값은 항상 불린형 값으로 반환되어야 한다. 
		명령문
```
- 그래서 위의 표현식이 `true`면 실행되고, `false`면 실행되지 않는다;
```javascript
	if (true) {
		console.log('항상 실행');
	}
	if (false) {
		console.log('항상 실행되지 않음');
	}
```
- 이때, 블록에 코드가 한줄이면, 중괄호 {}는 생략이 가능하다; 
```javascript
	if (true) console.log('항상 실행');
```
- 그렇다면 언제 표현식이 참이고 언제 거짓으로 평가될까? 
```javascript
	// 자바스크립트에서 어떤 자료형이든 참 또는 거짓으로 평가된다 

	// Falsy값 - 불린형은 아니지만 값으로 평가되어 질 때 Falsy 한 값으로 평가되어 지는 것들...
	false, 0 , '', "", null, undefined, NaN

	// Truethy값 - 불린형은 아니지만 값으로 평가되어 질 때 Truethy 한 값으로 평가되어 지는 것들... (Falsy값의 반대)
	true, 
	37, -10,     // 0이 아닌 모든 숫자
	'Mark', "Charlotte", // 빈 문자열이 아니면 됨!
	{}, [] // null, undefined, 또는 NaN이 아닌 모든 값들
```

<br>
<br>

> if 조건문이 참이 아닌 거짓일 때, `else {}`
- if 조건문 만으로 프로그램을 만들기는 너무 불편하다.   
그래서 생겨난 것이 `else {}`. `else`와 `중괄호 {}`를 사용하면 if 조건 표현식이 참이 아닐 때 추가 실행되는 조건문/코드 블록을 설정할 수 있다.  
예시를 통해 이해해보자;  
```javascript
	const number1 = 37;      // 상수 number를 선언하고 37이란 값을 할당한다

	if (number1 > 0) {       // if 조건문은 true 이기 때문에 'number은 0보다 크다'가 출력될 것이다
		console.log('number은 0보다 크다');
	} else {
		console.log('number은 0보다 크지 않다');
	}

	// 하지만 만약 ... 

	const number2 = -37; 

	if (number2 > 0) {       // if 조건문은 false 이기 때문에 else {} 내의 코드가 실행된다
		console.log('number은 0보다 크다');
	} else {
		console.log('number은 0보다 크지 않다');   // 이 부분이 출력된다는 점! 
	}

	// 이때, 블록 안 문장이 하나일 경우, 중괄호 없이 사용 가능! 
	if (number2 > 0) console.log('number은 0보다 크다');
	else console.log('number은 0보다 크지 않다');
```

<br>
<br>

> if 조건문과 else {} 사이에 오는 `else if {}`
- if 조건문과 else {} 말고 또 하나가 더 있다!   
바로 `else if {}`다. else if {}는 if 조건문 외에 추가적으로 조건식을 추가하고 싶을 때, if 조건문 뒤에 덧붙여 사용한다. 예제를 통해 살펴보자;
```javascript
	const number = 15;     

	if (number % 3 === 0) {     
		console.log('number은 3의 배수입니다.');
	} else if (number % 5 === 0) {
		console.log('number은 5의 배수입니다.');
	} else {
		console.log('number은 3의 배수도 아니고 5의 배수도 아닙니다.');
	}

	// 그런데 이때 만약 number 가 3의 배수면서, 5의 배수라면...?
	// 위와 같이 코드를 작성하면 첫번째 if 조건문에서 참으로 평가되어 지기 때문에 'number은 3의 배수입니다.'라고 출력될 것이다....
	// 그래서 이러너 문제를 해결하기 위해서 우리는 가장 '좁은 영역'을 갖고 있는 아이를 걸러낼 수 있게 조건의 가장 첫번째 부분에 위치시킨다! 아래와 같이; 
	if (number % 3 === 0 && number % 5 === 0) {   // 15의 배수를 걸러낼 수 있는 조건식!
		console.log('number은 15의 배수입니다.');
	} else if (number % 3 === 0) {
		console.log('number은 3의 배수입니다.');
	} else if (number % 5 === 0) {
		console.log('number은 5의 배수입니다.');
	} else {
		console.log('number은 3의 배수도 아니고 5의 배수도 아닙니다.');
	}

	// 더 나아가서 이를 조금 더 이쁘게 작성해 보자! 
	// number % 3 === 0 과 number % 5 === 0의 값은 여러번 반복이 되니, 변수나 상수에 넣어준다.
	const multipleOfThree = (number % 3 === 0);    // ()안에 있는 식은 불린형을 평가하는 식이다. 식이 참이라면 true, 거짓이면 false를 갖는다
	const multipleOfFive = (number % 5 === 0);

	// 그래서 위의 상수로 정리하면 아래와 같이 된다;
	if (multipleOfThree && multipleOfFive) {   
		console.log('number은 15의 배수입니다.');
	} else if (multipleOfThree) {
		console.log('number은 3의 배수입니다.');
	} else if (multipleOfFive) {
		console.log('number은 5의 배수입니다.');
	} else {
		console.log('number은 3의 배수도 아니고 5의 배수도 아닙니다.');
	}

	// 플러스로 중첩을 이용해서 조금 더 논리적인 흐름에 맞게 코드를 작성할 수도 있다; 
	if (multipleOfThree && multipleOfFive) {  // 15의 배수이냐? 참?
		console.log('number은 15의 배수입니다.');
	} else {                                  // 15의 배수가 아닌 경우중... 3의 배수인 경우/5의 배수인 경우/ 3의 배수도 5의 배수도 아닌 경우... 로 나뉠 수 있다는 것을 중첩을 사용하여 조금 더 논리적인 흐름으로 작성할 수 있다. 팁! : )           
		if (multipleOfThree) {
			console.log('number은 3의 배수입니다.');
		} else if (multipleOfFive) {
			console.log('number은 5의 배수입니다.');
		} else {
			console.log('number은 3의 배수도 아니고 5의 배수도 아닙니다.');
		}
	}
```

---
## switch 조건문

<br>
<br>

> `switch 조건문`의 기본 문법
- if 조건문은 참인지 거짓인지 평가되어질 표현식이 많은 경우 중첩이 여러번 되어 복잡하게 보일 수 있다. 그래서 경우에 따라서는 if-else 조건문을 반복 사용하는 것보다 switch 조건문을 사용하면 정돈된 코드를 만들 수 있게 된다.   
또한 if-else 문은 논리적으로 참 또는 거짓으로 실행할 코드 블록을 결정하지만, switch 문은 논리적으로 참, 거짓보다는 **다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용**된다. 
- `switch 조건문`의 기본 문법은 아래와 같다;
```javascript
	switch(condition) {    // condition의 값이 
		case value1:         // value1이면 
			statement1         // statement1을 
			break;
		case value2:         // value2면
			statement2         // statement2를 
			break; 
		... 
		default:             // 그 어느 것도 아니어도 default가 적용되어
			statement3         // statement3을 실행한다. (단, default는 그 어떤 case에 안맞더라도 실행되는 것이 정해진 아이기 때문에, 항상 실행된다는 점 유의!)
	}     
	// 이때. 만약 조건에 맞는 case 문을 만나 break가 실행되면 그 이후의 비교는 하지 않으며, switch문을 종료 시킨다
	// default문은 switch문의 가장 마지막에 위치하므로 default 문의 실행이 종료되면 switch문을 빠져나간다. 따라서 여기서는 break를 생략하는 것이 일반적이다                  
```
- 위의 기본 문법에 나와있던 것처럼 case문에 `break;`를 안 적어주면 해당 case문에서 statement가 실행된 뒤에 switch문이 종료되지 않는다. 아래와 같이;  
```javascript
	let n = 5; 

	switch (n % 5) {
		case 0: {
			console.log('5의 배수입니다.');
		}
		default: 
			console.log('n');
	}
	// 결과: 
	//     5의 배수입니다. 
	//     5

	// 그래서 만약 해당 블럭이 실행된 후 다음 블럭으로 넘어가지 않고 switch 문을 나가고 싶다면, case문 안에서 break;를 실행해야한다. 아래와 같이;
	switch (n % 5) {
		case 0: {
			console.log('5의 배수입니다.');
			break;
		}
		default: 
			console.log('n');
	}
	// 결과: 
	//     5의 배수입니다. 
```
<!-- https://velog.io/@grinding_hannah/Switch-조건문-사용하기 -->
<!-- https://dasima.xyz/javascript-switch/ -->

<br>

---
## 삼항 (조건) 연산자 (Ternary Operator)
- if문과 switch문을 작성하다보면 코드의 길이가 길어질 때가 있다. 이런 길어진 코드를 보다 단축된 형태로 작성할 수 있게 해주는 것이 바로 이 `삼항 연산자`이다.   
- 삼항 연산자의 기본 문법은 아래와 같다;  
```javascript
	(참이나 거짓으로 평가될 표현식/조건) ? 조건이 참일 때 실행하는 표현식 : 거짓일 때 실행하는 표현식
	// 위와 같이 항이 3개라서 붙은 이름이다. 세개의 항 주 하나에 조건문이 들어가기 때문에 정확한/또 다른 명칭은 "조건부 삼항 연산자".
	// 조건문과 실행문 사이를 구분하는 기호는 물음표(?)를 사용한다
	// 조건문이 참일 때 실행하는 문과 거짓일 때 실행하는 문을 구분하는 기호로는 클론(:)을 사용한다
	// 삼항 연산자는 if문과 기능은 비슷하지만, if 조건문으로 여러 줄의 코드를 작성해야 할 것을 삼항 연산자를 사용하여 한줄로 끝낼 수 있다. 
```
- 예시를 통해 좀 더 익혀보자;
```javascript
	let number = 5;
 
	console.log(number % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.');

	// 표현식의 결과를 변수에 할당할 수도 있다;
	const message = number % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.';
	console.log(message);
```

---

<details>
<summary>CLICK ME!</summary>

- cf.  
	- 초보자를 위한 자바스크립트 200제 p. 45 ~ 53
	- https://hokeydokey.tistory.com/6
	- https://medium.com/@soyoung823/switch-문-삼항연산자-256d8b37ec7a
	- https://lovefor-you.tistory.com/16
	- https://velog.io/@daybreak/Javascript-삼항연산자
	- https://velog.io/@grinding_hannah/Switch-조건문-사용하기
	- https://dasima.xyz/javascript-switch/
</details>

---