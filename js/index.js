// var namebtn=document.getElementById("namediv");
// var picdiv=document.getElementById('picdiv');
// namebtn.onclick=function(){
// 	alert("welcome to my webside");
// };
var namebtn=$('#namediv');
var images=$('.image');
var picdiv=$('#picdiv');

var sideimage=$('#sideimage');

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

$(document).ready(function(){
	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
		alert("Data: " + data + "\nStatus: " + status);
		if(status==200){
			var responsejson=eval("("+data+")");
			alert(responsejson);
			sideimage.html(responsejson.content);
		}
	});
});