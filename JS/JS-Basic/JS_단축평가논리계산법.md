---
date: 2021-05-03-Monday
---

# 단축 평가 논리 계산법 (Short-Circuit Evaluation)
- 우리는 기본적으로 (논리) 연산자는 아래와 같이 사용된다는 것을 이미 알고 있을 것이다;  
```javascript
	true && true      // true
	true && false     // false 
	true || false     // true 
	false || false    // false
```
- 오늘은 논리 연산자를 사용하여 코드를 좀 더 효율적으로, 짧게 작성할 수 있게 하는 `단축 형가 논리 계산법`이란 것에 대해 알아보자!    


## && 연산자로 코드 단축시키기 
- 예시를 보면서 이해해보자;  
```javascript
// 기존의 코드 작성법
	const dog = {
		name: '멍멍이', 
	};

	function getName(animal) {
		if (animal) { 
			return animal.name;
		} 
		return undefined;
	}


	const name = getName(dog);
	const no_name = getName();
	console.log(name);         // 멍멍이 
	console.log(no_name);      // undefined


	// 단축 평가 논리 계산법으로 작성 
	function getName(animal) {
		return animal && animal.name;
	}

	const name = getName(dog);
	const no_name = getName();
	console.log(name);         // 멍멍이 
	console.log(no_name);      // undefined


	// 위의 단축 평가 논리 계산법이 작동하는 이유는 아래의 예시들을 보면 이해가 될 것! 
	console.log(true && 'hello');    // hello  -> 앞에가 참이고 뒤도 참이면 뒤에것을 출력
	console.log(false && 'hello');   // false   -> 앞에가 거짓이면 &&이니까 뒤는 보지도 않고 false
	console.log('hello' && 'bye');   // bye -> 앞도 뒤도 truthy면 뒤에 값이 출력된다 
	console.log(null && 'hello');    // null
	console.log(undefined && 'hello'); // undefined -> 앞에 값이 falsy한 값이고 &&이니까 falsy한 값을 출력~ 
	console.log('' && 'hello');      // ''
	console.log(0 && 'hello');       // 0
	console.log(1 && 'hello');       // hello
	console.log(1 && 1);             // 1
```
- 위와 같은 속성을 잘 알아두면, 특정 값이 유효할 때만 어떤 값을 조회하는 작업을 해야할 때 유용하게 사용될 수 있다. 


## || 연산자로 코드 단축시키기 
- || 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용할 값을 지정해 줄 때 유용하게 사용할 수 있다.   
아래와 같이; 
```javascript
	const namelessDog = {
		name: '',
	}
	const namedDog = {
		name: '멍뭉이',
	}

	function getName(animal) {
		const name = animal && animal.name;

		if (!name) {        // 해석: 만약 name이 없으면, '' -> 빈문자열로 falsy한 값이면..
			return '이름이 없는 동물입니다.';
		}
		return name;        // 해석: 그렇지 않다면. 즉, name이 Truthy한 값이면 그 name을 반환하여라~ 
	}

	const name = getName(namelessDog);
	console.log(name);            // 이름이 없는 동물입니다.
	const named = getName(namedDog);
	console.log(named);           // 멍뭉이



	// 위와 같은 상황에서 단축 평가 논리 계산법을 사용하여 조금 더 간결한 코딩이 가능하다 
	function getName(animal) {
		const name = animal && animal.name;

		return name || '이름이 없는 동물입니다.';   
	}
	/* 
	위에가 가능한 이유: 
	만약 앞에 값인 name이 Truthy한 값이라면, 
	뒤에는 고려를 할 필요도 없이 앞에 name이 출력될 것이고... 
	만약 앞에 값인 name이 Falsy한 값이라면 뒤에 값이 무조건 실행될 것이기 때문에 
	if문 대신에 위와 같이 하나의 단축 평가 논리 계산법으로 보다 간결하게 작성 가능하다.
	*/

	// 아래의 예시들을 보면 더 이해가 잘 될 것! 
	console.log(false || 'hello');     // hello 
	console.log('' || '이름없다');       // 이름없다 
	console.log(null || '널이다~');     // 널이다~ 
	console.log(undefined || 'defined 되지 않았데요!');   // defined 되지 않았데요!
	console.log(0 || '제로제로');       // 제로제로  

	console.log(1 || '뭐가 출력될까요?');     // 1 
	console.log(true || '여긴 볼 필요도 없어요~');     // true 
	console.log('와아' || '여긴 볼 필요도 없다니까요!'); // 와아
	console.log([] || '노노');         // []
```
- 위와 같은 특성 때문에 || 연산자로 코드를 단축시키고 싶을 때는 'a가 없으면 b를 사용하고 싶을 때' 활용하면 매우 유용하다. 

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://learnjs.vlpt.us/useful/03-short-circuiting.html
	- https://velog.io/@ksy990628/JavaScript-%EB%8B%A8%EC%B6%95-%ED%8F%89%EA%B0%80-%EB%85%BC%EB%A6%AC-%EA%B3%84%EC%82%B0%EB%B2%95
	- https://velog.io/@nudge411/%EB%8B%A8%EC%B6%95-%ED%8F%89%EA%B0%80-short-circuit-evaluation-%EB%85%BC%EB%A6%AC-%EA%B3%84%EC%82%B0%EB%B2%95
	
</details>

---