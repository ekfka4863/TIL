---
date: 2021-06-12-Saturday 
---

# Context API 를 사용한 전역 값 관리

<br>

> 리액트의 Context 간단 정리 
- React에서 일반적으로 데이터를 자손에게 전달하는 방법은 위에서부터 아래로 (부모에서 자식까지) "하향식"으로 props를 통해 전달한다. 이것을 top-down 방식이라고 부르는데, 이런 top-down 방식은 특정 경우에 매우 성가신 일이 된다.      
- 만약 컴포넌트의 구조가 매우 단순하다면 1-2개의 컴포넌트를 중간다리 삼아서/거쳐서 데이터를 하위 컴포넌트에게 전달하는 것은 문제가 되지 않는다. 하지만 만약 컴포넌트 구조가 매우 복잡해지고 많은 수의 컴포넌트를 거져야지만 원하는 컴포넌트에 데이터 전달을 할 수 있다면 문제가 될 것이다.     
`Context`는 바로 이렇게 level이 깊어질 수록 데이터를 전달하는데 불편함을 해소해주는 역할이다. Context를 사용하면 컴포넌트 트리의 모든 레벨을 prop으로 거치지 않아도 원하는 데이터를 컴포넌트들에 공유할 수 있게 한다.    
~~(cf. 이를 해결하기 위한 방법으로 flux, reflux, redux, mobx 등을 이용하는데, React 16.3 부터는 **Context API**를 이용해서 트리의 모든 레벨에 값을 공유하는 방법을 제공한다.)~~ 
- e.g.   
	- `React.createContext`를 사용하여 Context 객체를 만들 수 있다;    
	```javascript
		// 기본 문법 
		const MyContext = React.createContext(defaultValue);
	```
	- 또한, `Context.Provider`를 이용하여 Context 변경 사항을 자손들에게 제공할 수 있다.



<br>
<br>

> 자바스크립트 컨텍스트 


> Context API란? 
-	 




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
	- https://ko.reactjs.org/docs/context.html
	- https://im-developer.tistory.com/184
	- https://react.vlpt.us/basic/20-useReducer.html
	- https://xiubindev.tistory.com/99

	
</details>
---





	