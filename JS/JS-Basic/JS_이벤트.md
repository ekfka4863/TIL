---
date: 2021-04-23-Friday 
---

# 이벤트 처리하기 
- 모든 요소는 이벤트를 발생하는데 `addEventListener`를 통하여 해당 요소에서 발생하는 이벤트를 '듣고(Listen)' 원하는 로직을 수행할 수 있다. 
- `addEventListener`는
	- 첫 번째 인자로 문자열을 전달하는데 이 문자열이 `이벤트 종류(type)`이다. 
	- 두 번째 인자로 첫 번째 인자로 전달한 이벤트가 발생할 경우 호출될 함수를 전달한다.



	// 요소에 접근하기 
	// 이벤트 리스너와 콜백으로 기능 구현하기 