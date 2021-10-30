import Bowman from '../bowman';

test(('class Bowman create'), () => {
  const name = 'Zoja';
  const expected = {
    name,
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  const bowman = new Bowman(name);
  expect(bowman).toEqual(expected);
});

test(('class Bowman wrong name'), () => {
  expect(() => new Bowman('Poopssssssssss', 'Bowman')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Bowman wrong type'), () => {
  expect(() => new Bowman('Bowman', 'King')).toThrow('This type King is wrong');
});
