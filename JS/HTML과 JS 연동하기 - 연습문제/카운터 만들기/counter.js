// 확인차! 
// console.log('loaded!');


const $showNum = document.querySelector('.show-number');
const $plusBtn = document.querySelector('.plus-one'); 
const $minusBtn = document.querySelector('.minus-one');

// console.log($showNum);   // <span class="show-number">0</span>
// console.log($plusBtn);   // <button class="plus-one">+ 1</button>
// console.log($minusBtn);  // <button class="minus-one">- 1</button>


// console.log($showNum.innerText);    // 0
// console.log($plusBtn.offsetTop);    // 0  --> 해석: 탑의 값은 0이다
// console.log($minusBtn.className);   // minus-one   --> 해당 요소으 ㅣ클래스 이름을 알고싶을 때 사용!



// 기능 구현 
const increase = function () {
	let num = Number($showNum.innerText);
	num += 1; 
	// console.log(String(num));
	$showNum.innerText = String(num);
};
const decrease = function () {
	let num = Number($showNum.innerText);
	num -= 1;
	// console.log(String(num));
	$showNum.innerText = String(num);
};


// 이벤트를 설정해보자! 클릭 이벤트! 
$plusBtn.addEventListener('click', (event) => {
	increase();
})

$minusBtn.addEventListener('click', (event) => {
	decrease();
})





// 강사님's solution 
// const number = document.querySelector('.show-number');
// const increase = document.querySelector('.plus-one'); 
// const decrease = document.querySelector('.minus-one');

// // 만약 on이라는 접두사가 붙은 이벤트가 존재하면... 그걸 활용해서 아래와 같이 만들어 주면된다!
// // 대상.on~~ = () => {};     --> 이런 식으로!!  
// increase.onclick = () => {
// 	const current = parseInt(number.innerText, 10);   // 첫번째 인자는 문자열, 두번째로 오는 인수는 몇진수로 나타내는 지를 설정...
// 	number.innerText = current + 1;
// 	// console.log('increase가 클릭됨!')

// };

// decrease.onclick = () => {
// 	const current = parseInt(number.innerText, 10);   // 첫번째 인자로 오는 문자열을 10진수의 숫자로 변환해주곘다는 것~ 
// 	number.innerText = current - 1;	
// 	// console.log('decrease가 클릭됨!')
// };