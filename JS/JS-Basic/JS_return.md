---
date: 2021-05-06-Thursday
---

# return에 대하여 ... 
- `return`은 값을 반환하는 명령어이다.  
함수 안에 명령문들을 실행하다가 return을 만나면 함수를 빠져나가게 되고, return 문에 있는 값을 반환하게 된다.   
예를 들어, 
```javascript
	function hello(a, b) {
		add = a + b;
		return add;
	}
	// 위와 같이 작성한다면, hello 함수는 add변수의 값을 반환하게 된다. 
	// 아래와 같이; 

	console.log(hello(1, 2));     // 3
	console.log(hello(11, 26));   // 37
```

<br>
<br>

## When to use return with JavaScript
- `return 명령문`을 함수에서 사용할 경우는 2가지이다;
  1. return 문에 있는 값을 반환하고 싶을 때
	2. 그냥 함수를 종료하고 싶을 때

> 1. return 문에 있는 값을 반환하고 싶을 때 만약 return 문을 사용하지 않는다면, 아래와 같아진다; 
```javascript
	// e.g. 입력 받은 수를 4로 나눠주는 함수가 있다고 가정해보자. 
	const divideByFour = function (number) {
		number / 4;
	}

	const divided = divideByFour(27);    // undefined
```
- 위의 예시에서 입력 받은 수를 4로 나눠주는 함수를 정의 했고, `divideByFour(27);`를 했지만 `undefined`가 나오는 이유는, return 문을 사용하여 함수에서 27을 4로 나눈 값을 반환하지 않았기 때문이다. return문 없이는 입력받은 27 나누기 4로 생긴 값은 함수 내에서만 존재하게 된다   
~~(In the above example, you’re passing 27 in the function, which divides it by 4. But… you’re not doing anything with the number because it only lives inside the function.)~~ .  
return문을 사용했을 때만 함수 밖에서도 사용할 수 있게 되는 것이다. 
```javascript
	const divideByFour = function (number) {
		return number / 4;
	}

	const divided = divideByFour(27);    // 6.75
```
- 이런 return문의 역할을 이해하면 아래와 같이 응용할 수도 있다; 
```javascript
	var helloThere = function (name, day) {
			return 'Hello there, ' + name + '! How is your ' + day + ' going so far?';
	};

	var greeting = document.querySelector('#greeting');
	greeting.innerHTML = helloThere('Chris', 'Monday');

	// Result
	// <div id="greeting">Hello there, Chris! How is your Monday going so far?</div>
```

<br>

> 2. 그냥 함수를 종료하고 싶을 때 사용하는 return 문
- 2.와 같은 방법(approach)는 이벤스 리스너에서 많이 사용될 수 있다.   
예를 들어; 
```html
	<!-- e.g. 아래와 같은 모달창이 있다고 가정해보자.  -->
	<div class="modal">
    Hey there! This is a pointless modal window!<br>
    <button class="modal-close">Close Me</button>
	</div>
```
```javascript
	//  만약에 .modal-close버튼과 모달창 바깥 영역을 클릭했을 때 모달창이 꺼지는 이벤트를 넣고 싶지만, 그 밖의 모달창 영역을 클릭하면 아무 이벤트도 일어나지 않게 하고 싶다면...  
	// Solution:  
	// 		이를 해결하는 하나의 방법은 if ... else 문을 사용하는 것이다; 
	const closeModal = function() {
		document.querySelector('.modal').remove();
	}; 

	document.addEventListener('click', function (event) {
		
		if (event.target.matches('.modal-close')) {
			closeModal();
		} else if (event.target.closest('.modal')) {
			<!-- 해석: if the clicked element is the '.modal', do nth! -->
		} else {
			closeModal();
		}
	}, false);   
	// cf. addEventListener에서 3번째 인자인 false는 useCapture이라 불리는 불린값으로, 이벤트 버블링이나 캡쳐링을 사용할 것인지를 나타낸다.


	// Solution:
	//	 	또 다른 해결 방법은 함수를 끝내기 위한 return 문을 사용하는 것이다. 
	const closeModal = function () {
		document.querySelector('.modal').remove();
	};

	document.addEventListener('click', function (event) {
		if (event.target.matches('.modal-close')) {
			closeModal();
			return;        // 함수를 종료하는 return문! 
		}

		if (event.target.closest('.modal')) return;
		// 해석: if the clicked element is the '.modal', do nth! 

		closeModal();
		// 해석: Otherwise, close the modal!
	}, false);

	// cf. https://gomakethings.com/when-to-use-return-with-javascript/
```
- 위의 두 해결 방법은 같은 결과를 만들어내지만 return 문을 사용한 것이 조금 더 직관적이게 느껴진다. 

<br>
<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
- https://www.google.com/search?q=javascript+return+%EB%84%A3%EC%96%B4%EC%A3%BC%EB%8A%94+%EB%B0%A9%EB%B2%95&newwindow=1&rlz=1C5CHFA_enKR941KR941&sxsrf=ALeKk00LI5KdKZrFFXEW73fwNfNVPw7wvA%3A1620103617079&ei=wdGQYM6jBMuSr7wPgdeCkA0&oq=javascript+return+%EB%84%A3%EC%96%B4%EC%A3%BC%EB%8A%94+&gs_lcp=Cgdnd3Mtd2l6EAMYAjIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6CAgAELADEM0COgQIIxAnOggIABCxAxCDAToFCAAQsQM6AggAOgcIIRAKEKABUJStuwNYmua7A2DU97sDaA5wAHgCgAG7AYgBqBuSAQQwLjI0mAEAoAEBqgEHZ3dzLXdpesgBBMABAQ&sclient=gws-wiz
	- https://m.blog.naver.com/PostView.nhn?blogId=designondo&logNo=221244334275&proxyReferer=https:%2F%2Fwww.google.com%2F
	- https://www.everdevel.com/JavaScript/return/
	- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return
	- https://ibrahimovic.tistory.com/62      (addEventListener에서 3번째 인자는?)

</details>

---
