import React from 'react';
import style from './module.css';
import Console from './Console/Console';

const App = () => (
  <div className={style.app}>
    <header className={style.header}>
      <h1 className={style.h1}>Dungeon Helper</h1>
    </header>
    <Console />
    <footer className={style.footer}>
      <h5 className={style.h5}>PabÇo LLC</h5>
    </footer>
  </div>
);

export default App;
