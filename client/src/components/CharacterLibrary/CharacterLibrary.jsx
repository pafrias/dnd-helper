import React from 'react';
import { connect } from 'react-redux';
import style from './CharacterLibrary.css';
import CharacterProfile from './CharacterProfile';
import { getAllCharacters } from '../../helpers/ajax';

const mapStateToProps = ({ characters }) => ({
  characters,
});

// create a clicking function

export function CharactersComponent({ characters }) {
  return (
    <div className={style.characters_console}>
      {characters.length
        ? characters.map(character => <CharacterProfile character={character} />)
        : null}
    </div>
  );
}

const CharactersContainer = connect(mapStateToProps)(CharactersComponent);

export default CharactersContainer;

/*

const pictureStyle = (characterClass, race, gender) => ({
  background: `url(/${characterClass}/${race}-${gender}.jpg)`,
  backgroundSize: 'contain',
  height: '80px',
  width: '80px',
  'border-radius': '50%',
});

const CharacterProfile = ({
  character: {
    _id, name, level, race, characterClass, gender,
  },
}) => {
  const style = pictureStyle(characterClass, race, gender);

  console.log(style);
  return (
    <div className={style.profile}>
      <div style={style.character_picture}>
        <div style={style} alt="product was here" />
      </div>
      <p>{name}</p>
      <p>{`Level ${level} ${race} ${characterClass}`}</p>
    </div>
  );
};

export default CharacterDisplay;
*/
