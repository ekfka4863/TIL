<h1> TIL(20200221) - HTML5 body에 들어가는 태그들 정리 </h1>

> HTML5 body에 들어가는 태그

<br>

>> 글자 태그 
- 글자 태그는 웹 페이지에서 가장 많은 비중을 찾이하는 태그이다. 글자 태그는 제목, 본문 등의 내용을 담아낸다. 
<br>

>>> 제목 글자 태그

태그 이름 | 설명
:---:|:---:
h1  | 첫 번째로 큰 제목 글자 태그  
h2  | 두 번째로 큰 제목 글자 태그 
h3  | 세 번째로 큰 제목 글자 태그 
h4  | 네 번째로 큰 제목 글자 태그 
h5  | 다섯 번째로 큰 제목 글자 태그 
h6  | 여섯 번째로 큰 제목 글자 태그 

<br>

- h1 태그부터 h6 태그의 h는 heading을 의하며 각각의 숫자는 크기 및 우선 순위를 나타낸다. 

    <h1>HEADING 1</h1>
    <h2>HEADING 2</h2> 
    <h3>HEADING 3</h3>
    <h4>HEADING 4</h4>
    <h5>HEADING 5</h5>
    <h6>HEADING 6</h6>

>>> 본문 글자 태그 

태그 이름 | 설명
:---:|:---:
p  | 본문 글자 태그  
br  | 줄바꿈 태그 (개행)  
hr  | 수평 줄 태그 (가로로 그어지는 하나의 줄)

<br>

- p 태그는 paragraph(=단락)의 줄임말이다. 

<hr><hr>

>> 앵커 태그 

- HTML은 'Hypertext Markup Language'의 약자이다. 여기서 가장 중요한 포인트는 H가 의미하는 'Hypertext'이다. 
- 하이퍼텍스트란 사용자의 선택에 따라 특정한 정보와 관련된 부분으로 이동할 수 있게 조직화된 문서를 의미한다. 
- 이런 조직화된 문서 형태가 가능한 것은 바로 앵커(Anchor) 태그 덕분이다. 앵커 태그는 서로 다른 웹 페이지 사이를 이동하거나 웹 페이지 내부에서 특정한 위치로 이동할 때 사용하는 태그이다. 
- 앵커 태그는 href를 속성으로 갖는다.
<br>

태그 이름 | 설명
:---:|:---:
a    | 앵커태그

<br>
  
- cf. 페이지 내부이동도 앵커 태그 사용한다. 
  ```
  <body>
    <a href="#alpha">Move to Alpha</a>
    <a href="#beta">Move to Beta</a>
    <a href="#gamma">Move to Gamma</a>
    <hr>
    <h1 id="alpha">Alpha</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <h1 id="beta">Beta</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <h1 id="gamma">Gamma</h1>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
  </body>
  ```
  - a 태그를 이용하면 현재 페이지 내부에서 원하는 장소로 이동 할 수 있는데, 그 방법은 이동하기를 원하는 태그에 id 속성을 부여하고, a태그의 href 속성에 #이동하려는 id속성값 을 입력하면 된다. 

<hr><hr>

>> 목록 태그

- 웹페이지에서 메뉴와 같은 목록을 설정할 때 사용하는 태그가 바로 목록 태그이다. 
- 기본적으로 목록을 만들 때 사용하는 태그들은 아래와 같다. 
  
  태그 이름 | 설명 
  :---:|:---:
    ul | 순서가 없는 목록 태그 (unordered list) 
    ol | 순서가 있는 목록 태그 (ordered list)
    li | 목록 요소 

- 태그들은 아래와 같이 사용된다. 
    ```
    <body>
        <h1>ol tag</h1>
        <ol>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </ol>
        <h1>ul tag</h1>
        <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
    </body>
    ```
- 위와 같은 코드를 실행하면 아래와 같이 구현된다. 
    <body>
        <h1>ol tag</h1>
        <ol>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </ol>
        <h1>ul tag</h1>
        <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
    </body>

    <hr><hr>

    >> 테이블 태그 

    - 테이블 태그는 HTML 페이지에서 표를 만들 때 사용하는 태그이다. 
    - 테이블을 만들 때 사용하는 태그들은 아래와 같다. 
    태그 이름 | 설명 
    :---:|:---:
    tr (table row) | 표 내부의 행 태그 
    th (table header) | 행 내부의 제목 셀 태그 
    td (table data) | 행 내부의 일반 셀 태그 

- 태그들은 아래와 같이 사용된다. 
    ```
    <body>
        <table border="1">
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </table>
    </body>
    ```
- 위와 같은 코드를 실행하면 아래와 같이 구현된다. 
    <body>
        <table border="1">
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            <tr>
                <td>Data 1</td>
                <td>Data 1</td>
            </tr>
            <tr>
                <td>Data 2</td>
                <td>Data 2</td>
            </tr>
        </table>
    </body>
<br>

- 테이블 태그의 속성 
  
  속성 이름 | 설명
  :---:|:---: 
  border | 표의 테두리 두께를 지정

- th 태그와 td 태그의 속성 
  
  속성 이름 | 설명
  :---:|:---: 
  rowspan | 셀의 높이 지정
  colspan | 셀의 너비 지정 

- 태그들은 아래와 같이 사용된다. 
    ```
    <body>
        <table border="1">
            <tr>
                <th colspan="3">Table Data</th>
                <th rowspan="3">Table Data</th>
            </tr>
            <tr>
                <td>Table Data</td>
                <td rowspan="2">Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </table>
    </body>
    ```
- 위와 같은 코드를 실행하면 아래와 같이 구현된다. 
    <body>
        <table border="1">
            <tr>
                <th colspan="3">Table Data</th>
                <th rowspan="3">Table Data</th>
            </tr>
            <tr>
                <td>Table Data</td>
                <td rowspan="2">Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </table>
    </body>
<br>
<hr><hr>

- 다음 포스트에서 HTML5 body에 들어가는 태그들을 더 정리해 보자! See you soon : )
