---
date: 2021-05-03-Monday
---

# 함수의 기본 파라미터 (Default Function Parameter)
- 함수를 호출 할 때, 원래 넣어야할 파라미터를 넣지 않게 됐을 때, 기본적으로 사용할 값을 지정하는 것을 의미한다.   
예를 들어,  
```javascript
	function add(a, b = 5) {
		return a + b;
	}

	console.log(add(8, 2));   // 10
	console.log(add(10));     // 15



	function multiply(a, b = 1) {
		return a * b;
	}

	console.log(multiply(5, 2));    // 10
	console.log(multiply(5));       // 5 
```
- 다른 예시를 통해 더 살펴보자;   
```javascript
	// e.g. 원의 넓이를 구하는 함수를 만든다고 가정하자 
	// 원면적 구하는 공식 =  π(파이)*r(반지름)^2
	
	function calculateCircleArea(r) {
		// 원주율 -> Math.PI 
		return Math.PI * r * r;
	}

	const area = calculateCircleArea(4);   
	console.log(area);                   // 50.26548245743669
	console.log(calculateCircleArea());  // NaN
	// 즉, 파라미터를 기본적으로 넣어줘야한다. 
	// 만약, 파라미터를 안 넣었지만 어떤 값을 기본값으로 사용하고 싶을 때는 아래와 같이 ... 



	// solution 1 - 단축 논리 평가 계산법 
	function calculateCircleArea(r) {
		const radius = r || 1;   // r이 Truthy한 값이면/주어졌다면 r을 사용, 아니라면 1을 사용하겠다 
		
		return Math.PI * radius * radius;
	}

	const area = calculateCircleArea();
	console.log(area);                    // 3.141592653589793
	
	const area_when_r_is_given = calculateCircleArea(5);
	console.log(area_when_r_is_given);    // 78.53981633974483



	// solution 2 - ES6 문법에서 함수의 기본 파라미터를 지정해 줄때... 
	// ES5 까지는 solution 1 방법이 최선이었겠지만, ES6에선 아래와 같이 할 수 있게 되었다.
	function calculateCircleArea(r = 1) {
		return Math.PI * r * r;
	}

	const area = calculateCircleArea();
	console.log(area);                   // 3.141592653589793

	const area_when_r_is_given = calculateCircleArea(5);
	console.log(area_when_r_is_given);   // 78.53981633974483


	// solution 2 방법은 화살표 함수에서도 사용할 수 있다; 
	const calculateCircleArea = (r = 1) => Math.PI * r * r;

	const area = calculateCircleArea();
	console.log(area);                   // 3.141592653589793
	 
	const area_when_r_is_given = calculateCircleArea(5);
	console.log(area_when_r_is_given);   // 78.53981633974483
```
~~- 어떤 방법을 사용하든 같은 결과를 출력하는 것을 확인 할 수 있다.~~

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://kangs523.tistory.com/7
	- https://learnjs.vlpt.us/useful/04-default-function-params.html
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

</details>

---