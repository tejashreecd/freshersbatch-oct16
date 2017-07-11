function bank1()
{

	function BankAcct(AccNo, AccName, AccBal) 
	{ 
		this.AccNo = AccNo; 
		this.AccName = AccName;
		this.AccBal = AccBal;
	}
		function deposit(amt)
		{
			this.AccBal+=amt;
		}
		/*this.remove=function withdraw(amt)
		{
			this.AccBal-=amt;
		}*/
	
 
	
	
	var acc= new BankAcct(124,"john",2000);



	acc.deposit(100);
	console.log("Balance: "+ acc.AccBal);
//	acc.remove(200);
	//console.log("Balance: "+acc.AccBal);
	
}