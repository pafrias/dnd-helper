const traits = {
  dragonborn: {
    speed: 30,
    languages: ['common', 'draconic'],
    attributes: {
      abilities: {
        str: 2,
        cha: 1,
      },
      damageResistance: 'fire',
    },
    actions: [{
      breathAttack: {
        action: 'standard',
        recovery: 'shortRest',
        damage: '2d6',
        damageType: 'fire',
        range: 15,
        shape: 'cone',
        save: 'dev',
      },
    }],
  },
  human: {
    speed: 30,
    attributes: {
      abilities: [1],
    },
    languages: ['common', 1],
  },
  'half-orc': {
    speed: 30,
    attributes: {
      abilities: {
        str: 2,
        con: 1,
      },
      senses: {
        darkvision: 60,
      },
      skills: ['Intimidation'],
    },
    languages: ['common', 'orish'],
    traits: {
      Menacing: 'You gain proficiency in Intimidation.',
      'Relentless Endurance': "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
      'Savage Attacks': "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    },

  },
  elf: {
    speed: 30,
    languages: ['common', 'elvish', 1],
    attributes: {
      abilities: {
        dex: 2,
        int: 1,
      },
      senses: {
        darkvision: 60,
      },
      skills: ['Perception'],
    },
    proficiencies: ['Elven Weaponry'],
    traits: {
      'Fey Ancestry': "You have advantage on saves against being charmed, and magic can't put you to sleep.",
      'Elven Magic': 'You know one Cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
      'Keen Senses': 'Gain proficienty in Perception',
      Trance: 'Elves meditate deeply, remaining semiconscious, for 4 hours a day in place of sleeping. You gain the same benefit that a human does from 8 hours of sleep.',
    },
  },
};

const selectLanguages = (known, n) => {
  const results = [];
  const languages = ['common', 'dwarvish', 'elvish', 'giant', 'gnomish', 'goblin', 'halfling', 'orcish', 'draconic'];
  for (let i = 0; i < known.length; i += 1) {
    if (typeof known[i] === 'string') {
      results.push(known[i]);
    }
    let languageToLearn;
    do {
      languageToLearn = languages[Math.floor(Math.random() * languages.length)];
    } while (results.includes(languageToLearn));
    results.push(languageToLearn);
  }
  return results;
};

function PlayerRace(race) {
  this.speed = traits[race].speed;
  this.languages = selectLanguages(traits[race].languages);
  const bonuses = traits[race].attributes.abilities;
  Object.keys(bonuses).forEach(score => this.attributes[score] += bonuses[score]);
  this.attributes.skills = traits[race].attributes.skills;
  this.attributes.senses = traits[race].attributes.senses;
  this.attributes.damageResistance = traits[race].attributes.damageResistance;
  this.traits = traits[race].traits;
  this.proficiencies = traits[race].proficiencies;
}

module.exports = PlayerRace;
