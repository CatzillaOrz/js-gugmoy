import './style.css';

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 1998;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

console.log(steven instanceof Object);
