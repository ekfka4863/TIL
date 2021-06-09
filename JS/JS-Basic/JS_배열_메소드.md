---
date: 2021-04-29-Thursday
---

# 배열(Array)의 다양한 메소드들 
- 배열을 다룰 때 알고 있으면 아주 유용하게 사용되는 다양한 내장함수들에 대해서 알아보도록 하자. 

<br>
<br>

## .isArray()
- `Array.isArray()` 메서드는 인자가 배열인지 판별할 때 사용된다. 
```javascript
	Array.isArray({a : 1, b : 2});    // false 
	Array.isArray([1, 2, 3]);         // true
```

<br>
<br>

## .forEach()
- `Array.forEach()` 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.
- `Array.forEach()` 메서드는 기존에 우리가 배웠던 for 문을 대체 시킬 수 있다. 
- 만약, 배열 안에 있는 모든 원소들을 모두 출력해야 한다면 for문을 사용하여 아래와 같이 구현할 수 있다;  
```javascript
	const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

	// 기존의 for문 
	for (let i = 0; i < superheroes.length; i++) {
		console.log(superheroes[i]);
	} 

	// 기존의 함수 생성 방법 + .forEach() 메서드 사용
	function print(hero) {
		console.log(hero);
	}

	superheroes.forEach(print);

	// 위의 방법을 아래와 같이도 할 수 있다;
	superheroes.forEach(function(hero) {
		console.log(hero);
	})

	// 여기서 더 나아가서 이전에 배운 화살표 함수를 활용하면 더 클린한 코딩이 가능해진다;
	superheroes.forEach( (hero) => {
		console.log(hero);     // 콜백 함수
	})
```

<br>
<br>

## .map()
- `Array.map()` 메서드는 배열 안의 요소를 **변환**할 때 사용하는 메서드다. 
- 배열 내의 모든 원소에 대하여 제공된 함수를 호출하고, 그 <u>주어진 함수를 호출한 결과를 모아서 새로운 배열을 리턴</u>하는 메소드다. 
```javascript
	const array_numbers = [1, 3, 4, 7, 10, 34];

	const map1 = array_numbers.map(x => x * 2);

	console.log(map1);    	// [2, 6, 8, 14, 20, 68]
```
- 강사님 예시; 
```javascript
	// 강사님 예시 1 
	const array = [ 1, 2, 3, 4, 5, 6, 7, 8];

	const squared = [];
	for (i = 0; i < array.length; i++) {
		squared.push(array[i] * array[i]);
	}

	console.log(squared);    // [1, 4, 9, 16, 25, 36, 49, 64]


	// 강사님 예시 2
	const array_numbers = [ 1, 2, 3, 4, 5, 6, 7, 8];
	
	const squared = [];
	
	array_numbers.forEach(n => {
		squared.push(n * n);
	});

	console.log(squared);    // [1, 4, 9, 16, 25, 36, 49, 64]

	
	// 강사님 예시 1, 2를 통해서도 같은 결과를 얻어낼 수 있지만, 
	// .map()를 사용하면 더 깔끔한 코딩이 가능하다. 
	const array_numbers = [ 1, 2, 3, 4, 5, 6, 7, 8];
	
	const squared = array_numbers.map(n => n * n);

	console.log(squared);    // [1, 4, 9, 16, 25, 36, 49, 64]


	// .map()을 사용한 또 다른 예시 
	const items = [
		{
			id: 1,
			text: 'hello'
		}, 
		{
			id: 2,
			text: 'bye'
		}
	];

	const texts = items.map(item => item.text);
	console.log(texts);        // [ 'hello', 'bye' ]

	const ids = items.map(item => item.id);
	console.log(ids);          // [ 1, 2 ]
```

<br>
<br>

## .includes()
- `.includes()`는 배열에 특정 원소가 포함돼 있는지에 대한 여부를 확인해서 `true` / `false`값으로 리턴해주는 메서드이다. 
```javascript
	const array_numbers = [1, 2, 3, 4, 5, 6, 7];

	array_numbers.includes(3);    // true
	array_numbers.includes(10);   // false 
	array_numbers.includes(7);    // ture
```

<br>
<br>

## .indexOf(), .lastIndexOf()
- `.indexOf()` 메서드는 원하는 항목이 포함돼 있는지 여부를 확인해 있다면 해당 항목이 몇번째에 위치하고 있는지, 그 `인덱스`를 찾아주는 함수다.  
만약 없다면, `-1`을 리턴한다. 아래와 같이; 
```javascript
	const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

	// 위와 같은 superheroes라는 배열이 있다고 하고, '토르'가 몇번째 항목인지 알고 싶다고 가정해보자. 
	// 그렇다면 아래와 같이 .indexOf()라는 메서드를 사용할 수 있다...
	const index = superheroes.indexOf('토르');
	console.log(index);     // 2 
	// 즉, 토르는 superheroes라는 배열에서 인덱스가 2라는 것을 알 수 있다. 
	// cf. index는 0부터 시작한다. 

	const index_none = superheroes.indexOf('헐크');
	console.log(index_none);  // -1
```
- `.lastIndexOf()`는 방금 살펴본 `.indexOf()`와 똑같은 기능을 하지만 **반대 순서로 탐색**한다. 아래와 같이; 
```javascript
	const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

	console.log(animals.lastIndexOf('Dodo'));   // 3
	console.log(animals.IndexOf('Dodo'));       // 0
	// 즉, .lastIndexOf()를 사용하면 뒤에서 부터 첫번째로 발견되는 요소의 인덱스를 반환하고, 
	// .indexOf()를 사용하면 앞에서 부터 최초로 발견되는 요소의 인덱스를 반환한다.
```

<br>
<br>

## .findIndex(), .find() 
- 만약 배열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 찾고자하는 항목이 몇번째 원소인지 알아내려면 위에서 살펴본 `.indexOf()`를 사용하면 된다. 하지만, 배열 안에 있는 것이 객체이거나, 배열이라면 .indexOf()가 아닌 `.findIndex()` 메서드를 사용해야 한다. 
- ~~따라서~~ `.findIndex()` 메서드는 **주어진 <u>판별 함수</u>를 만족하는** 배열의 첫 번째 요소에 대한 **인덱스**를 반환한다.   
만약, 만족하는 요소가 없으면 `-1`을 반환한다. 아래와 같이;  
```javascript
	const array_numbers = [5, 12, 8, 130, 44];

	const isLargerThan13 = (element) => element > 13;  // 한줄이라 {} 생략됨! 

	console.log(array_numbers.findIndex(isLargerThan13));   // 3
	// 즉, 배열 array_numbers에서 첫번째로 찾을 수 있는 13보다 큰 수인 요소의 인덱스가 3인 것이다. 

	const isLargerThan300 = (element) => element > 300; 
	console.log(array_numbers.findIndex(isLargerThan300));   // -1
	// 즉, 배열 array_numbers에서 300보다 큰 수인 요소는 없기 때문에 -1을 반환한다.
```
- `.find()` 함수는 위에서 살펴본 `.findIndex()`랑 비슷한데, 찾아낸 값이 몇번째인지, 그 인덱스를 알아내는 것이 <u>아니라</u>, 찾아낸 값 자체를 반환한다는 차이점이 있다.    
```javascript
	const todos = [
		{
			id: 1,
			text: '자바스크립트 입문',
			done: true
		},
		{
			id: 2,
			text: '함수 배우기',
			done: true
		},
		{
			id: 3,
			text: '객체와 배열 배우기',
			done: true
		},
		{
			id: 4,
			text: '배열 내장함수 배우기',
			done: false
		}
	];

	const todo = todos.find( todo => todo.id === 3);
	// 나름의 해석: todo를 정의할건데, 그건 todos라는 객체에 .find()라는 메서드를 적용할거고... 그렇게 찾을거야~ (todo)에 관하여 화살표 뒤처럼 정의해줘~... => {todo.id === 3;}... 즉, todo의 id가 3인 것의 값을 반환해줘~ 
	console.log(todo);  // { id: 3, text: '객체와 배열 배우기', done: true }
	// 즉, .findIndex()와는 다르게 인덱스가 아닌 해당 값 자체를 반환하는 것을 확인할 수 있다.
```

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrays
	- http://blog.302chanwoo.com/2017/08/javascript-array-method/
	- https://takeuu.tistory.com/102
	- https://jess2.xyz/JavaScript/array-methods/
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	- 

</details>

---