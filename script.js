var nem = prompt("Please enter your full name:", "over here lol");
document.getElementById('fname').innerHTML;
document.getElementById('fname').innerHTML = nem;

var usnem = prompt("Enter your username:", "imagine using socmed");
document.getElementById('username').innerHTML;
document.getElementById('username').innerHTML = usnem;

var ew = confirm("Assigned sex at birth; OK for female, CANCEL for men");
document.getElementById('gender').innerHTML;
document.getElementById('gender').innerHTML = ew;

if(gender==true){
	alert("Your gender has been set to FEMALE");
}else{
	alert("Your gender has been set to MALE");	
}

var brief = prompt("Add a short description about yourself");
document.getElementById('desc').innerHTML;
document.getElementById('desc').innerHTML = brief;

var yir = parseInt(prompt("Enter your birth year"));
document.getElementById('year').innerHTML;
document.getElementById('year').innerHTML = yir;

var ej = 2023-yir;
document.getElementById('age').innerHTML;
document.getElementById('age').innerHTML = ej;

var no = confirm("Do you want to add a photo?");

if(no==true){
	var img = prompt("Enter file name of photo (ex. img.jpg)");
	document.getElementById('ppic').setAttribute("src",img);
}	