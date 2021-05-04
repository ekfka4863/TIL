// 잘 연결되었는지 콘솔에서 확인! 
// console.log('linked!');



// HTML 요소에 접근하기 
const $openMoreTestMenuBtn = document.querySelector('.open-more-test-menu-btn');
const $closeMoreTestMenuBtn = document.querySelector('.close-more-test-menu-btn');
const $startTestBtn = document.querySelector('.start-test-btn');
const $moreTestMenuList = document.querySelector('.more-test-menu-hidden-wrapper');
const $modalForTest = document.querySelector('.test-modal-wrapper');
const $quitTestBtn = document.querySelector('.quit-test-btn');
const $nextTestBtn = document.querySelector('.next-test-btn');
const $paragraphOnModal = document.getElementById('#test-modal-contents-paragraph');


// 이벤트 관련 함수 정의하기 



// 이벤트 등록 



// 메뉴 열기 버튼 클릭시 오픈   
$openMoreTestMenuBtn.addEventListener('click', () => {
	console.log('$openMoreTestMenuBtn');
	$moreTestMenuList.style.right = '0';
	// $moreTestMenuList.style.transitionDelay = '0.5s ease';
});

// 메뉴 닫기 버튼 클릭시 클로즈  
$closeMoreTestMenuBtn.addEventListener('click', () => {
	$moreTestMenuList.style.right = "-165px";
});

// start 버튼 클릭시 모달 창 오픈 
$startTestBtn .addEventListener('click', () => {
	$modalForTest.style.display= "block";

});

// quit 버튼 클릭시 모달 창 클로즈
$quitTestBtn.addEventListener('click', () => {
	$modalForTest.style.display= "none";
});

// // next 버튼 클릭시 다른 텍스트로 변경 
// $nextTestBtn.addEventListener('click', () => {
// 	$paragraphOnModal.innerText 
// 	= "";
// });



// 여기서 부터가 문젠게... 텍스트로 변경하려면 next 단계마다 innerText하는 텍스트가 달라야함...
// 이런 문제를 araay로 해결?! 
// const textInStep2 = "";
// const arrayInnerText = new Array();
// arrayInnerText.push(textInStep2);
// console.log(arrayInnerText);
// arrayInnerText.push(textInSte);
// arrayInnerText.push(textInStep);
// arrayInnerText.push(textInStep);

// cf. 
	// https://www.python2.net/questions-1088553.htm
	// https://www.w3schools.com/js/js_htmldom_eventlistener.asp


