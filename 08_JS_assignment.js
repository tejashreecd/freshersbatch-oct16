var count=0;
function enter()
{
	count++;
	var un= document.getElementById("uname").value;
	var pw= document.getElementById("pwd").value;
	if(un=='teju' && pw=='tcd')
	{	
		alert('successful login.');
		exit;
	}
	else
	{
		alert('invalid. Try again');
		document.getElementById("uname").reset;
		document.getElementById("pwd").reset;
	}
	if(count==3)
			alert('Login invalid. ERROR!');
	
}