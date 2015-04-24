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
getUserGistLists=function(username){
	$.get('https://api.github.com/users/'+username+'/gists',function(data,status){
		if(status=="success"){
			var i=0;
			for(list in data){
				alert(list);
				var lists[i]=list.url;
				i++;
			}
		}
	});
	alert(lists[0]);
	return lists;
}

getAllGists=function(urllists){
	for(url in urllists){
		var i=0;
		$.get(url,function(data,status){
			if(status=='success'){
				var responsejson=data;
				var gistcontents[i]=responsejson['files']['gistfile1.txt']['content'];
			}
		});
	}
	return gistcontents;
}

// $(document).ready(function(){
// 	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
// 		if(status=='success'){
// 			var responsejson=data;
// 			sideimage.html("<p style='font-size:18px;font-weight:bold;'>"+responsejson['files']['gistfile1.txt']['content']+"</p>");
// 		}
// 	});
// });
$(document).ready(function(){
	allcontents=getAllGists(getUserGistLists('myworkstation'));
	for(con in allcontents){
		sideimage.html("<p style='font-size:18px;font-weight:bold;'>"+con+"</p>");
	}
});