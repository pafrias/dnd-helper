import React from 'react';
import style from './module.css';
// add dynamic css on selection

const Sidebar = ({ handleClick }) => (
  <div className={style.sidebar}>
    <button className={style.active} type="button" value="characters" onClick={e => handleClick(e)}>Characters</button>
    <button className={style.inactive} type="button" value="monsters" onClick={e => handleClick(e)}>Monsters</button>
    <button className={style.inactive} type="button" value="settings" onClick={e => handleClick(e)}>Settings</button>
  </div>
);

export default Sidebar;
