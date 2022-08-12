import './style.css';

/*
 **  How Prototypal Inheritance / Delegation works
 **
 **
 */

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(Person.prototype); //  : {constructor: ƒ}
console.log(Person.prototype.constructor); // :
/* class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
} */
