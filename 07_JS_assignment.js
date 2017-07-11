function fact()
{
	var n= document.getElementById("no").value;
	var factorial=1;
	for(i=1; i<=n; ++i)
        {
            factorial *= i;       
        }
        alert('factorial of '+ n+ ' is '+factorial);
}