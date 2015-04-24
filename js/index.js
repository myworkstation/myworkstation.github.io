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
	var i=0;
	var lists=new Array();
	$.get('https://api.github.com/users/'+username+'/gists',function(data,status){
		if(status=="success"){
			for(list in data){
				lists[i]=data[list].url;
				i++;
			}
		}
	});
	alert(lists);
}

getAllGists=function(urllists){
	var i=0;
	var gistcontents;
	for(url in urllists){
		$.get(urllist[url],function(data,status){
			if(status=='success'){
				var responsejson=data;
				gistcontents[i]=responsejson['files']['gistfile1.txt']['content'];
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