import './style.css';

/*
 **  Build in Object chain
 **
 **
 */

const Person = function(name, age) {



    this.name = name;
    this.age = age;

}

const Lily = new Person('Lily', 18);
const Tom = new Person('Tom', 12);

console.log(Lily);
console.log(Tom);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log('Age', this.age);
};

Lily.calcAge();
Tom.calcAge();

console.log(Lily.__proto__);
console.log(Tom.__proto__);

console.log(Person.prototype.isPrototypeOf(Tom));
console.log(Person.prototype.isPrototypeOf(Lily));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(Tom.species, Lily.species);

/*
 **  hasOwnProperty
 **   [√] check if property if from Prototype
 **
 */
console.log(Tom.hasOwnProperty('species')); // false
console.log(Tom.hasOwnProperty('name')); // true


console.log(Tom.__proto__)
// Object.prototype (top of prototype chain)
console.log(Tom.__proto__.__proto__)
console.log(Tom.__proto__.__proto__.__proto__)

console.dir(  Person.prototype.constructor)




