---
date: 2021-05-03-Monday
---

# Truthy와 Falsy 

- 자바스크립트에서 '문법'까지는 아니지만, 알아둬야 하는 개념이 바로 `Truthy와 Falsy한 자료형`들이다.   
(cf. 어떤 자료형이 `falsy`하고 어떤 자료형이 `truthy`한지 웬만하면 외우자!)  
- **Falsy한 값들**:
```javascript
	console.log(undefined);
	console.log(null);
	console.log(false);
	console.log(0);
	console.log(NaN);     // Not a Number
	console.log("");
```
- **Truthy한 값들**:
```javascript
	console.log(true);
	console.log({});
	console.log("0");
	console.log([]);

	// Falsy 한 값 앞에 느낌표를 붙여주면 true로 전환된다.
	console.log(!undefined);
	console.log(!null);
	console.log(!false);
	console.log(!0);
	console.log(!NaN);
	console.log(!'');
```

<br>

📌 Tip!   
- Falsy한 값을 외우고, Falsy값을 제외한 나머지는 전부 Truthy로 간주하기~! 

	|<u>Falsy</u>|<u>Truthy</u>|
	|:---:|:---:|
	|**undefined**||
	|**null**||
	|**false**||
	|**0 (+0, -0)**||
	|**NaN**||
	|**""**||

<br>

---
<details>
<summary>CLICK ME!</summary>

- cf. 
	- https://velog.io/@yj6151122/Javascript-Truthy%EC%99%80-Falsy
	- https://yeon-js.tistory.com/14
	- https://learnjs.vlpt.us/useful/02-truthy-and-falsy.html?q=

</details>

---