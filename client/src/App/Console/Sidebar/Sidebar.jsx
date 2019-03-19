import React from 'react';
import style from './module.css';

export default ({ handleClick }) => (
  <div className={style.sidebar}>
    <button className={style.active} type="button" value="Characters" onClick={e => handleClick(e)}>Characters</button>
    <button className={style.inactive} type="button" value="Monsters" onClick={e => handleClick(e)}>Monsters</button>
    <button className={style.inactive} type="button" value="Settings" onClick={e => handleClick(e)}>Settings</button>
  </div>
);
