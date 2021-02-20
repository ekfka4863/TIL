<h1> TIL(20200220) - HTML5 body에 들어가는 태그들 정리 </h1>

> HTML5 body에 들어가는 태그

<br>

>> 이미지 태그 
- HTML 페이지 위에 이미지를 넣고 싶을 때는 img 태그를 사용한다. 
- img 태그를 입력하는 것은 이제 작성자가 페이지에 이미지를 넣겠다고 하는 것은 맞지만, 어떤 이미지를 사용할지는 아직 지정된 것이 아니다. 어떠한 이미지를 사용할 것인지 표시하려면 img 태그의 속성들이 필요하다. 
- img 태그의 속성은 다양하지만 가장 중요한 것들은 아래와 같다: 

속성 이름 | 설명
:---:|:---:
src | 이미지의 경로 지정
alt | 이미지가 없을 때 나오는 텍스트 
width | 이미지의 너비 지정 
height | 이미지의 높이 지정 

- 아래와 같은 코드를 실행하면 이미지가 하나 페이지에 추가된다. 만약 이미지가 정상적으로 출력되지 못하면 alt 속성에 입력한 글자가 뜬다. 
  ```
  <body>
        <img src="https://www.qantas.com/content/travelinsider/en/explore/australia/queensland/sunshine-coast/best-sunshine-coast-beaches/jcr:content/galleryMain/gallery/galleryItems/8.img.480.medium.jpg/1532404269809.jpg" alt="Sunshine Beach" width="300"/>
    </body>
  ```
    <body>
    <img src="https://www.qantas.com/content/travelinsider/en/explore/australia/queensland/sunshine-coast/best-sunshine-coast-beaches/jcr:content/galleryMain/gallery/galleryItems/8.img.480.medium.jpg/1532404269809.jpg" alt="Sunshine Beach" width="300"/>
    </body>

<hr>

>> 오디오 태그 
- 오디오 태그는 웹 브라우저에서 플러그인의 도움 없이 음악을 재생할 수 있게 만들어주는 HTML5 태그이다. 
- img 태그와 사용 방법이 굉장히 비슷하다.
<br>

--- page 84부터 다시 ... ---