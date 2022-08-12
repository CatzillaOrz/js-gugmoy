import './style.css';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // inheritance Person
  this.course = course;
};
console.log(Student.prototype); // : {constructor: ƒ}

// link prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introdece = function () {
  console.log(`My namme is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');

mike.introdece();

console.log(Student.prototype); // Person {introdece: ƒ}
