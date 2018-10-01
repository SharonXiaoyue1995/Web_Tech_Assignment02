function domCreateDog(){
	var para = document.createElement("p");
	var node = document.createTextNode("Dog");
	para.appendChild(node);
	var element = document.getElementById("text1");
	element.appendChild(para);
}


function domCreateCat(){
	var para = document.createElement("p");
	var node = document.createTextNode("Cat");
	para.appendChild(node);
	var element = document.getElementById("text1");
	element.appendChild(para);
}


function domCreateBird(){
	var para = document.createElement("p");
	var node = document.createTextNode("Bird");
	para.appendChild(node);
	var element = document.getElementById("text1");
	element.appendChild(para);
}


/*source from https://www.jb51.net/article/77042.htm*/
function cleanNode(){
	var text1 = document.getElementById("text1"); 
    var childs = text1.childNodes; 
	for(var i = childs.length - 1; i >= 0; i--) { 
    text1.removeChild(childs[i]); 
}
}

function showTime(){
	 var out="";
	 var now =new Date();
	 out+= now.getFullYear();
	 out+="/";
	 out+= (now.getMonth()+1);
	 out+="/";
	 out+= now.getDate();
	 out+="/";
	 out+= now.getHours();
	 out+=":";
	 out+= now.getMinutes();
	 document.getElementById("time").innerHTML=out;
}


/* clone functions*/
function cloneFunction() {
    var elmnt = document.getElementById("text1");
    var cln = elmnt.cloneNode(true);
    document.getElementById("text1").appendChild(cln);
}

function gettext() {
var i; 
text=""; 
var content = new Array();
content[0] = "User name: Xiaoyue Shan ";
content[1] = "User ID: XIS59";
content[2] = "Gender: Female";
content[3] = "Assignment: 2"
for (i=0;i<content.length;i++){
	/*document.write(mycars[i] + "<br />");*/
	text+=content[i]+"<br />";
	document.getElementById("information").innerHTML = text;
}

}





