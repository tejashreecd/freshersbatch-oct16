function BankAccount(_AccNo, _AccName,_AccBal)
{
	var AccNo= _AccNo;
	var AccName= _AccName;
	var AccBal=_AccBal;
	return {
				deposit: function(amt)
				{
					AccBal+=amt;
				},
				withdraw: function(amt)
				{
					AccBal-=amt;
				},
				getBal: function()
				{
					return AccBal;
				}
			}
}
function test4()
{
	var bank= new BankAccount(100,"bran", 10000);
	bank.deposit(500);
	console.log("Bal: "+ bank.getBal());
	bank.withdraw(200);
	console.log("Bal: "+ bank.getBal());
	
}