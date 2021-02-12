> # Day 1: What is python?

>> - 파이썬은 무엇일까? <br>
  
파이썬의 철학이 담긴 파이썬 계명을 알고싶다면, 콘솔창에 import this를 치면된다.

<img src="./python_import_this.png" alt="python import this module" width=500 height=250 >
<br>
<br>

>> - 해석: 

  ```
  아름다움이 추함보다 낫다.
  분명한 것이 함축적인 것보다 낫다.
  단순함이 복잡함보다 낫다.
  복잡함이 꼬인 것보다 좋다.
  펼쳐놓은 것이 중첩된 것보다 좋다. 
  드문드문한 것이 조밀한 것보다 좋다.
  가독성은 중요하다.
  특별한 경우라는 것은 규칙을 꺨 정도로 특별한 것이 아니다. 
  하지만, 실용성은 순수성을 이긴다.
  오류는 절대 조용히 지나가선 안된다.
  명시적으로 오류를 숨기려는 의도가 아니라면,
  모호함을 대면한다면, 이를 유추하겠다는 유혹을 버려라. 
  어떤 일을 하는 하나의 -- 그리고 될 수 있다면 유일한 -- 명확하고, 바람직하며, 유일한 방법이 존재해야한다.
  비록 그대에게 그 방법이 처음에는 보이지 않을지라도, 
  아예 안하는 것보다 지금하는게 낫다. 
  아예 안하는 것이 지금 *당장* 하는 것보다 나을 때도 자주 있지만.
  구현 결과를 설명하기 어렵다면, 그 아이디어는 나쁘다. 
  구현 결과를 설명하기 쉽다면, 그 아이디어는 좋은 아이디어일 수 있다. 
  네임스페이스는 대박 좋은 아이디어다 더 적극적으로 이용하자!
  ```
<hr>

>> Python 설치

| Windows |   | OS X |
|:---:|:---:|:---:|
|||보통 맥에는 python 2.x버전이 자동으로 설치되어 있다. 하지만 최신버전 python3이 필요하다면 별도로 설치해야 한다.|
|www.python.org에서 다운로드 메뉴 - Python 3.5이상 선택해서 다운로드||www.python.org에서 다운로드 메뉴 - Python 3.5이상 선택해서 다운로드|
|||다운로드 받은 폴더에서 .pkg파일을 실행.|
|||"확인되지 않은 개발자가 배포했기 때문에 열 수 없습니다"라는 메세지가 뜨면 승인을 누르고 다시 한번 파일을 실행|
|설치 확인||설치 확인|
|- 윈도우키 + R을 눌러서 나오는 창에 powershell이라고 치고, 확인을 눌러서 powershell실행||계속/동의/설치 버튼을 눌려주면서 설치||- command + space를 눌러서 나오는 창에 터미널을 치고, 엔터를 눌러서 터미널실행|
|- powershell화면에서 python이라고 입력해서 오류가 나오지 않으면 설치 성공||- 터미널화면에서 python3이라고 입력해서 Python 3.5.1 (v3.5.1:37a07cee5969, Dec 5 2015, 21:12:44)와 비슷한 글이 뜨면 성공|


<hr>

>> Jupyter 설치
```
$ pip install jupyter
$ pip list

$ jupyter notebook
```
- 이때, 만약 jupyter notebook이 작동하지 않으면 jupyter-notebook으로 실행해 볼 것! 


<hr>

>> Python Numbers & Math 
```
print(3 + 7)
print(10 - 3)
print(15 / 7)
print(34 * 100)

print(15 / 7)
print(15 / 5)
type(15 / 5)

print(15 // 5)
type(15 // 5)

print(7 % 3)

print(15 ** 3)

print(34 * 100)
print(3 * 2.5)
type(3 * 2.5)
```
<hr>

>> Comparison
```
print(3 < 7)
print(10 < 3)
print(15 > 7)
print(3 >= 3)
print(3 <= 10)
print(34 == 100)
print(34 != 100)
```
<hr>

>> Variable
```
print("hello python!")
hello = "hello"
python = "python!"
print(hello, python)



num1 = 14
num2 = 5

print(num1+num2)
print(num1-num2)
print(num1*num2)
print(num1/num2)
```