import Set from './set';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    this.members.add(personage);
  }

  addAll(...personages) {
    this.members.addAll(...personages);
  }

  toArray() {
    return this.members.toArray();
  }
}
