import Redux from 'redux';

const charactersReducer = function(state = [], {type, characters}) {
  return type === 'CHANGE_CHARACTERS' ? characters : state;
};

export default charactersReducer;
