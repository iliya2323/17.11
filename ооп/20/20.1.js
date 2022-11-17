class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('kris');

console.log(emp1 === emp2); 
// false