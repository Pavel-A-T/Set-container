export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) throw new Error(`${personage} is not type of Character or already available in this Set`);
    this.members.add(personage);
  }

  addAll(personages) {
    personages.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}
