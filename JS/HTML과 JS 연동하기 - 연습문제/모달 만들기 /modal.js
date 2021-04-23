// 확인차! 
// console.log('loaded!');

import "./modal.css";

const $h2 = document.getElementsByTagName('h2');
const $Text = document.querySelector('.text'); 
const $openBtn = document.getElementById('#open-btn');

// const 



// 기능 구현 
// const changeHeading = function() {
// 	$h2.innerText = 
// }; 

// const changeText = function() {

// }; 
const showModal = function() {
	const $h2_2 = '안녕하세요';
	const $modalText_2 = '모달 내용은 어쩌고 저쩌고...';
	alert('$h2_2, $modalText_2');
};


// 이벤트 
// $openBtn.onclick = () => {
// 	$h2.innerText = '안녕하세요';
// 	$modalText.innerText = '모달 내용은 어쩌고 저쩌고...';
// }; 

$openBtn.onclick = () => {
	showModal();
}; 

// $openBtn.addEventListener('click', (event) => {
// 	showModal();	
// });



