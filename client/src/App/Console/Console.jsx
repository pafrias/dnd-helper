import React from 'react';
import { getAllCharacters, postNewCharacter } from '../helpers/ajax';
import Characters from './Characters/Characters';
import style from './module.css';
import Sidebar from './Sidebar/Sidebar';

export default class Console extends React.Component {
  constructor() {
    super();
    this.state = {
      display: 'characters',
      monsters: false,
      creationMode: false,
      characters: [],
    };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.openCreationForm = this.openCreationForm.bind(this);
    this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this);
  }

  componentDidMount() {
    getAllCharacters()
      .then((characters) => {
        this.setState({ characters });
      });
  }

  changeDisplay(e) {
    this.setState({ display: e.target.value });
    // if monsters is selected, but monsters is false
    // --> fetch monsters before rerender
  }

  openCreationForm() {
    this.setState(({ creationMode }) => ({ creationMode: !creationMode }));
  }

  handleCharacterSubmit(character) {
    // console.log('got here', character);
    postNewCharacter(character)
      .then(({ data }) => {
        character._id = data;
        this.setState(({ characters }) => ({ characters: [character, ...characters] }));
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      characters, monsters, display, creationMode,
    } = this.state;
    // requires a monsters page to display
    return (
      <main className={style.console}>
        <Sidebar selected={display} changeDisplay={this.changeDisplay} />
        {display === 'characters'
          ? (
            <Characters
              characters={characters}
              creationMode={creationMode}
              handleClick={this.openCreationForm}
              handleSubmit={this.handleCharacterSubmit}
            />
          )
          : null}
      </main>
    );
  }
}
