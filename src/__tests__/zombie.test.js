import Zombie from '../zombie';

test(('class Zombie'), () => {
  const name = 'Petr';
  const expected = {
    name,
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  const zombie = new Zombie(name);
  expect(zombie).toEqual(expected);
});

test(('class Zombie wrong name'), () => {
  expect(() => new Zombie('P', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Zombie wrong type'), () => {
  expect(() => new Zombie('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
