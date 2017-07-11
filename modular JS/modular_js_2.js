function Emp(_empid, _ename,_esalary, _deptno)
{
	 this.empid= _empid;
	this.ename= _ename;
	this.esalary=_esalary;
	this.deptno=_deptno;
}

var EmployeeList=(function()
				{
					var Employee=[];
					return{
							addemp: function(emp)
							{
								Employee.push(emp);
							},
							getemp: function()
							{
								return Employee;
							},
							sort: function()
							{
								Employee.sort(function(a,b) {return a.empid-b.empid;})
							}
						}
					})();
function test6()
{
	var jonemp= new Emp(2,"jon",5000,25);
	EmployeeList.addemp(jonemp);
	var joyemp= new Emp(1,"joy",5000,15);
	EmployeeList.addemp(joyemp);
	EmployeeList.sort();
	var em=EmployeeList.getemp();
	console.log(em);
	
}
					
