class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
	  }
	  setAge(age){
	  	if (age > 0 & age < 120) {
			  this.#age = age;
		  } else {
			throw new Error('incorrect');
		  }
	  }
	  setSalary(salary) {
		  this.#salary = salary + '$';
	  }
	  
  }

let employee = new Employee;
employee.setName('john');
employee.setAge(20);
employee.setSalary(330)
