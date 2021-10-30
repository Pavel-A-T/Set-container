import Daemon from '../daemon';

test(('class Daemon'), () => {
  const name = 'Ib';
  const expected = {
    name,
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  const daemon = new Daemon(name);
  expect(daemon).toEqual(expected);
});

test(('class Daemon wrong name'), () => {
  expect(() => new Daemon('C', 'Daemon')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Daemon wrong type'), () => {
  expect(() => new Daemon('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
