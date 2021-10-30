import Undead from '../undead';

test(('class Undead'), () => {
  const name = 'Und';
  const expected = {
    name,
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  const undead = new Undead(name);
  expect(undead).toEqual(expected);
});

test(('class Undead wrong name'), () => {
  expect(() => new Undead('P', 'Undead')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Undead wrong type'), () => {
  expect(() => new Undead('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
