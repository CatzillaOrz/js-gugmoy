// Import stylesheets

import './style.css';

console.log(this); /* this => window {} */

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991); /* this => calcAge */

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991); /* this => window {} */

const jonasen = {
  birth: 1991,
  calcAge: function () {
    console.log(2037 - this.birth);
    console.log(this);
  },
};

jonasen.calcAge(); /* this => jonasen */

const lion = {
  birth: 1992,
  calcAge: jonasen.calcAge,
};

lion.calcAge(); /* this => lion */

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    const that = this;
    const isMillenial_that = function () {
      console.log(that);
      console.log(that.year >= 1981 && that.year <= 1996);
    };

    /* [bind] return a new function */
    const isMillenial_solution1 = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }.bind(this);

    const isMillenial_solution2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial_that(); /* self this */
    isMillenial_solution1(); /* bind(this) */
    isMillenial_solution2(); /* arrow function inherit parent scope */
    isMillenial(); /* error */
  },
  greet: () => console.log(`hey ${this.firstName}`),
};

jonas.greet(); /* this => undefined */
jonas.calcAge(); /* this => undefined */

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3, 4, 5, 6); /* ok */

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(1, 2, 3, 4, 5); /* Error */
