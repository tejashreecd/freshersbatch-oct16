function sortArray()
{
	var arr=[4,10,3,84,47];
	document.write('Array: ' +arr);
	 var r = confirm("Do you want to sort in ascending order?");
    if (r == true)
	{
        arr.sort(sortNumber);
		document.write( "<br><br>" + "Ascending order  " +arr);
    } 
	else {
		 arr.sort(sortNumber);
		 arr.reverse();
		 document.write( "<br><br>" + "Descending order  " +arr);
       
    }
	
}
function sortNumber(a, b) { return a - b; } 