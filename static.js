
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

  static hey() {
    console.log('Hey 👋');
  }
}

const Lily = new PersonCl('Lily', 1982);
console.log(Lily);
console.log(Lily.fullName);

PersonCl.hey();
