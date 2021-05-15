---
date: 2021-05-15-Saturday
---

# SASS 문법: 02. 데이터 종류(Data Types)
- SASS(SCSS)는 아래와 같은 **(7가지의) 데이터 유형**을 지원한다;    

|데이터|설명|예시|
| :---: | :---: | :---: |
|**Number**|_숫자 <br> (~~단위가 붙을 수도 있고 없을 수도 있음~~)_|1, .82, 20px, 2em…|
|**String**|_문자<br> (~~따옴표를 사용하는 경우와 사용하지 않는 경우~~)_|bold, relative, "/images/a.png", "dotum"|
|**Color**|_컬러. 색상 표현_|red, blue, #FFFF00, rgba(255,0,0,.5)|
|**Boolean**|_논리 <br> (~~참/거짓~~)_|true, false|
|**Null**|_아무것도 없음 <br> (~~null을 CSS 속성으로 쓰면 컴파일 하지 않는다~~)_|null|
|**List**|_공백이나 `,`로 구분된 값의 목록. <br> JS의 배열과 유사하다._|(apple, orange, banana), apple orange|
|**Map**|_Lists와 유사하나 값이 `Key: Value`형태.   <br> JS의 객체와 유사하다 <br>(~~단, 괄호가 반드시 있어야 인식에 문제가 없다~~)._|(apple: a, orange: o, banana: b)|
<!-- |**Function**|_함수 참조. SASS(SCSS)에서 제공하는 내장함수와 임의로 작성할 수 있는 함수를 제공한다._|@function| -->

<br>
<br>
<br>

### SASS에서 데이터 종류들이 갖는 특징들 (주의사항들)

	📌 Numbers: 숫자에 단위가 있거나 없다  
	📌 Strings: 문자에 따옴표가 있거나 없다  
	📌 Nulls: 속성값으로 `null`이 사용되면 컴파일 하지 않는다 (/값이 무시된다)  
	📌 Lists: `()`를 붙이거나 붙이지 않는다    
	📌 Maps: `()`를 반드시 붙인다   

---

<details>
<summary>CLICK ME!</summary>

- cf.
	-	https://heropy.blog/2018/01/31/sass/
	- https://abcdqbbq.tistory.com/40
	- https://gold-dragon.tistory.com/182
	- https://velog.io/@cash2cash/sassscss
	- https://velog.io/@yj6151122/CSS-Preprocessor-SASS
	- https://velog.io/@ylem76/SCSS-%EC%8B%A4%EC%8A%B5-%ED%99%98%EA%B2%BD-%EA%B0%96%EC%B6%94%EA%B8%B0
	- https://poiemaweb.com/sass-script

</details>

---