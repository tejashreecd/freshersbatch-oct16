function findYear() 
{
	var today= new Date();
    var year= today.getFullYear();
	console.log(year);
	bday= document.getElementById("age").value;
    var birthyear= year-bday;
	console.log(bday);
	console.log(birthyear);
	alert(birthyear);
}