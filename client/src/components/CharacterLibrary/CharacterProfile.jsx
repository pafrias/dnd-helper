import React from 'react';
import style from './CharacterProfile.css';

export default ({
  name, level, race, characterClass,
}) => (
  <div className={style.profile}>
    <div style={style.character_picture} />
    <p>{name}</p>
    <p>{`Level ${level} ${race} ${characterClass}`}</p>
  </div>
);
