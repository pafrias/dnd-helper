export default function displayReducer(state = 'Character Codex', { type, display }) {
  return type === 'CHANGE_DISPLAY' ? display : state;
}
