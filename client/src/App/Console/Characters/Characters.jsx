import React from 'react';
import style from './module.css';
import CharacterProfile from './CharacterProfile';

export default class CharacterGen extends React.Component {
  constructor(props) {
    super(props);
    const { characters } = this.props;
    this.state = {
      characters,
      creationMode: false,
    };
  }

  renderCharacters() {
    const { characters } = this.state;
    return (
      <div>
        {characters.length
          ? characters.map(character => <CharacterProfile character={character} />)
          : null}
      </div>
    );
  }

  render() {
    const { creationMode } = this.state;
    return (
      <div className={style.ui_main}>
        <div className="create_character">
          <button type="button" onClick={this.setState({ creationMode: true })}>New Character</button>
          {creationMode
            ? <CharacterGen />
            : this.renderCharacters()}
        </div>
      </div>
    );
  }
}
