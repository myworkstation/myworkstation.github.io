
var namebtn=$('#namediv');
var images=$('.image');
var picdiv=$('#picdiv');

var sideimage=$('#sideimg');

urllists=new Array();
gistcontents=new Array();

getUserGistLists=function(username){
	urllists=[];
	$.get('https://api.github.com/users/'+username+'/gists',function(data,status){
		var i=0;
		if(status=="success"){
			for(list in data){
				urllists[i]=data[list].url;
				i++;
			}
		}
	});
};

getAllGists=function(urllists){
	for(url in urllists){
		var i=0;
		$.get(urllists[url],function(data,status){
			if(status=='success'){
				var responsejson=data;
				gistcontents[i]=responsejson['files']['gistfile1.txt']['content'];
			}
		});
	}
};

// $(document).ready(function(){
// 	$.get('https://api.github.com/gists/1f4d05e72c615872dd5c',function(data,status){
// 		if(status=='success'){
// 			var responsejson=data;
// 			sideimage.html("<p style='font-size:18px;font-weight:bold;'>"+responsejson['files']['gistfile1.txt']['content']+"</p>");
// 		}
// 	});
// });
// $(document).ready(function(){
// 	getUserGistLists('myworkstation');
// 	getAllGists(urllists);
// 	for(con in gistcontents){
// 		sideimage.html("<p style='font-size:18px;font-weight:bold;'>"+gistcontents[con]+"</p>");
// 	}
// });

$(document).ready(function(){
	$.get('https://api.github.com/users/'+'myworkstation'+'/gists',function(data,status){
		if(status=="success"){
			for(index in data){
				var gisturl=data.url;
				$.get(gisturl,function(data,status){
					if(status=="success"){
						var responsejson=data;
						sideimage.html("<p style='font-size:18px;font-weight:bold;'>"+responsejson['files']['gistfile1.txt']['content']+"</p>");
					}
				})
			}
		}
	})
});