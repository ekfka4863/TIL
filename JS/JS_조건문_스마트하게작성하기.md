---
date: 2021-05-03-Monday
---

# 조건문 더 스마트하게 사용하기 
- 오늘은 어떻게 하면 조건문을 조금 더 _스마트_하게 쓸 수 있는지에 대해 알아보는 시간을 가져보자!  

<br>
<br>

## _특정 값이 여러 값중 하나인지 확인해야 할 때_
- 예를 들어, 동물인지 아닌지를 확인해주는 간단한 함수를 만든다고 가정해보자;  
```javascript
	function isAnimal(text) {
		return (text === '고양이' || text === '개' || text === '거북이' || text === '너구리');
	}
  
	console.log(isAnimal('개'));      // true
	console.log(isAnimal('컴퓨터'));   // false



	// 위와 똑같은 코드를 아래와 같이 includes라는 배열 내장함수를 사용하면 더 "스마트"하게 작성할 수 있다; 
	function isAnimal(text) {
		// 배열에 확인하고자 하는 값들을 담는다... 
		const animals = ['고양이', '개', '거북이', '너구리'];

		return animals.includes(text);     // 만약 parameter로 받은 text가 배열안에 존재한다면 true, 아니라면 false가 출력될 것!
	}

	console.log(isAnimal('고양이'));   // true
	console.log(isAnimal('소라'));    // false



	// 더 나아가서 위의 함수를 화살표 함수로 바꿔준다면 더 깔끔한 코드 완성!
	// const isAnimal = function(text) => {
	// 	['고양이', '개', '거북이', '너구리'].includes(text);
	// } 

	const isAnimal = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

	console.log(isAnimal('고양이'));   // true
	console.log(isAnimal('쿠키'));    // false
```
- 단, 물론 코드가 짧다고 해서 "무조건" 좋은 것은 아니다.   
하지만 위와 같이 짧지만 가독성까지 좋다면 이런 "스마트한 방법"을 지향하는 것이 좋겠다! 

<br>
<br>

## _값에 따라 다른 결과물을 반환 해야 할 때_
- 주어진 값이 무엇이냐에 따라 다른 결과물을 반환해야 할 때 사용할 수 있는 유용한 방법에 대해서 알아보자. 
- 예를 들어, 동물 이름이 무엇이냐에 따라 동물의 소리가 다른 값으로 반환돼야 하는 함수를 만들고 싶다고 가정해보자.  
```javascript
	// 기본 if 조건문을 사용한 방법 
	function getSound(animal_name) {
		if (animal_name === '개') {       // 단, if문 안에 코드 블록이 한줄짜리면 {} 생략 가능!
			return '멍멍!';
		}
		if (animal_name === '고양이') {
			return '야오옹';
		}
		if (animal_name === '참새') {
			return '짹짹';
		}
		if (animal_name === '비둘기') {
			return '99 999 99 9';
		} else {
			return '...?';
		}
	}

	console.log(getSound('개'));       // 멍멍!
	console.log(getSound('비둘기'));    // 99 999 99 9
	console.log(getSound('컴퓨터'));    // ...?


	// 또는 우리가 배운 조건문 중 switch case 문을 사용하여 다음과 같이 구현할 수도 있다; 
	function getSound(animal_name) {
		switch (animal_name) {
			case '개':
				return '멍멍!';               // tip! switch문에서 return을 할 때에는 break를 생략해도 됨
			case '고양이':
				return '야오옹';
			case '참새':
				return '짹짹';
			case '비둘기':
				return '99 999 99 9';
			default: 
				return '...?';   
		}
	}

	console.log(getSound('개'));       // 멍멍!
	console.log(getSound('비둘기'));    // 99 999 99 9
	console.log(getSound('컴퓨터'));    // ...?



	// 위의 if문도 switch문도 딱히 문제는 없지만, 객체를 활용하면 더 깔끔하게 코드를 작성할 수 있다; 
	function getSound(animal_name) {
		const sounds = {
			개: '멍멍!',
			고양이: '야오옹~',
			참새: '짹짹',
			비둘기: '99 999 99 9'
		};
		return sounds[animal_name] || '...?';    // 단축 평가 논리 계산법 -> sounds라는 객체 안에 있는 [특정 키]를 조회한다.
		// 만약 sounds라는 객체에 파라미터로 받은 동물의 이름이 키로 들어있다면 해당 sound를 출력하고, 없다면 ...? 를 출력~
	}

	console.log(getSound('개'));       // 멍멍!
	console.log(getSound('비둘기'));    // 99 999 99 9
	console.log(getSound('컴퓨터'));    // ...?
```
- 다시, ~~위에서 확인한 것처럼~~ **어떤 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지 있을 때**는 객체를 활용하면 좋다. 
- 만약, 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지가 있는 것이 아니라. 값에 따라 실행해야 하는 코드 블록이 다를 경우는 어떻게 해야할까?   
그럴 때는 객체에 함수를 넣으면 된다. 아래와 같이; 
```javascript
	// 함수를 생성
	function makeSound(animal_name) {
		// tasks 라는 객체를 생성한다. 안에 잇는 방법 모두 사용 가능
		// 단, 3번째 방법(익명함수)은 비추! 그렇게 할거면 차라리 방법 1이나 2로
		// const tasks = {
		// 	개: () => {          // 객체에 함수를 넣는 방법 1
		// 		console.log('멍멍');
		// 	},
		// 	고양이() {             // 객체에 함수를 넣는 방법 2
		// 		console.log('고양이');
		// 	},
		// 	비둘기: function() {     // 객체에 함수를 넣는 방법 3
		// 		console.log('99 999 99 9');  
        // }

		const tasks = {
			개() {
				console.log('멍멍');
			},
			고양이() {
				console.log('고양이');
			},
			비둘기() {
				console.log('99 999 99 9');
			}
		};


		const task = tasks[animal_name];
		
		if(!task) {    // 만약, tasks라는 객체에 [animal_name]이 없다면...
			console.log('...?');       // ...?을 출력하고 
			return;                    // return을 해준다
		}
		task();       // 그리고 나서 tasks객체의 [animal_name]을 (); 호출해주면 된다~
	};
	

	makeSound('개');         // 멍멍
	makeSound('비둘기');      // 99 999 99 9
	makeSound('컴퓨터');      // ...?
``` 

<br>


---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://learnjs.vlpt.us/useful/05-smarter-conditions.html
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	- https://ko.javascript.info/arrow-functions-basics
	- https://curryyou.tistory.com/189
	- https://curryyou.tistory.com/191?category=898979
	- https://curryyou.tistory.com/191?category=898979

</details>

---