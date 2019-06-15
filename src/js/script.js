var header = document.getElementsByClassName("header");
var main = document.getElementsByClassName("main");
// var main = document.getElementsByTagName("main");---ищет и подключает теги!!!
// var main = document.getElementsById("main"); --- ищет и подключает классы!!!
var hat = document.getElementsByClassName("hat");
// или
// var hat = document.querySelector(".hat");

console.log(header);
console.log(main);
console.log(hat);





// Вызов модального окна - формы для пользователя
$(document).ready(function(){

	$('.header__contacts__buttons').on("click", function(){
		$('.dimming-popup-form').show()
	});
	
	// if(typeof (window.innerWidth) == '768') {
	// 	$('.dimming-popup-form').destroy()
	// };

	$('.dimming-popup-form__popup-form__close').on("click", function(){
		$('.dimming-popup-form').hide()
	});

});

