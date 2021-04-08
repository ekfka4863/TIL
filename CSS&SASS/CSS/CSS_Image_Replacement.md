---
date: 2021-03-03-수
---
Image Replacement  (미완)
=====

> IR 기법을 사용해야하는 이유? 

    CSS에서 IR 기법이란 텍스트 요소를 (보통은 header tag)를 이미지로 대체하는 기법을 의미한다.
    이에 대한 예시로는, 웹 페이지에 로고를 들수있다. 
    예를 들어, 웹접근성과 SEO를 고려해 봤을 때 \<h1> 태그를 넣는 것이 옳은 상황이지만 제목이 보이지 않게 하고 로고를 보이게 하고 싶다고 해보자. 이런 상황에서 사용할 수 있는 것이 바로 IR 기법이다. 

    오늘은 이런 IR technique에 대해 알아보는 시간을 가져보자! 

    (cf. display: none; 또는 text-indent: -9999px; 또는 margin: 0 0 0 -2000px; 같은 것은 다루지 않겠다. 이유는 스크린 리더가 그런 코드들은 감지하지 못하기 때문에 웹 접근성 측면에서 좋지 않은 코드라는 판단때문이다. )

> Technique #1

```html
<h1 class="technique-one">
    <span>Image Replacement</span>
</h1>
```

```css
.technique-one{
    width:350px;
    padding: 75px 0 0 0;
    height: 0;
    background: url() no-repeat;
    overflow: hidden;
}
```


---

> Technique #2

```html
<h1 class="technique-two">
    <span>Image Replacement</span>
</h1>
```

```css
.technique-two{
    width:350px;
    height: 75px;
    background: url() no-repeat;
}

.technique-two span{
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
}
```

---

> Technique #3

```html
<h1 class="technique-three">
    <span>Image Replacement</span>
</h1>
```

```css
.technique-three{
    width:350px;
    height: 75px;
    position: relative;
}

.technique-two span{
    background: url();
    positionL absolute;
    width: 100%;
    height: 100%;
}
```

---

> Technique #4

```html
<h1 class="technique-four">
    <span>Image Replacement</span>
</h1>
```

```css
.technique-four{
    width:350px;
    height: 75px;
    background: url() no-repeat;
    font-size: 1px;
    color: white;
}
```

---


cf. 
- https://css-tricks.com/snippets/css/standard-css-image-replacement/



---
<!-- 
---
date: 2021-04-07-Wednesday
---

# CSS Layout 


## Must know
- display; 기본적으로는 block, inline, none 
https://ko.learnlayout.com/display.html
inline-block, flex에 대해서는 나중에 ... 
(이때, inline-block 엘리먼트는 vertical-align 프로퍼티의 영향을 받는다?!)
- normal flow (일반 대열)
- position; static, relative, absolute, fixed, 
- flexbox
- float; right, left, both + clear & overflow
https://ko.learnlayout.com/column.html
https://homzzang.com/b/css-254
-
-
- (grid)


### 고정형 레이아웃 
### 가변형(/유동적) 레이아웃


## The position Property
https://homzzang.com/b/css-254
https://www.w3schools.com/css/css_positioning.asp



---
date: 2021-03-05-금 
---
# 가시속성 

- 가시속성이란? 
- display, visibility, opacity 속성 
- 



+ css 속성 중 박스모델이란???  -->