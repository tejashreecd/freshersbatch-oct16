

	var bankacc={ AccNo: 0, 
					AccName: "unknown", 
					AccBal: 0.0,
					deposit: function(amt)
					{
						this.AccBal+=amt;
					},
					withdraw: function(amt)
					{
						this.AccBal-=amt;
					}
				};

	
function test3()
{
	var bank2 = Object.create(bankacc); 
	bank2.AccNo=125;
	bank2.AccName="mary";
	bank2.AccBal=5000;
	bank2.deposit(100);
	console.log("Balance: "+ bank2.AccBal);
	bank2.withdraw(100);
	console.log("Balance: "+ bank2.AccBal);
}
