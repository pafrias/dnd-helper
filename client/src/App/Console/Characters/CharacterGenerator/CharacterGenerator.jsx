import React, { useState } from 'react';
import style from './module.css';

export default ({ props }) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(5);
  const [race, setRace] = useState(null);
  const [gender, setGender] = useState();
  const [characterClass, setClass] = useState(null);

  return (
    <div>
      <input id="player-name" type="text" value="" onChange={e => setName(e.target.value)} />
      <input id="player-level" type="number" min="5" max="5" onChange={e => setLevel(e.target.value)} />
      <select id="playerClass" onChange={e => setClass(e.target.value)}>
        <option valu="">Select a class</option>
        <option value="Warlock">Warlock</option>
      </select>
      <select />
    </div>
  );
};
