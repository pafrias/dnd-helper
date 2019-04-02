export default function monstersReducer(state = [], { type, monsters }) {
  return type === 'UPDATE_MONSTERS' ? monsters : state;
}
