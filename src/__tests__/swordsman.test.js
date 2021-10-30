import Swordsman from '../swordsman';

test(('class Swordsman'), () => {
  const name = 'Sword';
  const expected = {
    name,
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  const swordsman = new Swordsman(name);
  expect(swordsman).toEqual(expected);
});

test(('class Swordsman wrong name'), () => {
  expect(() => new Swordsman('P', 'Swordsman')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Swordsman wrong type'), () => {
  expect(() => new Swordsman('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
