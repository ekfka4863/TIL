---
date: 2021-05-03-Monday
---

# 삼항연산자(Ternary Operator)

- 정의: 
	- `삼항 연산자`는 if와 switch처럼 조건문을 처리하는 연산자다.
- **조건부 (삼항) 연산자** 또는 **삼항 조건 연산자**라고 불리는 이 문법은 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자로써,  
<u>일반적으로 if 조건문의 단축 형태(/축약형)로 사용된다.</u>
- 기본 문법: 
	- 총 세 개의 문장으로 구성된다;   
	`조건문 ? 표현문1: 표현문2`
	- 만약 조건문이 참이라면 표현문1을, 거짓이라면 표현문2를 실행한다. 
```javascript
		condition ? exprIfTrue : exprIfFalse 

	// e.g. if문 사용 
		const array = [];
		let text = '';
	
		if (array.length === 0) {
			text = '배열이 비어있습니다.';
		} else {
			text = '배열이 비어있지 않습니다.';
		}
		
		console.log(text);


	// e.g. 삼항 연산자 사용 
		const array = [];
		let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
		
		console.log(text);

		// 삼항 연산자 라인의 길이가 너무 길어진다고 생각되면 아래와 같이 잘라서 작성해도 무방하다.
		const array = [];
		let text = array.length === 0 
			? '배열이 비어있습니다' 
			: '배열이 비어있지 않습니다.';

		console.log(text);
```
- 삼항 연산자를 중첩해서 쓸 수도 있다;  
~~하지만 가독성을 생각한다면 지양하는 것이 바람직하겠다.~~
```javascript
	const condition1 = false;
	const condition2 = false;

	const value = condition1 
		? '와우!' 
		: condition2 
			? 'blabla' 
			: 'foo';

	console.log(value);     // foo
```
-  if문의 축약형으로 사용되는 삼항 연산자는 if문과 다르게 삼항 조건의 결과로 반환된 값을 바로 변수에 할당할 수 있다는 점이다.    
~~(cf. if문의 경우에는 변수에 바로 할당할 수 없고 조건식 안에서 할당 처리를 해줘야 한다.)~~   
```javascript
	let hp = 98;
	let mp = 0;

	function checkHP() {
		if (hp <= 0) {
			return '사망했습니다.';
		} else {
			return `현재 체력은 ${hp}입니다.`;
		}
	}

	function checkMP() {
		return (mp <= 0) ? '마력이 하나도 없습니다.' : `현재 보유하고 있는 마력은 ${mp}입니다.`;
	}

	console.log(checkHP());   // 현재 체력은 98입니다. 
	console.log(checkMP());   // 마력이 하나도 없습니다.


	// 삼항 연산자 장점 - if문과 같이 상황에 따라 return문을 매번 작성할 필요가 없다. 
	//                삼항 연산자는 결괏값을 바로 할당할 수 있기 때문에 return문을 하나만 작성해도 충분!  
```

<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
	- https://bigtop.tistory.com/28
	- https://velog.io/@yunsungyang-omc/JS-%EC%82%BC%ED%95%AD-%EC%97%B0%EC%82%B0%EC%9E%90ifelse%EB%AC%B8%EA%B3%BC-%EC%B0%A8%EC%9D%B4

</details>

---