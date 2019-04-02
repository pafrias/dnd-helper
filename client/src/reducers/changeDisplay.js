import Redux from 'redux';

const displayReducer = function(state = 'characterLibrary', {type, display}) {
  return type === 'CHANGE_DISPLAY' ? display : state;
};

export default displayReducer;
