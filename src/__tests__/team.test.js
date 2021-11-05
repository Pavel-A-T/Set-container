import Team from '../team';
import Character from '../character';
import Undead from '../undead';
import Zombie from '../zombie';
import Magician from '../magician';
import Daemon from '../daemon';
import Bowman from '../bowman';
import Swordsman from '../swordsman';

test(('class Set metod add'), () => {
  const name = 'Petrov';
  const type = 'Zombie';
  const undead = new Undead(name);
  const zomb = new Character(name, type);
  const team = new Team();
  team.add(zomb);
  team.add(undead);
  const arr = [zomb, undead];
  const expected = new Set(arr);
  expect(team.members).toEqual(expected);
  expect(() => team.add(zomb)).toThrowError(`${zomb} is not type of Character or already available in this Set`);
  expect(() => team.add(undead)).toThrowError(`${undead} is not type of Character or already available in this Set`);
});

test(('class Set metod addAll'), () => {
  const name = 'Petrov';
  const undead = new Undead(name);
  const zombie = new Zombie(name);
  const swordsman = new Swordsman(name);
  const magician = new Magician(name);
  const daemon = new Daemon(name);
  const bowman = new Bowman(name);
  const team = new Team();
  const arr = [undead, zombie, swordsman, magician, daemon, bowman];
  const expected = new Set(arr);
  team.addAll([undead, undead, undead, zombie, swordsman, zombie, magician, zombie,
    magician, daemon, bowman, daemon]);
  expect(team.members).toEqual(expected);
});

test(('class Set metod toArray()'), () => {
  const name = 'Petrov';
  const undead = new Undead(name);
  const zombie = new Zombie(name);
  const swordsman = new Swordsman(name);
  const magician = new Magician(name);
  const team = new Team();
  team.addAll([undead, zombie, swordsman, magician]);
  expect(team.toArray()).toEqual([undead, zombie, swordsman, magician]);
});
