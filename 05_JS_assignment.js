function checkVowel()
{
	var char= document.getElementById("alpha").value;
	if(char =='a' || char =='e' || char =='i' || char =='o' || char =='u')
		alert(char + ' is a vowel.');
	else
		alert(char+' is not a vowel.');
}