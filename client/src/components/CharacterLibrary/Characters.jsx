import React from 'react';
import { connect } from 'react-redux';
import style from './module.css';
import CharacterProfile from './CharacterProfile';
// edit
import blah from '../../actions/handleDisplayChange';
// import style from './module.css';
// import CharacterGenerator from './CharacterGenerator/CharacterGenerator';

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = dispatch => ({
  handleDisplayChange: (dispatch) => {
    dispatch(blah('characterGenerator'));
  },
});

export function CharacterDisplay({ characters, handleClick }) {
  return (
    <div className={style.ui_main}>
      <div className="create_character">
        <div>
          <button type="button" onClick={handleClick}>New Character</button>
          <div className="character_display">
            {characters.length
              ? characters.map(character => <CharacterProfile character={character} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDisplay;

// requires container export

/*
const CharacterDisplay = ({
  characters, creationMode, handleClick, handleSubmit,
}) => (
  <div className={style.ui_main}>
    <div className="create_character">
      {creationMode
        ? (
          <div>
            <button type="button" onClick={handleClick}>Return to Characters</button>
            <CharacterGenerator handleSubmit={handleSubmit} />
          </div>
        )
        : (
          <div>
            <button type="button" onClick={handleClick}>New Character</button>
            <div className="character_display">
              {characters.length
                ? characters.map(character => <CharacterProfile character={character} />)
                : null}
            </div>
          </div>
        )}
    </div>
  </div>
);

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