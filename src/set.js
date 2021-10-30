import Character from './character';

export default class Set {
  constructor() {
    this.personages = [];
  }

  add(personage) {
    if (personage instanceof Character && !this.personages.includes(personage)) {
      this.personages.push(personage);
    } else throw new Error(`${personage} isnt type of Character or already available in this Set`);
  }

  addAll(...args) {
    for (const arg of args) {
      try {
        this.add(arg);
      } catch (err) {
        // ignore this err.
      }
    }
  }

  toArray() {
    return this.personages;
  }
}
