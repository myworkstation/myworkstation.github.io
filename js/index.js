// var namebtn=document.getElementById("namediv");
// var picdiv=document.getElementById('picdiv');
// namebtn.onclick=function(){
// 	alert("welcome to my webside");
// };
var namebtn=$('#namediv');
var images=$('.image');
var picdiv=$('#picdiv');

var sideimage=$('#sideimg');

// namebtn.click(function(){
// 	alert('welcome!');
// });

$(document).ready(function(){
	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
		if(status=='success'){
			var responsejson=data;
			sideimage.html("<h4>"+responsejson['files']['gistfile1.txt']['content']+"</h4>");
		}
	});
});