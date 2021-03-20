What Is MarkDown?
=====

> 마크다운이란 무엇일까? 
- HTML 문서는 .html이란 확장자가 붙어있고, CSS는 .css, 파이썬은 .py가 붙어있는 것처럼 .md라는 확장자가 붙은 문서를 종종 본적이 있을 것이다. 
- 바로 README.md라는 이름의 파일처럼 뒤에 .md라는 확장자가 붙은 문서가 마크다운 문법으로 작성된 파일이다. 
- 오늘은 이 마크다운이라는 것은 도대체 무엇이며, 어디에 활용되는지, 어떤 문법들을 가지고 있는지에 대하여 알아보는 시간을 갖도록 하겠다. 

---
---

> 마크다운의 장단점 

장점 | 단점
:---:|:---:
쉬운 문법| 마크업 랭귀지인 HTML과는 다르게 표준화된 문법이 없다 
쉬운 관리| 표준이 없기 때문에 지원하는 플랫폼에 따라 마크다운 문법을 해석하는 것이 상이하고, 사용자마다 마크다운 문법을 다르게 이해하고 사용할 수 있다
다양한 플랫폼과 프로그램에서 지원 가능| 마크다운은 HTML로 변환되서 적용되게 되는데, 이때 마크다운이 모든 HTML 마크업을 대신하지 못한다

--- 
---

> 마크다운 문법: 제목(Header)

        \<h1>부터 \<h2> 까지 제목을 표현할 수 있다

```
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
```
        위와 같이 작성하면 아래와 같이 적용된다

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

        또는 제목을 아래와 같이 작성하기도 한다 

```
제목 1
=====

제목 2 
-----
```
        위와 같이 작성하면 아래와 같이 적용된다

제목 1
======

제목 2 
------
<br>

--- 
---

> 마크다운 문법: 강조(Emphasis)

```
- 이탤릭체로 만들고 싶을 땐 *asterisks* 또는 _underscore_를 사용
- 두껍게 만들고 싶을 때 **asterisks** 또는 __underscore__를 사용 
- 글자를 취소하고 싶을 때는 ~~tilde~~를 사용
- 밑줄을 넣고 싶을 때는 <u>밑줄</u>을 사용
```

        이탤릭체로 만들고 싶을 땐 *asterisks(별표 하나)* 또는    _underscore_를 사용

        두껍게 만들고 싶을 때 **asterisks(별표 두개)** 또는 __underscore__를 사용 

        ~~글자를 취소하고 싶을 때~~는 tilde(물결무늬)를 사용

        <u>밑줄을 넣고 싶을 때</u>는 \<u>\</u>을 사용

        
--- 
---

> 마크다운 문법: 목록(List)

        HTML의 \<ol>, \<ul>에 해당하는 부분이다. 아래와 같이 작성한다

```
1. ordered list 
2. ordered list 
    - unordered list (sub)
    - unordered list (sub)
3. 
    3-1. ordered list (sub)
    3-2. ordered list (sub)
4.

- unordered list 
- unordered list 
    - hyphen
    * asterisks
    + plus sign 
```

        위와 같이 작성하면 아래와 같이 적용된다

1. ordered list 
2. ordered list 
    - unordered list (sub)
    - unordered list (sub)
3. 
    3-1. ordered list (sub)
    3-2. ordered list (sub)
4. ordered list 

<br>

- unordered list 
- unordered list 
    - hyphen
    * asterisks
    + plus sign 


--- 
---

> 마크다운 문법: 링크(Link)

        HTML의 \<a>에 해당하는 부분이다. 아래와 같이 작성한다

```
[GMAIL](https://gmail.com)

[NAVER](https://naver.com "링크설명(title)을 작성하세요.")

문서 내에서 일반 URL을 참고 자료로 기재하고 싶다면 꺾쇠 괄호 '<>' 안에 URL을 넣으면 된다.

구글 홈페이지: https://google.com 
네이버 홈페이지: <https://naver.com>



[참고 링크]: https://naver.com "네이버로 이동합니다!"
문서 안에 [참고 링크]를 적어놓으면 이런 효과도 기대할 수 있다!

```

        위와 같이 작성하면 아래와 같이 적용된다

[GMAIL](https://gmail.com)

[NAVER](https://naver.com "링크설명(title)을 작성하세요.")

<br>

문서 내에서 일반 URL을 참고 자료로 기재하고 싶다면 꺾쇠 괄호 '<>' 안에 URL을 넣으면 된다.

구글 홈페이지: https://google.com 

네이버 홈페이지: <https://naver.com>

<br>

[참고 링크]: https://naver.com "네이버로 이동합니다!"

문서 안에 [참고 링크]를 적어놓으면 이런 효과도 기대할 수 있다!

--- 
---

> 마크다운 문법: 이미지(Image)

        HTML의 \<image>에 해당하는 부분이다. 방금 위에서 살펴본 링크와 비슷하지만 앞에 ! 가 붙는다는 차이점이 있다. 아래와 같이 작성한다

```
![강아지 이미지](https://media.istockphoto.com/photos/cute-small-jack-russell-dog-in-a-car-watching-by-the-window-ready-to-picture-id1204469748?s=612x612 "이 이미지는 무료로 사용이 가능한 이미지입니다!") 

![로고][logo]
[logo]: https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg "icecream" 
```

        위와 같이 작성하면 아래와 같이 적용된다

![강아지 이미지](https://media.istockphoto.com/photos/cute-small-jack-russell-dog-in-a-car-watching-by-the-window-ready-to-picture-id1204469748?s=612x612 "이 이미지는 무료로 사용이 가능한 이미지입니다!")  

![로고][logo]

[logo]: https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg 

---
---
> 마크다운 문법: 이미지에 링크

        마크다운 문법으로 삽입한 이미지에 링크를 걸려면 마크다운 이미지 코드를 링크 코드로 감싸주면 된다
```
[![Vue](https://media.vlpt.us/post-images/kameals/bc9cd740-05bb-11ea-93df-79d77f6fc891/1Vc0m5dS9SlhieEbR6n8wFg.jpeg)](https://kr.vuejs.org/)
```

        위와 같이 작성하면 아래와 같이 적용된다

[![Vue](https://media.vlpt.us/post-images/kameals/bc9cd740-05bb-11ea-93df-79d77f6fc891/1Vc0m5dS9SlhieEbR6n8wFg.jpeg)](https://kr.vuejs.org/)

---
---
> 마크다운 문법: 코드 강조 

        인라인 요소와 블록 요소에 따라 강조하는 방식이 약간씩 다르다. 
        인라인 요소는 ` `를 통해서, 그리고 블록 요소는 ``` ``` 안에 강조할 내용을 담는다. 

```
<인라인 요소>

    `어떤 것을 강조`해볼까? `어떻게 강조`가 되는가? 

<블록 요소>
    ```html
    <a href="#" target="_blank">INDEX</a>
    ```

    ```css
    .list > li {
        position: absolute;
        top: 0;
        right: 0;
    }
    ```
    ```python
    string = "Python is simple and beautiful"
    print(string)
    ```

    ```
    Life is short, so `do what you really want to do`...!
    ```

    Life is short, so `do what you really want to do`...!
```

        위와 같이 작성하면 아래와 같이 적용된다



`어떤 것을 강조`해볼까? `어떻게 강조`가 되는가? 


```html
<a href="#" target="_blank">INDEX</a>
```

```css
.list > li {
    position: absolute; 
    top: 0;
    right: 0;
}
```

```python
string = "Python is simple and beautiful"
print(string)
```

```
    Life is short, so `do what you really want to do`...!
```

Life is short, so `do what you really want to do`...!

---
---
> 마크다운 문법: 표(Table)

        HTML의 \<table>에 해당하는 부분이다. 아래와 같이 작성한다

- 헤더 셀을 구분할 때 3개 이상의 -(hyphen/dash) 기호가 필요하다
- 헤더 셀을 구분하면서 :(Colons) 기호로 셀(열/칸) 안에 내용을 정렬할 수 있다
- 가장 좌측과 가장 우측에 있는 |(vertical bar) 기호는 생략 가능하다
        
``` 
| 이름 | 나이 | 성별 | 국적 |
| --- | :---: | ---: | :--- |
|`로렌`| 23세 | *W* | **미국** |
|`존`| 38세 | *M* | __영국__ |
|`샬롯`| 11세 | *W* | **스위스** |
|`타리나`| 59세 | *W* | __네덜란드__ |
``` 

        위와 같이 작성하면 아래와 같이 적용된다

| 이름 | 나이 | 성별 | 국적 |
| --- | :---: | ---: | :--- |
|`로렌`| 23세 | *W* | **미국** |
|`존`| 38세 | *M* | __영국__ |
|`샬롯`| 11세 | *W* | **스위스** |
|`타리나`| 59세 | *W* | __네덜란드__ |


---
---
> 마크다운 문법: 수평선(Horizontal Rule)

        HTML의 \<hr>에 해당하는 부분이다. 아래와 같이 작성한다

        
``` 
`수평선`을 마크다운으로 어떻게 표현할까? 

--- (Hyphen x 3)
 이렇게 작성하면 되지용! 

*** (Asterisk x 3)
 Soooooo simple :) 

___ (Underscore x 3)
 앞으로 잘 사용해보자! 

``` 

        위와 같이 작성하면 아래와 같이 적용된다

<br>

`수평선`을 마크다운으로 어떻게 표현할까? 

--- 
(Hyphen x 3)

<u>이렇게 작성하면 되지용!</u> 

*** 

(Asterisk x 3)

*Soooooo* **simple** :) 

___ 

(Underscore x 3)

앞으로 ~~꼭 잘~~ 사용해보자! 


---
---
> 마크다운 문법: 줄바꿈(Line Breaks)

        HTML의 \<br>에 해당하는 부분이다. 아래와 같이 작성한다

        
``` 
이제는 우리가 헤어져야 할 시간 
다음 시간에 또 만나요~ 

이제는 우리가 헤어져야 할 시간 
다음에 다시 만나요!!          <!-- 띄어쓰기 2번-->


헤어지는 마음이야 아쉽지만 
웃으면서 헤어져용~~~ <br>다음에 또 만날 날을 약속하면서 이제 그만 헤어져욥!
``` 

        위와 같이 작성하면 아래와 같이 적용된다

<br>

이제는 우리가 헤어져야 할 시간 
다음 시간에 또 만나요~ 
이제는 우리가 헤어져야 할 시간 
다음에 다시 만나요!!         
<!-- 띄어쓰기-->
헤어지는 마음이야 아쉽지만 웃으면서 헤어져용~~~ <br><br>다음에 또 만날 날을 약속하면서 이제 그만 헤어져욥!

---
---