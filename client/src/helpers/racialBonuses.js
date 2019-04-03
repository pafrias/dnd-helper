import traits from './racialBonuses.json';

export const selectLanguages = (known, n) => {
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

export default function PlayerRace(race) {
  this.speed = traits[race].speed;
  this.languages = selectLanguages(traits[race].languages);
  const bonuses = traits[race].attributes.abilities;
  Object.keys(bonuses).forEach((score) => {
    this.attributes[score] += bonuses[score];
  });
  this.attributes.skills = traits[race].attributes.skills;
  this.attributes.senses = traits[race].attributes.senses;
  this.attributes.damageResistance = traits[race].attributes.damageResistance;
  this.traits = traits[race].traits;
  this.proficiencies = traits[race].proficiencies;
}
