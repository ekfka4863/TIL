---
date: 2021-04-21-Wednesday
---

# ES6 class
- `class`는 ES6에 새로 추가된 문법이다.   
자바스크립트는 객체 지향 프로그래밍(OOP)을 지원하기 위해서 `프로토타입 기반의 방식`을 지원하는데, 새로 추가된 class라는 키워드를 통해서도 객체 지향 프로그래밍을 지원하게 되었다.    
~~(cf. class 키워드는 객체를 만들 수 있는 새로운 방법이라고 생각하기!)~~
- 실무에선 사용자나 물건같이 동일한 종류의 객체를 여러 개 생성해야 하는 경우가 자주 생긴다. 이럴 때 `new 연산자`와 생성자 함수에서 배운 `new function`을 사용할 수 있다. 여기에 추가로 모던 자바스크립트에 도입된 클래스(class)라는 문법을 사용하면 객체 지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있다.

<br>
<br>

> class를 정의하는 방법 

- Class는 약간 <u>특별한 함수</u>다.   
	함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 `class 표현식`과 `class 선언` 두 가지 방법을 제공한다.
- `class 표현식`: 
	- class를 정의하는 한 가지 방법 **class 선언**을 이용하는 것이다. 
- `class 선언`: 
	- **class 표현식**은 class를 정의하는 또 다른 방법이다.   
	class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있다.   
	이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효합니다. (하지만, 클래스의 (인스턴스 이름이 아닌) name 속성을 통해 찾을 수 있습니다).
```javascript
	// class
	// class 정의 방법 1 -  선언적 방식 
  class A {}

	console.log(new A());

	// class 정의 방법 2 - class 표현식을 변수에 할당
	const B = class {};
	
	// 선언적 방식(cf. )이지만 호이스팅은 일어나지 않는다. 
```
https://velog.io/@wkdgusrhkd/클래스-class-in-JavaScript
<br>
<br>
<br>

> class body와 메서드 정의 
- `Strict mode`
- `Constructor`
- `프로토타입 메서드` 
- `정적 메서드와 속성` 
- `프로토타입 및 정적 메서드를 사용한 this 바인딩` 
- `인스턴스 속성` 
- `extends를 통한 클래스 상속(sub classing)` 
- `super를 통한 상위 클래스 호출` 
- `클래스 재정의`


---
# ES5 생성자 함수 vs ES6 클래스

https://www.google.co.kr/search?q=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+%EC%83%81%EC%86%8D++%EC%83%9D%EC%84%B1%EC%9E%90+%ED%95%A8%EC%88%98+vs+%ED%81%B4%EB%9E%98%EC%8A%A4+&newwindow=1&client=safari&channel=iphone_bm&sxsrf=ALeKk00B1jVfw_ADm84bWo2PQfWcWgrxrQ%3A1618992072129&ei=yNt_YMKoB9GJoATmtYnADA&oq=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+%EC%83%81%EC%86%8D++%EC%83%9D%EC%84%B1%EC%9E%90+%ED%95%A8%EC%88%98+vs+%ED%81%B4%EB%9E%98%EC%8A%A4+&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6BAgjECc6AggAOgQIABAeOgYIABAIEB46BggAEAUQHjoFCCEQoAE6BwghEAoQoAE6BAghEAo6BQgAEM0COgQIIRAVUIswWOBbYO1caBRwAHgCgAGaAYgBxh2SAQQyLjMxmAEAoAEBqgEHZ3dzLXdpesgBAcABAQ&sclient=gws-wiz&ved=0ahUKEwjCrOm6747wAhXRBIgKHeZaAsgQ4dUDCA0&uact=5

https://velog.io/@kdo0129/상속방법
https://ko.javascript.info/class-inheritance
https://evan-moon.github.io/2019/10/27/inheritance-with-prototype/
https://flowarc.tistory.com/entry/자바스크립트Javascript-클래스-생성자-프로토타입에-대하여
https://chrisjune-13837.medium.com/자바스크립트-상속-7c275edaa9e6
https://ichi.pro/ko/jaba-seukeulibteu-inteobyu-maseuteo-keullaeseuwa-peuloto-taib-sangsog-ui-chaijeom-eun-mueos-ibnikka-251569294893801


---
# ES6 class 도입에 대한 이해
- 자바스크립트는 ES6에서 class 키워드가 도입되었다.  
또한 그러인해 `class, super, extends, static`등 class 기반의 키워드들이 도입되었다. 

<br>
<br>

> class 도입에 대해서는 많은 이야기가 오고간다...
- 자바스크립트는 프로토타입 기반의 언어다. 그런데 도대체 갑자기 왜 ES6에서부터 class가 도입된 것일까? 
- 이를 이해하려면 `OOP(객체지향프로그래밍)`에 대해 간략하게 나마 설명을 하고 넘어가야한다; 
	- 우선 OOP의 형태는 크게 2가지로;   
	1. 클래스(class) 기반 형태
	2. 프로토타입(prototype) 기반 형태   
	이렇게 두 가지로 나뉜다.   
	심플하게 생각하자면, **프로토타입 기반의 OOP는 클래스가 존재하지 않는 OOP다** 라고 생각하면 되겠다. 

<br>
<br>

> 클래스 기반과 프로토타입 기반의 차이점은? 
- 둘 사이의 차이점을 한마디로 정의하자면 `클래스와 인스턴스의 여부`라고 할 수 있겠다.	
	- 예를 들어, 파이썬과 같은 클래스 기반 언어에서는 `클래스`는 일종의 "틀"과 같은 것이고, `인스턴스`는 클래스가 실체화된 것이다.   
	**즉, 클래스는 클래스로부터 상속되고 하위클래스와의 관계가 만들어진다.**   
	(cf. `계층구조`라는 것이 생긴다.)
	- 반면, 자바스크립트와 같은 프로토타입 기반 언어는 클래스와 인스턴스라는 개념이 아닌 **실체화된 객체로써, 객체는 다른 객체로부터 상속된다**는 것이다.   
	- 다시, 자바스크립트는 프로토타입 기반의 언어다. 그리고 프로토타입 기반의 언어로써, 자바스크립트에는 클래스가 존재하지 않는다. OOP 상속의 경우 prototype을 사용하여 클래스 상속과 같은 기능을 하게된다.   
	
<br>
<br>

> class 문법 추가에 대한 비평
- 우선, 확실히 해야할 부분은; 
	- <u>class 문법이 추가되었다고 해서, 프로토타입 기반의 언어인 자바스크립트가 클래스 기반의 언어로 바뀐 것은 아니라는 점을 유의하자!</u>
- ES6의 class 키워드는 겉으로 보기엔 class 이더라도, 내부적/근본적으로는 프로토타입 기반으로 구성되어 있다. 이렇게 자바스크립트에서 class라는 것이 그저 [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)이라는 점에서 비평을 받기도 하는데, 자바스크립트 ES6부터 새롭게 도입된 class는 새로운 객체지향 상속 모델을 제공하는 것이 아닌 _좀 더 단순하고 명확한 문법만 제공해 주는, ~~여전히 프로토타입의 기반인~~ 클래스가 추가되었다는 점이다._ 어떻게 보면 프로토타입에 의한 상속도 가능하고, class 키워드를 통해 클래스를 통한 상속도 가능해 졌으니 좋다고 생각할 수 있으나 ... 외국의 한 개발자가 한 비유면 자바스크립트의 class 키워드 도입이 왜 비판받고 있는지를 단번에 이해할 수 있다; 
	```
		Using class inheritance in JavaScript is like driving your new Tesla Model S to the dealer and trading it in for a rusted out 1983 Ford Pinto. - By Eric Elliott
	```
- 즉, "**자바스크립트에서 클래스 상속을 사용하는 것은 최신 테슬라 모델을 1983년 포드 모델로 바꾸는 것과 같다**"라는 의미다.   
프로토타입 기반은 클래스 기반의 고전적인 방법보다 훨씬 강력한 상속 시스템을 제공한다. 그래서 프로토타입 기반을 클래스 기반으로 바꾸는 것은 쉽지만, 클래스 기반을 프로토타입 기반으로 바꾸는 것은 거의 불가능하다. 

<!-- 
<br>
<br>

> 그래서 class 문법이 추가된 이유는? 
- 프로토타입 기반 자체는 강력한 시스템이지만, 아직까지 클래스 기반보다 널리 사용되고 있지 않다.   
~~(cf. 그 이유는 정적 타입과 동적 타입에 대한 이야기와 관련있다.)~~ 
- 그렇기 때문에, ES6에서 class가 도입된 이유가 아직까지 우세한 클래스 기반 때문이라는 말도 존재한다. 그렇기에 클래스 기반 사용자를 위해 편의를 제공해주는 것을 택했을 수도 있다는 추측이 있다.   -->

<br>
<br>

> 그렇다면 자바스크립트에서 class 키워드는 지양해야 하는 것인가?
- 이에 대한 <u>정답은 없다.</u>  
자바스크립트 개발자라면 사실 프로토타입 기반의 언어를 그에 맞게 사용하는 것이 좋을 수도 있다. 하지만, 그렇다고 해서 자바스크립트의 클래스를 아예 사용하지 않는 것 또는 무조건 피하는 것이 가능한 일인지도 맞는 일인지도 모르겠다.    
**왜냐면 그 판단은 정적 타입 언어와 동적 타입 언어에 대한 개발자의 입장 차이이기 때문이다.** 그렇기 때문에 올바른 답은 없다고 봐야하겠다. 



<br>
<br>

>

https://mygumi.tistory.com/235





---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
	- https://mygumi.tistory.com/235
	- https://velog.io/@wkdgusrhkd/클래스-class-in-JavaScript
	-
	-


</details>


---