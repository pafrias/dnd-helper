import React from 'react';
import { getAllCharacters, postNewCharacter } from '../helpers/ajax';
import Characters from './Characters/Characters';
import style from './module.css';
import Sidebar from './Sidebar/Sidebar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: 'Characters',
      monsters: false,
      characters: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // fetch characters from server
  }

  handleClick(e) {
    this.setState({ display: e.target.value });
    // if monsters is selected, but monsters is false
    // --> fetch monsters before rerender
  }

  render() {
    const { characters, display } = this.state;
    // , characters, monsters
    return (
      <main className={style.console}>
        <Sidebar selected={display} handleClick={this.handleClick} />
        <Characters characters={characters} />
      </main>
    );
  }
}
