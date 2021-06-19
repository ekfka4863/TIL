---
date: 2021-06-19-Saturday
---

# LifeCycle Method

<br>

> 라이프사이클 메서드의 이해 
-  React 컴포넌트는 생명 주기가 있다.   
생애 주기 또는 라이프사이클(Life cycle)이라고도 표현한다.   
- `LifeCycle Method`는 한국어로 "생명주기 메서드"라고 부른다.   
<u>생명주기 메서드는 컴포넌트가 브라우저상에 나타나고(마운트), 업데이트되고, 사라지게(언마운트) 될 때 호출되는 메서드들이다. 추가적으로 컴포넌트에서 에러가 났을 때 호출되는 메서드도 있다.</u> 
- 라이프사이클 메서드는 종류는 총 9가지인데, **Will** 접두사가 붙은 메서드는 어떤 작업을 작동하기 **전**에 실행되는 메서드이고, **Did** 접두사가 붙은 메서드는 어떤 작업을 작동한 **후**에 실행되는 메서드이다.    
이 메서드들은 우리가 컴포넌트 클래스에서 덮어 써 선언함으로써 사용할 수 있다.
- 유의사항: 생명주기 메서드는 클래스형 컴포넌트에서만 사용 할 수 있다. 
- 팁! 
	- 라이프사이클 메서드는 앞으로 사용 할 일이 별로 없을 것.  
	다만, 어떤 것들이 있는지만 알아두고 나중에 사용해야 할 일이 있다면 '메뉴얼'을 보고 사용할 수 있게만 학습할 것! 

<br>

> 라이프사이클 메서드 살펴보기 
- `라이프사이클`은 <u>1.마운트, 2.업데이트, 그리고 3.언마운트</u> 카테고리로 나뉘는데, 이 큰 카테고리에 따라 호출하는 메서드들이 다르다;    
	- 1. 마운트  	
		- `constructor`
		- `getDerivedStateFromProps`
		- `render`
		- `componentDidMount`
	- 2. 업데이트 
		- `getDerivedStateFromProps`
		- `shouldComponentUpdate`
		- `render
		- `getSnapshotBeforeUpdate`
		- `componentDidUpdate`
	- 3. 언마운트 
		- `componentWillUnmount`

<br>

>> render 메서드 
- `render` 메서드는 컴포넌트의 모양새를 정의한다.  
우리가 준비한 UI 컴포넌트를 (리)렌더링하는 가장 중요한 메서드기 때문에, 라이프사이클 메서드 중 유일한 필수 메서드이다.    
- 이 메서드 안에서 this.props와 this.state에 접근할 수 있으면, 리액트 요소를 반환(return)한다.   

<br>

>> constructor 메서드 
- `constructor` 메서드는 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 가장 먼저 실행되는 메서드이다.   
이 메서드에서는 초기 state를 정할 수 있다. 

<br>

>> getDerivedStateFromProps 메서드 
- `getDerivedStateFromProps`는 props로 받아온 것을 state에 넣어주고 싶을 때 사용한다.    
- 또는 컴포넌트의 props나 state가 바뀌었을때도 이 메서드가 호출된다. 
- 다른 생명주기 메서드와는 달리 앞에 static을 필요로 하고, 이 안에서는 this롤 조회 할 수 없다. 여기서 특정 객체를 반환하게 되면 해당 객체 안에 있는 내용들이 컴포넌트의 state로 설정이 된다.    
반면 null 을 반환하게 되면 아무 일도 발생하지 않습니다.
- 참고로 이 메서드는 컴포넌트가 처음 렌더링 되기 전에도 호출 되고, 그 이후 리렌더링 되기 전에도 매번 실행됩니다.

<br>

>> componentDidMount 메서드 
- `componentDidMount` 메서드는 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드다.   
이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태인데, 이 메서드 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다. 

<br>

>> shouldComponentUpdate 메서드 
- `shouldComponentUpdate` 메서드는 리렌더링 할지 말지를 결정하는 메서드다.     
- 이 메서드는 props 또는 state를 변경했을 때, 리렌더링을 시작할지의 여부를 지정하는데 이 메서드에서는 반드시 true 값 또는 false 값을 반환해야 한다.    
만약 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환한다. 이 메서드가 false 값을 반환한다면 업데이트 과정은 여기서 중지된다. 
- 이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있다. 
- 해당 메서드는 주로 최적화 할 때 사용한다. 

<br>

>> getSnapshotBeforeUpdate 메서드 
- `getSnapshotBeforeUpdate` 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.   
- 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있는데. 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다. (e.g. 스크롤바 위치 유지 etc.)

<br>

>> componentDidUpdate 메서드 
- `componentDidUpdate` 메서드는 리렌더링을 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드다.  
- 업데이트가 모두 끝난 직후이므로, DOM 관련 처리를 해도 무방하다. 여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다.    
- 또 3번째 파라미터로 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 조회 및 전달 받을 수 있다.

<br>

>> componentWillUnmount 메서드 
- `componentWillUnmount` 메서드는 컴포넌트를 DOM에서 제거할 때 실행한다.
- componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다. 

<br>

>> componentDidCatch 메서드 
- `componentDidCatch` 라는 생명주기 메서드는 컴포넌트 렌더링 도중에 에러가 발생했을 때, 어플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해준다.
- 사용방법;   
```javascript 
	componentDidCatch(error, info) {
		this.setState({
			error: true
		});
		console.log({error, info});
	}
```
- 여기서 error는 파라미터에 어떤 에러가 발생했는지 알려주면, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 준다.
- 유의!
	- 그러나 이 메서드는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수는 없고, 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있는 점을 유의해야 한다.   

<br>

>>> componentDidCatch 로 에러 잡아내기 / Sentry 연동
- `componentDidCatch` 메서드를 사용하여 리액트 애플리케이션에서 발생하는 에러를 처리하는 방법을 좀 더 자세히 알아보자.
- 먼저, 이번 튜토리얼을 진행 하기 위하여 새로운 프로젝트를 만들 것;    
```xml
	$ npx create-react-app error-catch
```
- 그 다음에, 해당 디렉터리를 에디터로 열고, 개발 서버를 시작할 것;    
```xml
	$ cd error-catch
	$ yarn start  
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
	- https://react.vlpt.us/basic/25-lifecycle.html
	- https://ko.reactjs.org/docs/react-component.html

	
</details>
---
