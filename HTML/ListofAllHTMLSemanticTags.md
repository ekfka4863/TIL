---
date: 2021-04-04-Sunday
---

# List of All HTML Semantic Tags

## What are Semantic Elements? 

## List of old semantic elements

## List of new semantic elements

## Why do I need to use semantic HTML5 tags?
https://www.freecodecamp.org/news/semantic-html5-elements/
https://www.semrush.com/blog/semantic-html5-guide/
https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/


---
> (Examples of) HTML5 Semantic Tags Structure (권장사항 -> 예시를 통해서...)

<!-- You will see examples later, but a brief overview of these would be: 

- Header element – The <header> element defines content that should be considered the introductory information of a page or section.

- Nav element – Main navigation menu links would all be placed in a <nav> tag. But sub navigation menus elsewhere on the page could also get one.

- Main tag – The body of a page should go in the <main> tag – not sidebars and main navigation. There should be only one per page.

- Article element – The <article> element defines self-contained content that could stand independently of the page or site it’s on. For example, a blog post.

- Section element – Using <section> is a way of grouping together nearby content of a similar theme. A section tag differs to an article tag because it isn’t necessarily self-contained.

- Aside element – An <aside> element defines content that’s less important. It’s often used for sidebars – areas that add complementary but not vital information.

- Footer element – You would use <footer> at the base of a page or section. It might include contact information and some site navigation.

https://www.semrush.com/blog/semantic-html5-guide/

 -->


- 목록 
	1.
	2.
	3.
	4.
	5.
	6.
	7.
	8.
	9.
	10.

---
- cf.
  - 
	-
	-
	-

---

HTML 문서의 기본 태그 ...
--> <html>, <head>, <title>, <body>
--> these are 4 basic HTML tags needed to create a web page...

그리고 head 안에 필수적으로/필요에 따라 ...
--> <style>, <script>, <link>, <meta>, <base>, <noscript>  (여기 원래 타이틀도 포함... 근데 위에서 언급했으니 패스...)

그리고 body 안에 의미가 없는 태그와 ... 
--> <div>, <span>
--> <dl>, <dt>, <dd> (cf. https://aoa.gitbook.io/skymimo/aoa-2019/tips-2/dl-dt-dd-.     --> 웬만하면 ul로 대체하길 권고...)
--> <table>, <caption>/<thead>, <th>, <tr>, <td> 
caption vs thead 
http://www.tcpschool.com/html-tags/thead
thead는 th 가 아니다 (?)
http://www.tcpschool.com/html-tags/th
thead가 있으면 <tbody>도 있다
http://www.tcpschool.com/html-tags/tbody
thead가 있으면 <tfoot>도 있다 
http://www.tcpschool.com/html-tags/tfoot

--> <colgroup>, <col>
--> <>
--> <datelist> - <data>

그리고 body 안에 의미가 있는 태그와 ... 
--> <hgroup>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
--> <ol>, <ul>, <li>, <menu>
--> <header>, <main>, <article>, <section>, <aside>, <figure> - <figcaption> - <img>, <picture> (- <source> - <img>), 
img or picture? the difference between those two tags 
https://css-tricks.com/
http://www.tcpschool.com/html-tags/picture ( 이거 중요! )responsive-images-youre-just-changing-resolutions-use-srcset/
https://blog.bitsrc.io/why-you-should-use-picture-tag-instead-of-img-tag-b9841e86bf8b
http://codeanddecode.net/web-performance/picture-tags-vs-img-tags-their-uses-and-misuses/

<details> - <summary>(> ul > li*n), , <nav> ,<footer>, <address>, <small>
--> <form>, <legend>, , <fieldset>, <input>, <label>, <button>
--> (<input> - ) <output>
http://www.tcpschool.com/html-tags/output
http://www.tcpschool.com/examples/tryit/tryhtml.php?filename=html_ref_tag_output_01

--> <code>, <samp>, <kbd>, <var>, <pre>
https://aboooks.tistory.com/283
https://webisfree.com/2014-08-20/[html-code-%ED%83%9C%EA%B7%B8%EC%9D%98-%EC%93%B0%EC%9E%84-%EB%B0%8F-%ED%99%9C%EC%9A%A9



그리고 body 안에 들가는 기타 등등의 빈도 높은 태그들... 및 아리까리하는 태그들 ... 
--> <a>, <p>, <textare>, <br>, <hr>, <iframe>, <video>, <audio>, <time>
--> <blockquote>, <q>, <cite>
They are not presentational elements — blockquote represents a block quotation, q represents an inline quotation, and cite represents a reference to a name, work, standard, URL, etc.
--> <mark>, <i>, <em>, <strong>, <b>, <u>, <s>, <sub>, <sup>,
<del>, <ins>

https://stackoverflow.com/questions/14741262/when-to-use-strong-em-or-mark/14741437#14741437
https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb

http://www.tcpschool.com/html-tag-attrs/del-datetime  (<ins datetime="…">  <del datetime="…">)
--> <dialog> (- <form> )
https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog

--> <abbr>, <def>
--> <bdi>, <bdo>
http://www.tcpschool.com/html-tags/bdi
http://www.tcpschool.com/html-tags/bdo

--> (<img> -) <map>, <area> 
https://rgy0409.tistory.com/2881
https://webactually.com/2020/07/13/html-%EB%B0%98%EC%9D%91%ED%98%95-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%AC%B8%EB%B2%95-%EA%B0%80%EC%9D%B4%EB%93%9C/

--> <meter>
--> <select> - <optgroup> - <option>

?? 
track
progress 
http://www.tcpschool.com/html-tags/progress

object / pram 
http://www.tcpschool.com/html-tags/object
http://www.tcpschool.com/html-tags/param
var 
http://www.tcpschool.com/html-tags/var


template
http://www.tcpschool.com/html-tags/template (다른 태그와 다른점?? )
noscript
embed

canvas

rp
rt

ruby

~~samp->http://www.tcpschool.com/html-tags/samp~~


tt / tr

wbr
----
<article> 	Defines independent, self-contained content
<aside> 	Defines content aside from the page content
<details> 	Defines additional details that the user can view or hide
<figcaption> 	Defines a caption for a <figure> element
<figure> 	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<footer> 	Defines a footer for a document or section
<header> 	Specifies a header for a document or section
<main> 	Specifies the main content of a document
<mark> 	Defines marked/highlighted text
<nav> 	Defines navigation links
<section> 	Defines a section in a document
<summary> 	Defines a visible heading for a <details> element
<time> 	Defines a date/time



cf. 
http://www.tcpschool.com/html-tags/s
https://pridiot.tistory.com/6
https://www.w3schools.com/html/html5_semantic_elements.asp
https://developer.mozilla.org/ko/docs/Web/HTML/Element/hgroup