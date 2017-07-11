function bank(AccNo, AccName, AccBal) 
	{ 
		this.AccNo = AccNo; 
		this.AccName = AccName;
		this.AccBal = AccBal;
	}
	bank.prototype.deposit=function(amt)
	{
		this.AccBal+=amt;
	};
	bank.prototype.withdraw=function(amt)
	{
		this.AccBal-=amt;
	};
	bank.prototype.getBal=function()
	{
		return this.AccBal;
	};
	bank.prototype.getAccName=function()
	{
		return this.AccName;
	};
function test5()
{
	var bacc= new bank(100,"bran", 10000);
	console.log("Name: "+ bacc.getAccName());
	bacc.deposit(600);
	console.log("Bal: "+ bacc.getBal());
	bacc.withdraw(200);
	console.log("Bal: "+ bacc.getBal());
	
}