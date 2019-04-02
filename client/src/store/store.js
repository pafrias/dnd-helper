import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/main';

const initialState = {
  characterLibrary: [],
  monsterLibrary: [],
  display: 'characterLibrary',
}

export default createStore(reducer, applyMiddleware(thunk));
