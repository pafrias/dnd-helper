export default function handleCharacterList(characters) {
  return {
    type: 'UPDATE_CHARACTERS',
    characters,
  };
}
