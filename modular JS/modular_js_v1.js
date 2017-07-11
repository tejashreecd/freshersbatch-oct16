var BankAccount={ AccNo: 123, 
				AccName: "teju", 
				AccBal: 1000 ,
				deposit : function(amt) 
				{ 
					this.AccBal+=amt;
					//return AccBal;
				}, 
				withdraw: function(amt) 
				{
					this.AccBal-=amt;
				//return AccBal;
				}
			};
function testBank()
{
	BankAccount.deposit(100);
	console.log("Balance: "+ BankAccount.AccBal);
	BankAccount.withdraw(200);
	console.log("Balance: "+ BankAccount.AccBal);
	
}