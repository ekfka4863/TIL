---
date: 2021-06-13-Sunday
---

# Immer 를 사용한 더 쉬운 불변성 관리
- 오늘은 Immer 라는 라이브러리를 사용해서 보다 더 쉽게 **불변성**을 지키는 방법에 대해 알아보자.
- 우선, `불변성`이란 <u>불변성이랑 기존의 값을 그대로 유지하면서 새로운 값을 추가하는 것으로 객체가 생성된 이후 그 상태를 변경할 수 없다는 의미다</u>.   
리액트에서 상태는 불변성을 유지해야한다. 왜냐면 의도하지 않은 특정 객체가 변경되면 참조하고 있던 객체에서도 변경이 일어나는 경우가 생기기 때문이다.     
<!-- 리액트는 실제로 DOM을 제어하는 것이 아니라 중간에 가상의 DOM(Virtual DOM)을 두고, 이중에서 변화된 엘리먼트만 리렌더링 해준다.    
그러나 일부  -->
그렇기 때문에 객체를 복사하여 새로운 객체를 생성한 후 변경하는 작업을 통해 불변성을 유지시켜 준다.    
~~객체를 복사하는 방법은 `Object.assign()`과 `스프레드 연산자(...)`가 있다.~~ 
- 다시, 저번에 `Spread 연상자`를 이용해서 객체나 배열의 값을 복사해서 불변성을 유지하는 방법을 배웠었는데, 우리는 불변성을 유지함으로써 side-effect를 줄이고 컴포넌트 최적화가 가능해진다.
- 하지만 문제!!!    
요약하면 편하게 상태를 관리하기 위해 객체 타입을 사용하는데 이는 참조 타입이라 불변성을 유지할 수 없다.    
그래서 기존의 주소 값과 다른 새로운 객체를 생성하여 복사한 뒤 해당 프로퍼티를 바꾸는 작업이 필요한데, 이렇게 복사를 통해 불변성을 계속 유지하려고 하면 코드가 길어지고 구조의 깊이가 깊어질수록 상태는 접근조차 어려워질 수 있다.   
이러한 문제를 해결하기 위해 불변성을 유지시켜주면서 코드를 단순하고 직관적으로 짤 수 있는 라이브러리가 있다.   
바로 오늘 배우게 될 `Immer`이다.   

<br>

> Immer

- Immer은 Immutable과 같이 불변성을 유지를 편리하게 해 주는 라이브러리다.
- 우선, Immer.js 를 설치해 준다;     
```
	$ yarn add immer
	$ npm add immer 
```
- 사용 방법; 

<br>
- e.g.    
```javascript
	const object = {
		a: 1,
		b: 2
	};

	object.b = 3;
```



<br>
<br>


> 


e.g.
```javascript
```
e.g.
```javascript
```

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

<div style="padding-left: px;">
	<img src="" alt="" style="width: px;" />	
</div>

📌😉

<br>
<br>
---
<details>
	<summary>CLICK ME!</summary>

- cf. 
	- https://react.vlpt.us/basic/20-useReducer.html
	- https://xiubindev.tistory.com/99
	- https://estaid.dev/reasons-to-maintain-immutability-with-react/
	- https://velog.io/@bedakim/%EB%B6%88%EB%B3%80%EC%84%B1
	- https://estaid.dev/reasons-to-maintain-immutability-with-react/

	
</details>
---





	