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

// $(document).ready(function(){
// 	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
// 		alert("Data: " + data + "\nStatus: " + status);
// 		if(status==200){
// 			var responsejson=eval("("+data+")");
// 			alert(responsejson);
// 			sideimage.html(responsejson.content);
// 		}
// 	});
// });
// namebtn.click(function(){
// 	alert('thankyou!');
// 	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
// 		alert("Data: " + data + "\nStatus: " + status);
// 		if(status==200){
// 			var responsejson=eval("("+data+")");
// 			alert(responsejson);
// 			sideimage.html(responsejson.content);
// 		}
// 	});
// });
