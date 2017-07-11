function table()
{
	var no= document.getElementById("n1").value;
	var i=1;
	do{
	while(i<=10)
	{
		document.write(no*i);
		document.write("<br>")
		i++;
	}
	no++;
	}while(confirm("next number?"))
	
}