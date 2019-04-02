const PlayerRace = require('./racialBonuses');

const statPriorities = ['cha', 'con', 'dex', 'int', 'wis', 'str'];
const standardArray = [15, 14, 13, 12, 10, 8];
const hitDice = 8;
const proficiencies = ['Light Armor', 'Light Weapons'];
const saves = ['cha', 'wis'];
const skills = ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'];

const rollDice = diceNum => Math.ceil(Math.random() * diceNum);

const generateAbilityScores = (pointSystem) => {
  const abilityScores = {};
  if (pointSystem === 'standardArray') {
    for (let i = 0; i < 6; i += 1) {
      abilityScores[statPriorities[i]] = standardArray[i];
    }
  }
  return abilityScores;
};

const selectSkills = (known) => {
  const results = [];
  for (let i = 0; i < known.length; i += 1) {
    if (typeof known[i] === 'string') {
      results.push(known[i]);
    }
    let skillToLearn;
    do {
      skillToLearn = skills[Math.floor(Math.random() * skills.length)];
    } while (results.includes(skillToLearn));
    results.push(skillToLearn);
  }
  return results;
};

function Builder({ pointSystem }) {
  this.attributes.abilities = generateAbilityScores(pointSystem);
  for (let j = 0; j < this.level; j += 1) {
    if (j) {
      this.maxHP += rollDice(hitDice);
    } else {
      this.maxHP = hitDice;
    }
  }
  PlayerRace.call(this, this.race);
  if (this.proficiencies) {
    this.proficiencies.push(...proficiencies);
  } else {
    this.proficiencies = proficiencies;
  }
  this.saves = saves;
  if (this.attributes.skills) {
    this.attributes.skills = selectSkills([...this.attributes.skills, 1, 1]);
  } else {
    this.attributes.skills = selectSkills([1, 1]);
  }
}

module.exports = Builder;
