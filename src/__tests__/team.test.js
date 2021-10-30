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
  expect(team.members.personages).toEqual([zomb, undead]);
  const personage = 'unknown personage';
  expect(() => team.add(personage)).toThrow(`${personage} isnt type of Character or already available in this Set`);
  expect(() => team.add(undead)).toThrow(`${undead} isnt type of Character or already available in this Set`);
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
  team.addAll(undead, undead, undead, zombie, swordsman, zombie, magician, zombie, magician, daemon, bowman, daemon, 'Unknown');
  expect(team.members.personages).toEqual([undead, zombie, swordsman, magician, daemon, bowman]);
});

test(('class Set metod toArray()'), () => {
  const name = 'Petrov';
  const undead = new Undead(name);
  const zombie = new Zombie(name);
  const swordsman = new Swordsman(name);
  const magician = new Magician(name);
  const team = new Team();
  team.addAll(undead, zombie, swordsman, magician);
  expect(team.toArray()).toEqual([undead, zombie, swordsman, magician]);
});
