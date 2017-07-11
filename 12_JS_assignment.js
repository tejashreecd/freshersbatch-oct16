function palin()
{
	var str= document.getElementById("string").value;
    var l= 0;
    var h= str.length- 1;
	while(h > l)
    {
        if (str[l++] != str[h--])
        {
            document.write(str+ " is consonant");
			exit;
        }
    }
    document.write(str+ " is palindrome");
}