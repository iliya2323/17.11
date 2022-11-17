class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('student1'),
	new Employee('student2'),
	new Student('student3'),
	new Employee('student4'),
	new Student('student5'),
	new Employee('student6'),
	new Student('student7'),
];

for(elems in users){
  if(users[elems] instanceof Employee){
    console.log(users[elems]);
  }
}
