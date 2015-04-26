
var namebtn=$('#namediv');
var images=$('.image');
var picdiv=$('#picdiv');

var sideimage=$('#saying');
var footer=$('#footer');
var container=$('#container');
var contextdiv=$("#contextdiv");
var sidediv=$('#sidediv');
var spacediv=$('#spacediv');


// urllists=new Array();
// gistcontents=new Array();



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
// $(document).load(function(){

// })
$(document).ready(function(){
	// if($(document).height()>$(window).height()){
	// 	footer.attr("bottom",$(window).height()-$(document).height());
	// }
	// if(contextdiv.height()>sidediv.height()){
	// 	container.height(spacediv.height()+contextdiv.height()+20);
	// }else{
	// 	container.height(spacediv.height()+sidediv.height()+20);
	// }
	
	sideimage.html('<h2 style="color:red;">Sayings</h2>');
	$.get('https://api.github.com/users/'+'myworkstation'+'/gists',function(data,status){
		if(status=="success"){
			for(index in data){
				var gisturl=data[index].url;
				$.get(gisturl,function(data,status){
					if(status=="success"){
						var responsejson=data;
						sideimage.append("<p style='font-size:18px;font-weight:bold;'>"+responsejson['files']['mygist']['content']+"</p>");
					}
				})
			}
		}
	})

});