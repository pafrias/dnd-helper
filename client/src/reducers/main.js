import { combineReducers } from 'redux';

import changeCharacters from './changeCharacters';
import changeMonsters from './changeMonsters';
import changeDisplay from './changeDisplay';

export default combineReducers({
  characters: changeCharacters,
  monsters: changeMonsters,
  display: changeDisplay,
});
