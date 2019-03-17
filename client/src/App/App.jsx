import React from 'react';
import CharacterGen from './CharacterGen/CharacterGen';
import style from './module.css';
import Sidebar from './Sidebar/Sidebar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: 'Characters',
      monsters: [],
      characters: [],
    };
  }

  handleClick(e) {
    this.setState({ display: e.target.value });
  }

  render() {
    const { display, characters, monsters } = this.state;

    return (
      <div className={style.app}>
        <header className={style.header}>
          <h1 className={style.h1}>Dungeon Helper</h1>
        </header>
        <main className={style.main}>
          <Sidebar selected={display} />
          <CharacterGen />
        </main>
        <footer className={style.footer}>Pab Co. LLC</footer>
      </div>
    );
  }
}
