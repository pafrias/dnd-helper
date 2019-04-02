import Redux from 'redux';

const monstersReducer = function(state = [], {type, monsters}) {
  return type === 'CHANGE_MONSTERS' ? monsters : state;
};

export default monstersReducer;
