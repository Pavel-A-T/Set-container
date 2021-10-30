import Character from '../character';

test(('class Character'), () => {
  const name = 'Petrov';
  const type = 'Zombie';
  const expected = {
    name,
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  const zomb = new Character(name, type);
  expect(zomb).toEqual(expected);
});

test(('class Character wrong name'), () => {
  expect(() => new Character('Z', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character wrong type'), () => {
  expect(() => new Character('Zooker', 'Krys')).toThrow('This type Krys is wrong');
});
