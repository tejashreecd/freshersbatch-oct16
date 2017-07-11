function remove()
{
	var str= document.getElementById("string").value;
	str=str.replace(/\s+/g," ");
	document.write("string after removing spaces: "+ str);
}