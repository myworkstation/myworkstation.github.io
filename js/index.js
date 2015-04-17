// var namebtn=document.getElementById("namediv");
// var picdiv=document.getElementById('picdiv');
// namebtn.onclick=function(){
// 	alert("welcome to my webside");
// };
var namebtn=$('#namediv');
var images=$('.image');
var picdiv=$('#picdiv');

namebtn.click(function(){
	alert('welcome!');
});


$(function() {
    $('.banner').unslider();
});

$('.banner').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 1000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});
