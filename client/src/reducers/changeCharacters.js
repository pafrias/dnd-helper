export default function charactersReducer(state = [], { type, characters }) {
  return type === 'UPDATE_CHARACTERS' ? characters : state;
}
