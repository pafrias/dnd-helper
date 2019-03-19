import axios from 'axios';

export default {

  postNewCharacter(newCharacter) {
    return axios.post('api/characters', newCharacter);
  },

  postNewMonster(newMonster) {
    return axios.post('api/monsters', newMonster);
  },

  getAllCharacters() {
    return axios('/api/characters')
      .then(({ data }) => data);
  },

  getAllMonsters() {
    return axios('/api/monsters')
      .then(({ data }) => data);
  },
};
