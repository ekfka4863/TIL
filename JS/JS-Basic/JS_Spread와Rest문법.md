---
date: 2021-05-04-Tuesday
---

# spread 연산자와 rest (`...`)
오늘은 ES6에서 도입된 `spread`와 `rest 문법`에 대해서 알아보겠다.  
서로 완전히 다른 문법이지만 비슷한 부분이 있어서 헷갈릴 수 있으니 집중해서 살펴보자! 

<br>
<br>

## spread 연산자

- `spread`라는 단어가 가지고 있는 의미는 '펼치다, 퍼뜨리다'이다.   
**spread 문법을 사용하면 객체 혹은 배열을 펼칠수가 있다.** 
```javascript
	// e.g.
	const slime = {
		name: '슬라임',
	}

	const cuteSlime = {
		name: '슬라임',
		attribute: 'cute'
	};

	const purpleCuteSlime = {
		name: '슬라임',
		attribute: 'cute',
		color: 'purple'
	};

	console.log(slime);            // { name: '슬라임' }
	console.log(cuteSlime);        // { name: '슬라임', attribute: 'cute' }
	console.log(purpleCuteSlime);  // { name: '슬라임', attribute: 'cute', color: 'purple' }

	
	// 위에서 처럼... 만약 기존에 만들었던 객체를 참고해서 새로운 객체를 만들고 싶을 때...
	// 그때 사용 할 수 있는 문법이 바로 'spread 문법'이다. 
	// e.g. 
	const slime = {
		name: '슬라임',
	}

	const cuteSlime = {
		...slime,
		attribute: 'cute'
	};

	const purpleCuteSlime = {
		...cuteSlime,
		color: 'purple'
	};

	console.log(slime);            // { name: '슬라임' }
	console.log(cuteSlime);        // { name: '슬라임', attribute: 'cute' }
	console.log(purpleCuteSlime);  // { name: '슬라임', attribute: 'cute', color: 'purple' }
	
	// 다시, 'spread 연산자'는 기존 객체를 '복사'하고, 복사한 객체에다가 다른 추가적인 값을 넣어서 다른 객체를 생성할 때 사용할 수 있다. 
```
- 그렇다면 여기서 질문!    
만약에 purpleCuteSlime을 spread 연산자로 복사를 해서 새로운 객체를 만들고 싶기는 한데, 만약 객체의 color 값은 'green'이었으면 좋겠을 때는 어떻게 해야할까? 
```javascript
	const greenCuteSlime = {
		...purpleCuteSlime,
		color: 'green',
	}

	console.log(greenCuteSlime);   // { name: '슬라임', attribute: 'cute', color: 'green' }
	
	// 결과: 기존의 color값을 덮어쓰게 된다. color: 'green', 이 코드의 뒤 쪽에 적혀있기 때문이다. 
	// 만약 아래와 같이  color: 'green',를 먼저 작성하면 color는 여전히 'purple'로 남게된다. 

	const greenCuteSlime = {
		color: 'green',
		...purpleCuteSlime,
	}

	console.log(greenCuteSlime);   // { name: '슬라임', attribute: 'cute', color: 'purple' }
```
- `spread 문법`은 객체 뿐만이 아니라 배열에서도 사용가능하다. 
```javascript
	const animals = ['개', '고양이', '참새'];
	const anotherAnimals = [...animals, '비둘기'];
	
	console.log(animals);          // [ '개', '고양이', '참새' ]
	console.log(anotherAnimals);   // [ '개', '고양이', '참새', '비둘기' ]

	// 즉, spread 문법을 사용하여 animals 라는 배열을 복사해서 '비둘기'를 추가한 anotherAnimals를 생성할 수 있다.
	// 위의 const anotherAnimals = [...animals, '비둘기'];는  결국 아래의 코드와 같은 말이다; 
	const anotherAnimals = animals.concat('비둘기');
	// cf. `.concat()`은 인자로 주어진 여러개의 배열이나 값들을 기존 배열에 합쳐서 새 배열(/배열의 사본)을 반환하는 메서드이다. 
	console.log(anotherAnimals);   // [ '개', '고양이', '참새', '비둘기' ]
	// 하지만, .concat()을 사용하는 것보다 spread 문법을 사용하면 보다 직관적으로 이해할 수 있다는 장점이 있다.
```
- 또한 spread 연산자를 여러번 사용할 수도 있다. 
```javascript
	const numbers = [1, 2, 3, 4, 5];

	const spreadNumbers = [...numbers, 1000, ...numbers];

	console.log(spreadNumbers);   // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
```

<br>
<br>

## rest 문법 
- rest의 생김새는 `...`을 사용한다는 점에서 spread 문법과 유사하지만, 하는 역할은 매우 다르다.
- rest는 spread 문법과 역할이 반대라고 할 수도 있는데, spread 문법은 "펼치는 역할"이라면 rest는 펼쳐져 있는 것을 "(다시) 모으는 역할"을 한다.
- rest는 <u>1. 객체</u>, <u>2. 배열</u>, <u>3. 함수의 파라미터</u> 에서 사용할 수 있다. 

<br>

> 1. 객체에서의 rest
- rest는 객체와 배열에서 사용할 때는 비구조화 할당 문법과 함께 사용된다.  
아래와 같이; 
```javascript
	// 객체에서의 rest
	// e.g.
	const purpleCuteSlime = {
		name: '슬라임',
		attribute: 'cute',
		color: 'purple'
	};

	// 객체에서 rest 문법을 사용할 때는 비구조화 할당 문법과 함께 사용한다 
	const {color, ...rest} = purpleCuteSlime;
	console.log(color);     // purple
	console.log(rest);      // { name: '슬라임', attribute: 'cute' }
	// 이때, rest 라는 키워드를 꼭 사용해야 할 필요는 없다... 다른 이름을 사용해도 무방!
```

<br>

> 2. 배열에서의 rest
- 배열에서 rest 문법을 사용할 때도 ~~객체에서와 마찬가지로~~ 비구조 할당 문법과 함께 사용된다.  
아래와 같이;  
```javascript
	// 배열에서의 rest
	// e.g.
	const numbers = [0, 1, 2, 3, 4, 5, 6];

	const [one, ...rest] = numbers;

	console.log(one);       // 0
	console.log(...rest);   // [1, 2, 3, 4, 5, 6]

	// e.g.2
	const numbers = [0, 1, 2, 3, 4, 5, 6];

	const [one, two, three, ...rest] = numbers;
	console.log(one);       // 0 
	console.log(two);       // 1
	console.log(three);     // 2
	console.log(...rest);   // [3, 4, 5, 6]

	// 즉, 배열에서 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내는 것이 가능하고, 나머지 값은 rest 안에 넣을 수 있다. 
	// 이때, 객체에서 rest 문법을 사용할 때는, 비구조화 할당이 객체의 key 값에 따라 할당되고 값(value)만 추출됐었다는 점에 유의! 
	// 객체와는 다르게 배열에서 rest 문법을 사용할 때는 key값이 아닌 배열의 앞부분부터 순서대로 추출된다는 점에 유의하자!  
	// cf. https://velog.io/@realryankim/TIL-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9 
```
- 반면, 배열에서 rest 문법과 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내려고 할 때, ~~아래와 같이~~ ...rest를 먼저 배치하는 것은 불가능하다는 점을 유의하자; 
 ```javascript
	const numbers = [0, 1, 2, 3, 4, 5, 6];

	const [..rest, last] = numbers;   // Uncaught SyntaxError: Rest element must be last element
	// 즉, 배열에서의 rest는 맨 마지막에 위치하여야 한다! 
```

<br>

> 3. 함수 파라미터에서의 rest
```javascript
	// e.g. 파라미터로 넣은 모든 값들은 합해주는 함수를 만들어보자.
	// 우리는 parameter가 몇개가 들어올지 모르기 때문에 만들기가 쪼매 그럼...;;
	// 만들어도 아래와 같이 parameter를 임의로 정해서 만든 함수 형태가 최선일듯! 
	function addAllParams(a, b, c, d, e, f) {
		let sum = 0;
		if (a) sum += a;
		if (b) sum += b;
		if (c) sum += c;
		if (d) sum += d;
		if (e) sum += e;
		if (f) sum += f;
		return sum;
	}

	const result = addAllParams(1, 2, 3, 4, 5, 6); 
	console.log(result);       // 21
	const result_2 = addAllParams(1, 2, 3, 4, 5, 6, 7); 
	console.log(result_2);       // 21
	const result_3 = addAllParams(1, 2, 3, 4, 5, 6, 7, 8); 
	console.log(result_3);       // 21
	// 즉, parameter가 a부터 f까지 총 6갠데 그 갯수 이상으로 parameter를 받으면 계산에 고려되지 않는다는 점이 문제! 

	// Solution: 이때, 몇개일지 모르는 parameter들을 ...rest로 받아오면, 
	// ...rest로 들어오는 값들은 "하나의 배열"로 받아오게 된다!!
	// 그래서 아래와 같이 작성 가능...
 	function addAllParams(...rest) {
		return rest;
	}
	
	const result = addAllParams(1, 2, 3, 4, 5, 6); 
	console.log(result);       // [1, 2, 3, 4, 5, 6]
	const result_2 = addAllParams(1, 2, 3, 4, 5, 6, 7, 8); 
	console.log(result_2);       // [1, 2, 3, 4, 5, 6, 7, 8]



	// Solution - 1: 배열을 모두 더하는 함수를 만들려면 아래와 같이 for문을 사용해도 되고... 
	function addAllParams(...rest) {
		let sum = 0; 
		for (let i = 0; i < rest.length; i++) {
			sum += rest[i];
		}
		return sum;
	}
	const result = addAllParams(1, 2, 3, 4, 5, 6); 
	console.log(result);       // 21
	const result_2 = addAllParams(1, 2, 3, 4, 5, 6, 7, 8); 
	console.log(result_2);     // 36



	// Solution - 2: 배열의 내장함수인 .reduce() 를 사용해도 됨!
	function addAllParams(...rest) {
		return rest.reduce( (acc, current) => acc + current, 0);
	}
	const result = addAllParams(1, 2, 3, 4, 5, 6); 
	console.log(result);       // 21
	const result_2 = addAllParams(1, 2, 3, 4, 5, 6, 7, 8); 
	console.log(result_2);     // 36
```

<br>
<br>

## 함수 인자에서의 spread
- `parameter` **VS** `인자`의 차이점?
	- 파라미터: 함수에서 받아오는 값
	- 인자: 함수를 사용할 때 넣어주는 값
```javascript
	// e.g. 
	function subtract(x, y) {        // x, y는 파라미터 
		return x - y;
	}
	const result = subtract(1, 2);   // 1, 2 는 인자 

	console.log(result);             // -1
```
- 위의 예시를 응용해서 spread 문법으로 고쳐보자; 
```javascript
	// e.g. 
	function subtract(x, y) {      
		return x - y;
	}

	const numbers = [1, 2];
	const result = subtract(numbers[0], numbers[1]);
	console.log(result);            // -1

	// 이를 spread 문법으로 고치면... 
	function subtract(x, y) {      
		return x - y;
	}

	const numbers = [1, 2];
	const result = subtract(...numbers);
	console.log(result);            // -1
```
- 다른 응용 예시를 살펴보자; 
```javascript
	function addAllParams(...rest) {
		return rest.reduce( (acc, current) => acc + current, 0);
	}

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8];  
	console.log(addAllParams(...numbers));     // 36

	// 해석: 함수 addAllParams는 parameter로 ...rest를 받는데, rest는 배열이다. 
	// 그리고 마찬가지로 rest로 들어갈 배열 numbers가 있으니, parameter에 바로 배열 numbers를 spread 문법을 활용하여 배열안에 요소들을 펼쳐서 넣어주면 되는 것! 
	// 꼭 알아두자...!! 
```

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://learnjs.vlpt.us/useful/07-spread-and-rest.html
	- https://velog.io/@bch3454/Spread-%EB%AC%B8%EB%B2%95%EC%A0%84%EA%B0%9C%EA%B5%AC%EB%AC%B8
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	- https://medium.com/@shlee1353/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-spread%EC%99%80-rest-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC-f42efa73d3db
	- https://velog.io/@realryankim/TIL-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9
	 
</details>

---