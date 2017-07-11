


	function BankAcct(AccNo, AccName, AccBal) 
	{ 
		this.AccNo = AccNo; 
		this.AccName = AccName;
		this.AccBal = AccBal;
		this.deposit= function (amt)
		{
			this.AccBal+=amt;
		}
		this.withdraw=function (amt)
		{
			this.AccBal-=amt;
		}
	}


 var acc= new BankAcct(124,"john",2000);


function test()
{
	acc.deposit(100);
	console.log("Balance: "+ acc.AccBal);
	acc.withdraw(200);
	console.log("Balance: "+acc.AccBal);
	
}