class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('John', 1000),
  new Employee('Kris', 2000),
  new Employee('Gary', 3000),
  new Employee('Alex', 4000)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}