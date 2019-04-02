export default function handleMonsterList(monsters) {
  return {
    type: 'UPDATE_MONSTERS',
    monsters,
  };
}
