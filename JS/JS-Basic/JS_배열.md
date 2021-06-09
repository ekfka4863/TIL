---
date: 2021-04-28-Wednesday
---

# 배열(Array)

## 배열의 기본 형태  
- 자바스크립트에서 `배열(Array)`라는 자료형의 형태는 **대괄호 []** 와 괄호 사이의 **요소(들)** 로 구성된다.    
배열 안에 꼭 요소가 있어야 하는 것은 아닌데, 요소가 없는 대괄효 []는 **빈 배열**을 의미한다.  
- 배열 안에 있는 요소들을 나열하는 경우 콤마(,)를 이용한다. 배열 안에 요소들이 나열되어 있는 형태는 아래와 같다;
```javascript
	const 배열 =	[요소 1, 요소 2, 요소 3, ...];
```
- 다른 프로그래밍 언어와 다르게 자바스크립트는 동적 자료형 성격을 갖고 있기 때문에, 배열의 길이와 자료형은 고정되지 않는다.  
- 위에서 배열의 길이는 배열 내부의 요소 개수의 합과 동일하다. 

## 배열의 인덱스 
- 배열의 길이와 헷갈릴 수 있는 개념 중에 `인덱스(Index)`라는 것이 있다. 배열 내부의 특정 위치에 있는 요소로 바로 접근할 때 사용하는 인덱스는 **배열 안에 위치한 요소의 위치 번호** 를 나타낸다고 할 수 있다. 배열의 맨 앞에 위치한 첫 번째 요소 인덱스 값은 0이며, 인덱스 값은 하나씩 순서대로 증가한다.   
배열이름과 대괄호[인덱스]를 사용하면 배열의 특정 요소에 바로 접근할 수 있다.  
아래와 같이;
```javascript  
	let fruits = ['사과', '바나나', '딸기', '수박', '멜론']

	console.log(fruits.length);
	console.log(fruits[0]);   // 사과
	console.log(fruits[1]);   // 바나나
	console.log(fruits[2]);   // 딸기 
	console.log(fruits[3]);   // 수박 
	console.log(fruits[4]);   // 멜론
```

## 배열 안에 요소들 
- 배열을 선언할 때, []안에만 감싸주면 배열 안에는 어떤 값이던지 해당 배열의 요소로 넣을 수 있다.    
예를 들어, 객체들이 들어있는 배열을 만들 수도 있다. 아래와 같다;    
```javascript  
	const objectsInArray = [{ name: '멍멍이' }, { name: '야옹이' }];

	console.log(objectsInArray[0]);    // {name: "멍멍이"}
	console.log(objectsInArray[1]);    // {name: "야옹이"}
```
- 하나의 배열 안에는 다양한 자료형들이 한데 섞여 들어갈 수도 있다.    
아래와 같이; 
```javascript
	const variousDatasInAnarray = [1, 'string', {}, 4];

	console.log(variousDatasInAnarray[3]);    // 4
	console.log(variousDatasInAnarray[4]);    // undefined   --> 인덱스가 [4]인 값은 없으니까 ...! 
```

## 배열의 크기(/길이) 알아내기 
- 배열의 요소의 개수가 곧 배열의 크기인데, 배열의 크기는 어떻게 알아낼 수 있을까?    
이럴 때는 배열의 `length` 값을 확인하면 된다. 아래와 같이;   
```javascript  
	const objectsInArray  = [{ name: '멍멍이' }, { name: '야옹이' }];

	console.log(objectsInArray .length);     // 2
```

## 배열에 새로운 항목 추가하기 - .push()
```javascript  
	const objectsInArray  = [{ name: '멍멍이' }, { name: '야옹이' }];

	objectsInArray.push({
		name: '찍찍이'
	});

	console.log(objectsInArray.length);   // 3
	console.log(objectsInArray[2]);       // {name: "찍찍이"}
```
- 위에서 확인할 수 있듯이 자바스크립트의 배열의 `.push()` 메소드는 기존의 배열의 끝에 새롭게 항목을 추가해준다. 

## 자바스크립트의 배열의 다양한 메소드들... 
- 이 밖에도 자바스크립트에서는 Array에 관한 다양한 메소드들을 제공한다.    
	- 📌 다양한 배열의 메소드들에 대해서는 다음 `JS_배열_메소드.md` 파일에서 정리할 예정입니다! 😉

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrays
	- http://blog.302chanwoo.com/2017/08/javascript-array-method/
	- https://takeuu.tistory.com/102
	- https://jess2.xyz/JavaScript/array-methods/

</details>

---