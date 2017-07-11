function countVowels()
{
	var str=document.getElementById("string").value; 
	var acount= 0, ecount=0, icount=0 ,ocount=0, ucount=0;
	for (i=0; i<str.length; i++)
	{
		acount+= (str[i]== 'a' || str[i]== 'A');
		ecount+= (str[i]== 'e' || str[i]== 'E');
		icount+= (str[i]== 'i' || str[i]== 'I');
		ocount+= (str[i]== 'o' || str[i]== 'O');
		ucount+= (str[i]== 'u' || str[i]== 'U');
		
	}
	document.write("Occurrances of vowels <br>");
	document.write("A/a: "+ acount+ "<br>E/e: "+ ecount+"<br>I/i: "+ icount+"<br>O/o: "+ ocount+"<br>U/u: "+ ucount);
}