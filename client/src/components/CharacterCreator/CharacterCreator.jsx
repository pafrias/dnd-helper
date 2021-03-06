/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import style from './CharacterCreator.css';
import createNewCharacter from '../../helpers/createNewCharacter';

const CharacterCreator = () => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(5);
  const [race, setRace] = useState(null);
  const [gender, setGender] = useState();
  const [characterClass, setClass] = useState(null);
  const [pointSystem, setPointSystem] = useState('sa');

  return (
    <div className={style.creator_console}>
      <div className={style.character_generator}>
        <label className={style.input_row}>
          PC Name
          <input id="player-name" type="text" onChange={e => setName(e.target.value)} />
        </label>
        <label className={style.input_row}>
          Level
          <input id="player-level" type="number" min="5" max="5" onChange={e => setLevel(e.target.value)} />
        </label>
        <label className={style.input_row}>
          Class
          <select id="player-class" onChange={e => setClass(e.target.value)}>
            <option value="">Select a class</option>
            <option value="warlock">Warlock</option>
          </select>
        </label>
        <label className={style.input_row}>
          Race
          <select id="player-race" onChange={e => setRace(e.target.value)}>
            <option value="">Select a race</option>
            <option value="human">Human</option>
            <option value="half-orc">Half-Orc</option>
            <option value="dragonborn">Dragonborn</option>
            <option value="elf">Elf</option>
          </select>
        </label>
        <label className={style.input_row}>
          Gender
          <select id="player-gender" onChange={e => setGender(e.target.value)}>
            <option value="">Select a gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="n">Non-Binary</option>
          </select>
        </label>
        <label className={style.input_row}>
          Point System
          <select id="point-system" onChange={e => setPointSystem(e.target.value)}>
            <option value="sa">Standard Array</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => createNewCharacter({
            name, level, race, gender, characterClass, pointSystem,
          })}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CharacterCreator;
