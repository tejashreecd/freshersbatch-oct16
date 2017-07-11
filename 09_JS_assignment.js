function math()
{
	var arr= [2,5,8,6,24,14];
	var total=0;
	var min1=Math.min(...arr);
	var max1=Math.max(...arr);
	for(i=0;i<arr.length;i++)
	{
		 total += arr[i];
	}
	var avg=total/arr.length;
	for(x in arr)
	{
		document.write(arr[x]+"<br>");
	}
	document.write("Min: "+min1+"<br>"+"Max: "+max1+"<br>"+"Sum:"+total+"<br>"+"Average: "+avg)
	
}