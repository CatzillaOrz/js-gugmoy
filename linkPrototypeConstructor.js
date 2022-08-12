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
/*
 **   link prototype
 **
 **
 */
Student.prototype = Object.create(Person.prototype);

Student.prototype.introdece = function () {
  console.log(`My namme is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');

mike.introdece();

console.log(Student.prototype); // Person {introdece: ƒ}

/*
 **  fix mike __prop__ form Person to Student
 **
 **
 */

console.log(mike);
console.log(mike.__proto__); //: Person {introdece: ƒ}
console.log(mike.__proto__.__proto__); // :{calcAge: ƒ, constructor: ƒ}
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.dir(Student.__proto__.__proto__); // :{calcAge: ƒ, constructor: ƒ}
console.dir(Student.prototype.constructor); // :{calcAge: ƒ, constructor: ƒ}

// fix set mike __prop__ form Person to Student :
/*
 **  link constructor
 **
 **
 */
Student.prototype.constructor = Student;

console.log(mike);
console.log(mike.__proto__); //: Person {introdece: ƒ}
console.dir(Student.__proto__.__proto__); // :{calcAge: ƒ, constructor: ƒ}
console.dir(Student.prototype.constructor); // :{calcAge: ƒ, constructor: ƒ}
console.log(mike instanceof Student);
console.log(mike instanceof Person);
