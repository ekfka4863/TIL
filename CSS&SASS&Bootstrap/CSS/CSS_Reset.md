---
date: 2021-04-08-Thursday
---

# 브라우저 기본 스타일 초기화 (CSS Reset)
- 본격적으로 CSS에 대해 더 알아보기 전에 기본적으로 브라우저 마다 이미 웹 사이트를 렌더링 할 때 적용하는 CSS 스타일이 있다.    
예를 들어, 크롭이나, Edge 등의 브라우저에는 margin 값이 8px이 - 기본적으로 설정되어 있다.   
이렇게 이미 브라우저가 갖고 있는 CSS 스타일링을 초기화 하고 우리가 원하는 스타일링을 입힐 때 필요한 `CSS Reset`라는 CSS 스타일 초기화 작업에 대해 알아보도록 하겠다. 
- 크게 브라우저 기본 스타일을 초기화 하는 방법으로:
	- 1.` reset.css`
	- 2.` normalize.css`  
	을 많이 사용한다. 
- 1.` reset.css`
	- reset.css는 브라우저가 지정한 모든 스타일을 지우는 파일이다. 
	- reset.css는 브라우저에서 통일된 화면을 볼 수 있도록 기본값을 전부 초기화 하는 전략으로, 모든 속성을 지워준다는 점과 파일의 크기가 작다는 <u>장점</u>이 있지만, 원래 기본적으로 지정되어 있다고 생각 되는 스타일 마저 다시 초기화가 적용되 다시 설정해야 되는 경우가 있어 번거로울 수도 있다는 <u>단점</u>이 있다.   
- 2.` normalize.css` 
	- normalize.css는 기본 지정 스타일을 통일해주는 파일이다. 즉, 모든 기본값을 싸그리 다 초기화 하는 reset.css와는 다르게 normalize.css는 기본값들에서 보존할 것은 보존하지만 브라우저 간 스타일의 오차를 줄일 수 있게 수정을 하는 방법으로, 스타일의 보존과 수정을 통해 버그만 줄이는 방향으로 스타일을 재지정하는 것이 포인트라고 생각하면 된다. 
	- 모든 브라우저에서 통일된 스타일을 보여준다는 것과, 스타일을 통일한 것이지 초기화 한 것이 아니기 떄문에 스타일을 완전 s히 처음부터 재정의 하지 않아도 된다는 <u>장점</u>이있다. 하지만 reset.css에 비해 파일의 용량은 큰 편이라는 <u>단점</u>이 있다. 
- 단, ~~1.번이든 2.번이든~~ 파일을 삽입할 때는 사용자가 지정할 스타일이 담긴 .css 파일보다 더 먼저, HTML 문서 상 위쪽에 배치시키는 것이 중요! 유의하자!   
	- 아래와 같이!
```html
		<!-- reset.css -->
		<link rel="stylesheet" href="./images/reset.min.css" />
		<!-- normalize.css -->
		<link rel="stylesheet" href="./images/normalize.min.css" />
		<!-- 사용자 스타일 -->
		<link rel="stylesheet" href="./style.css" />
```
<br>

> Reset CSS가 필요한 이유
- 우리는 한 가지 브라우저에서만 구현되는 웹 사이트가 아니라 다양한 브라우저와 환경에서 동일하게, 문제없이 작동하는 웹 사이트를 만드는 것을 목표로 한다. 하지만 브라우저마다 각기 다른 CSS 디폴트 값이 있다면 우리는 `크로스 브라우징 이슈`를 겪게 돼버린다. 이를 해결하기 위한 것이 바로 `CSS Reset`인 것이다.  <br> <br>
	- (	cf. `크로스 브라우징`에 대해서는 이후에 좀 더 다룰 예정! 😉)  

<br>

---
# 크로스 브라우징이란? 
- 현존하는 브라우저들은 크롬, 사파리, 인터넷 익스플로어, 오페라, 파이어폭스, 웨일 등... 정말 다양한 브라우저들이 존재한다. 
- 이렇게 많은 브라우저의 동작 방식은 [W3C] 라는 국제 웹 표준화 기구에서 제공하는 스펙(가이드라인)을 따라서 동작하게 된다. 그러나 표준화 기구에서 제공하지 않은 가이드 라인에 대해서는 각 브라우저마다 각자만의 CSS 스타일이 있고, 그 스타일에 맞게 웹사이트를 구현하고 있다.   
- ~~이거슨 바로 개발자들의 고통스러움이 시작되는 부분이기도......~~   
다시, 크로스 브라우징이란 브라우저마다 렌더링 하는 스타일이 다르기 때문에 개발자들은 코드를 짤 때 모든 브라우저에서 동일하게, 그리고 문제가 없이 동작할리가 없다는 것, 즉 `크로스 브라우징`을 염두하고 코드를 작성해야 한다는 의미다. 
- 이런 크로스 브라우징 이슈를 해결 하기 위해 jQuery 또는 Polyfill과 같은 라이브러리를 사용한다든가, '-webkit-', '-moz-' 등과 같은 [prefix(접두사)]를 사용한다든가 하는 방법들이 등장하였다.   
이런 해결법 중에 하나가 바로 우리가 오늘 살펴보았던 `reset.css` 또는 `normalize.css`의 사용이다. 
- 마무리 ....
	- 오늘날 PC 뿐만 아니라 다양한 기종 또는 플랫폼에 따라 다르게 구현되는 웹 사이트를 비슷하게 렌더링 되게 하는 것은 우리 프론트 엔드 개발자의 역할일 것이다. 그렇기 때문에 사이트를 구현을 할 때 어느 한 쪽에서는 최적화가 잘 되어 있지만 어느 한 쪽은 그렇지 못하는. 그런 상황이 생기지 않도록 우리는 많은 고민과 노력을 해야할 것이다. 그래서 궁극적으로 우리는 어떤 브라우저에서라도 사용자가 방문했을 때 정보로서의 소외감을 느끼지 않도록 해야하겠다.  

[prefix(접두사)]: https://mommoo.tistory.com/58
[W3C]: https://ko.wikipedia.org/wiki/W3C
---

<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://webpublishingonline.com/entry/Reset-CSS와-Normalize-CSS가-필요한-이유
	- https://velog.io/@seochanh/00003
	- https://wooooooak.github.io/frontend/2018/08/17/크로스브라우징/
	- https://soma0sd.tistory.com/80
	- http://hleecaster.com/css-reset-normalize/
	- https://webisfree.com/2017-09-18/reset-css-base-css-common-css-언제-어떻게-사용하는가
	- https://webpublishingonline.com/entry/Reset-CSS와-Normalize-CSS가-필요한-이유
http://hleecaster.com/css-reset-normalize/
	- https://www.jsdelivr.com/package/npm/reset-css      
	(이거 reset.css 파일로 추천!)

</details>
