import Magician from '../magician';

test(('class Magician'), () => {
  const name = 'Mag';
  const expected = {
    name,
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  const magician = new Magician(name);
  expect(magician).toEqual(expected);
});

test(('class Magician wrong name'), () => {
  expect(() => new Magician('P', 'Magician')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character wrong type'), () => {
  expect(() => new Magician('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
