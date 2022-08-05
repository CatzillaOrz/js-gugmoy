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
    isMillenial();
  },
  greet: () => console.log(`hey ${this.firstName}`),
};

jonas.greet(); /* this => undefined */
jonas.calcAge(); /* this => undefined */
