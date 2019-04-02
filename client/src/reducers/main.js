import { combineReducers } from 'redux';

import changeCharacters from './changeCharacters';
import changeMonsters from './changeMonsters';
import changeDisplay from './changeDisplay';

export default combineReducers({
  characterLibrary: changeCharacters,
  monsterLibrary: changeMonsters,
  display: changeDisplay,
});
