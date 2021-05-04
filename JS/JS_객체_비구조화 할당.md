---
date: 2021-04-28-Wednesday
---

# 객체 - 이전 학습 내용 복습
- `객체(Object)`란 추상적 의미를 갖고 있지만, 한 마디로 정의하면 '실제로 존재하는 사물'을 의미하고 '이름(name)과 값(value)으로 구성된 `속성(property)`을 가진 자바스크립트의 기본 데이터 타입'이라고 얘기할 수 있다.    
~~앞으로 배울 배열(array) 또한 객체다.~~    
다시, `객체`라는 자바스크립트의 자료형은 _여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입_으로 이름과 값이 짝(pair)을 이루어 저장되는 구조이다.  
- 객체는 ~~위에서 얘기했듯~~ 이름과 값으로 구성된 속성을 갖는데, 이런 속성 중에 동작(함수)인 것을 `메소드(method)`라고 부른다.      
아래와 같이; 
```javascript  
	// 에를 들어, 한 강아지에 대해서 객체를 만든다고 해보자 
	const myDog = {
		name: '구름',
		age: 7, 
		cute: true,
		sound: '멍뭉멍뭉!',
		say: function say() {            // 이 부분이 메소드! 
			console.log(this.sound);
		}
	};

	console.log(myDog);      // {name: "구름", age: 7, cute: true, sound: "멍뭉멍뭉!", say: ƒ}  
```

<br>

# 객체 - 비구조화 할당 
```javascript  
	// 또는 객체를 아래와 같이 활용할 수도... 
	const ironMan = {
		name: '토니 스타크',
		actor: '로버트 다우니 주니어', 
		alias: '아이언맨',
	};
	
	const captainAmerica = {
		name: '스티븐 로저스',
		actor: '크리스 에반스', 
		alias: '캡틴 아메리카',
	};

	console.log(ironMan);
	// {name: "토니 스타크", actor: "로버트 다우니 주니어", alias: "아이언맨"}
	console.log(captainAmerica);
	// {name: "스티븐 로저스", actor: "크리스 에반스", alias: "캡틴 아메리카"}

	function print(hero) {
		const textPrinted = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
		console.log(textPrinted);
	}

	print(ironMan);        	// 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어입니다.
	print(captainAmerica);   // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스입니다.



	// 이때, 위의 print 함수를 보면 hero.alias 또는 hero.name 등... parameter로 받아온 hero를 계속해서 반복 사용하고 있는 것을 확인할 수 있다... 
	// 위와 같이 hero의 내부의 값을 조회할 때마다 hero.을 반복 입력해야할 때 유용하게 사용될 수 있는 문법이 바로 ES6 의 "비구조화 할당"이라는 문법이다. 
	// "비구조화 할당"이라는 문법의 또 다른 이름은 "객체 구조 분해"다.  
	// "객체 비구조화 할당"이라는 문법을 사용하여 어떻게 코드를 더욱 짧고 보기 좋게 작성할 수 있는지에 대해 알아보자! 

	function print(hero) {
	  const { alias, name, actor } = hero;
		const textPrinted = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
		console.log(textPrinted);
	}

	print(ironMan);        	// 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어입니다.
	print(captainAmerica);   // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스입니다.
	// 같은 결과가 나온다! 
	// 즉, 비구조화 할당에서 한 것은 객체에서 값들을 추출해서 새로운 상수로 const 사용해 선언해 주는 것이었다.
	
	// 여기서 조금 더 나아가면 파라미터를 단계에서 객체 비구조화 할당을 할 수도 있다. 아래와 같이...
	function print({ alias, name, actor }) {    // 여기서! 파라미터 입력 단계에서!! 
		const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
		console.log(text);
	}
```
- 다시, 비구조화 할당(destructuring assignment)이란? 
	- Destructuring 은 우리말로 '구조를 파괴하다, 분해하다' 의미를 갖는다.
	- javascript 비구조화 할당은 배열이나 object 리터럴 객체를 분해한 뒤, 그 값을 변수에 할당하는 것을 말한다. 
	- 다시, ECMAScript6(2015)에서 새로 추가된 비구조화 할당(Destructuring Assignment)이란 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식(expression)이다.
	- **어렵게 생각하지 말고, 비구조화 할당은 특정 값들을 객체에서 빼오게끔 할 수 있는 문법인데, 동시에 깔끔하게 코드를 짤 수 있게 해주기 때문에 알아두면 매우 유용하다고 생각하면 되겠다.**
- 비구조화 할당을 위의 예시에서는 print 라는 함수 내에서 사용했지만, 꼭 그렇게 하지 않아도 된다.   
아래와 같이 사용할 수도 있다는 점 유의;   
```javascript  
	const ironMan = {
		name: '토니 스타크',
		actor: '로버트 다우니 주니어', 
		alias: '아이언맨',
	};

	const { name } = ironMan;
	console.log(name);         // 토니 스타크    --> 이런식으로도 비구조화 할당을 할수있으니 꼭 알아둘 것!  
	
	const captainAmerica = {
		name: '스티븐 로저스',
		actor: '크리스 에반스', 
		alias: '캡틴 아메리카',
	};
```

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://velog.io/@surim014/웹을-움직이는-근육-JavaScript란-무엇인가-part-7-Object-35k01xmdfp
	- https://learnjs.vlpt.us/basics/06-object.html#객체-비구조화-할당
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	- https://velog.io/@recordboy/ES6-비구조화-할당Destructuring-Assignment
	- https://2dubbing.tistory.com/80

</details>

---