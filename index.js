import './style.css';

const account = {
  owner: 'Jonas',
  movements: [200, 300, 120, 300],

  get latest() {
    return this._latest;
  },

  set latest(val) {
    this._latest = val;
  },
};
account.latest = 299;
console.log(account);
console.log(account.latest);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  set fullName(name) {
    this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }
}

const Lily = new PersonCl('Lily', 1982);
console.log(Lily);
console.log(Lily.fullName);
