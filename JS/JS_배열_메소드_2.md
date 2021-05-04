---
date: 2021-04-30-Friday
---

# 배열(Array)의 다양한 메소드들 - 2
- `JS_배열_메소드.md` 파일에서 살펴본 배열의 다양한 내장함수들에 대해서 이어서 더 알아보도록 하자.

<br>
<br>
<!-- ## .push(), .pop() 
## .unshift(), .shift()  -->

## .shift(), .pop() 
- `.shift()`는 배열 첫 번째 원소를 배열에서 추출해주는 메서드이다.   
단, 추출하는 과정에서 배열에서 해당 원소는 사라진다.   
(cf. 원본 배열에 변형이 생긴다.)
```javascript
	const numbers = [10, 20, 30, 40];
	const value = numbers.shift();
 
	console.log(value);        // 10
	console.log(numbers);      // [ 20, 30, 40 ]

```
- `.pop()`는 배열 뒷부분의 값을 하나씩 삭제시켜주는 메서드이다.    
(cf. 원본 배열에 변형이 생긴다.)
```javascript
	const numbers = [10, 20, 30, 40];
	const value = numbers.pop();

	console.log(value);        // 40
	console.log(numbers);      // [ 10, 20, 30 ]
```

<br>
<br>

## .unshift(), .push()
- `.unshift()`는 ~~.shift()의 반대 개념의 메서드로~~ 배열 앞부분에 값을 삽입해주는 메서드이다.  
(cf. 원본 배열에 변형이 생긴다.)
```javascript
	const numbers = [10, 20, 30, 40];
	numbers.unshift(5);

	console.log(numbers);          // [5, 10, 20, 30, 40]
```
- `.push()`는 배열 뒷부분에 값을 삽입시켜주는 메서드이다.    
(cf. 원본 배열에 변형이 생긴다.)
```javascript
	const numbers = [10, 20, 30, 40];
	numbers.push(50, 60, 70);

	console.log(numbers);          // [10, 20, 30, 40, 50, 60, 70]
```

<br>
<br>

## .concat() 
- `.concat()`은 인자로 주어진 여러개의 배열이나 값들을 기존 배열에 합쳐서 새 배열(/배열의 사본)을 반환하는 메서드이다. 
```javascript
	const array_1 = [1, 2, 3];
	const array_2 = [4, 5, 6];

	const concated = array_1.concat(array_2);

	console.log(concated);      // [1, 2, 3, 4, 5, 6]
```

<br>
<br>

## .filter() 
- `.filter()` 메서드는 배열의 값들 중 제공된 함수를 통과하여 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만드는 메서드이다. 
<!-- - 배열의 원소 중 제공된 함수를 통과하는 원소를 반환하는 메소드이다.  -->
```javascript
	// 만약 아래의 todos 배열에서 done: false인 값만 "추출/필터링"하고 싶을 때는? 
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

	const taskNotDone = todos.filter( todo => todo.done === false);
	// const taskNotDone = todos.filter( todo => !todo.done);
	console.log(taskNotDone);     
	// [ { id: 4, text: '배열 내장함수 배우기', done: false } ]
	const taskDone = todos.filter( todo => todo.done === true);
	// const taskNotDone = todos.filter( todo => todo.done);
	console.log(taskDone);     
	/* [
		{ id: 1, text: '자바스크립트 입문', done: true },
		{ id: 2, text: '함수 배우기', done: true },
		{ id: 3, text: '객체와 배열 배우기', done: true }
	 ]                                              */
```

<br>
<br>

## .reduce(), .reduceRight() 
- `.reduce()`는 배열의 원소마다 누적 계산값과 함께 함수를 적용해 하나의 값으로 반환한다. 
- `.reduce()`와 `.reduceRight()`는 결과적으로는 같은 기능을 수행하지만, `.reduce()`는 **왼쪽부터**, `.reduceRight()`는 **오른쪽부터** 수행한다. 
- 첫 번쨰 인자로는 '콜백 함수'가 오고, 두 번째 인자는 <u>필수는 아니지만</u> '초깃값/initialValue(Optional)'이 올 수 있다. 
- `.reduce()`와 `.reduceRight()`는 원본 배열을 변형시키지 않는다. 
```javascript
	// 원래는 아래와 같이 긴 코드가... .reduce()를 사용하면 간결해진다; 
	const numbers = [1, 2, 3, 4];
		
	let sum = 0;
	numbers.forEach(n => {
		sum += n; 
	})

	console.log(sum);     // 10

	// 이제 .reduce()와 .reduceRight()를 사용해보자...
	// .reduce() 부터 ... 
	const numbers = [1, 2, 3, 4];

	let sum = numbers.reduce((accumulator, current) => {
		console.log({accumulator, current});
		return accumulator + current;
	}, 0);                             
	/* 출력 결과: 
			{accumulator: 0, current: 1}   -> accumulator는 지금까지 누적된 값이고, 
			{accumulator: 1, current: 2}   -> current는 이제 더해질 값... 
			{accumulator: 3, current: 3}
			{accumulator: 6, current: 4}   */ 
	console.log(numbers);              // [ 1, 2, 3, 4 ]
	console.log(sum);                  // 10



	// .reduceRight()를 사용해보자!
	const numbers = [1, 2, 3, 4];

	let sum = numbers.reduceRight((a, b) => {
		console.log({a, b});
		return a + b;
	}, 90)
	// numbers.reduceRight((a, b) => a + b, 90);   // 100
	/* 출력 결과: 
			{a: 90, b: 4}
		  {a: 94, b: 3}
		  {a: 97, b: 2}
		  {a: 99, b: 1}
	                                   */
	console.log(numbers);             // [ 1, 2, 3, 4 ]
	console.log(sum);                 // 100
```
- `.reduce()`메서드로 "함수에 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내는 것"도 가능하다; 
```javascript
	// cf. JS_Spread와Rest문법.md 참고! 
	function max(...numbers) {
		return numbers.reduce( (acc, current) => (acc > current ?  acc : current) , numbers[0] );
	}

	// const result = max(1, 2, 3, 4, 10, 5, 6, 7);
	const numbers = [1, 2, 3, 4, 10, 5, 6, 7];
	console.log(max(...numbers));          // 10
```

<br>
<br>

## .slice(), .splice() 
- `.slice()`는 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않고 보존된다는 점이다.    
- `.slice()`에는 두 개의 파라미터를 넣게 되는데 첫 번째 파라미터는 어디스부터 자를지(startIndex), 그리고 두 번째 파라미터는 어디까지 자를지(endIndex)를 의미한다.  
```javascript
	const numbers = [10, 20, 30, 40];
	const sliced = numbers.slice(0, 2);     // 인덱스 0부터 2개의 원소만큼 자르겠다는 의미!

	console.log(numbers);            // [ 10, 20, 30, 40 ]
	console.log(sliced);             // [ 10, 20 ]
```
- `.splice()`는 배열에서 특정 항목을 제거할 때 사용한다. 
```javascript
	// 아래의 배열에서 30을 지우고 싶다고 가정해보자. 
	const numbers = [10, 20, 30, 40];

	// step 1 - 먼저 30이 몇번째 index인지 알아낸 후...
	const index_of_30 = numbers.indexOf(30);     // 2
	// step 2 - 이를 .splice()를 통해 지울수 있다. 
	numbers.splice(index_of_30, 1);             // index_of_30은 2니까, 인덱스 2부터 1개를 지우겠단 의미! [ 30 ]
	console.log(numbers);                      // [ 10, 20, 40 ]
```


<br>
<br>

## .join() 
- `.join()`은 모든 원소를 연결해 하나의 문자열로 만들어 주는 메서드이다. 
- `.join()`은 원본에 변화를 주지 않는다. 
- 파라미터로 `separator`를 갖을 수 있다. 아래와 같이; 
```javascript
	const numbers = [1, 2, 3, 4]; 
 	numbers.join();          // '1,2,3,4'
 	numbers.join(", ");      // '1, 2, 3, 4'
 	numbers.join(" - ");     // '1 - 2 - 3 - 4'
	console.log(numbers);    // [ 1, 2, 3, 4 ]  --> 원본은 보존된다.
```

<br>
<br>

## .sort(), .reverse() 
- `.sort()`는 배열을 정렬하는데 사용된다.  
- `.sort()`는 원본을 변형시킨다. 
```javascript
	const numbers = [4, 5, 8, 1, 0, 20, 100, 33];
	// 오름차순으로 정렬할 떄 
	numbers.sort( (a, b) => a - b );     // [0, 1, 4, 5, 8, 20, 33, 100]
	console.log(numbers);                // [0, 1, 4, 5, 8, 20, 33, 100]
	
	// 내림차순으로 정렬할 떄 
	numbers.sort( (a, b) => b - a );     // [100, 33, 20, 8, 5, 4, 1, 0]
	console.log(numbers);                // [100, 33, 20, 8, 5, 4, 1, 0]
```
- `.reverse()`는 배열의 원소 순서를 반대로 정렬해서 반환한다.
-  `.reverse()`도 .sort() 와 마찬가지로 원본 배열 자체를 변형시킨다. 
<!-- - 인자 x -->
```javascript
	const numbers = [4, 5, 8, 1, 0, 20, 100, 33];

	const numbers_reversed = numbers.reverse();       
	console.log(numbers_reversed);       // [33, 100, 20, 0, 1, 8, 5, 4]
```
<br>
<br>

## .toString() 
- `.toString()`은 배열의 원소를 문자열로 반환시킨다. 
<!-- - 인자 x -->
```javascript
	const numbers = [4, 5, 8, 1, 0, 20, 100, 33];
	
	const numbers_toStringed = numbers.toString();  
	
	console.log(numbers_toStringed);     // "4,5,8,1,0,20,100,33" 
	console.log(numbers);                // [4, 5, 8, 1, 0, 20, 100, 33]
```

<!-- <br>
<br>

## .every(), .some() 
-
http://blog.302chanwoo.com/2017/08/javascript-array-method/
```javascript
``` -->

<br>
<br>

## 원본 배열을 변형시키지 않는 메서드와 변형시키는 메서드

| **변형 O** | **변형 X** (배열의 사본이 생성됨) |
|:---:|:---:|
|<u>push</u>|map|
|<u>pop</u>|concat|
|<u>shift</u>|filter|
|<u>unshift</u>|reduce|
|<u>reverse</u>|reduceRight|
|<u>sort</u>|join|
|<u>splice</u>|slice|
||toString|

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrays
	- http://blog.302chanwoo.com/2017/08/javascript-array-method/
	- https://takeuu.tistory.com/102
	- https://jess2.xyz/JavaScript/array-methods/
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

</details>

---