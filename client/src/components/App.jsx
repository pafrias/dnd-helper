import React from 'react';
import { connect } from 'react-redux';
import CharacterLibrary from './CharacterLibrary/CharacterLibrary';
import style from './App.css';
import handleDisplayChange from '../actions/handleDisplayChange';

const components = {
  'Character Codex': <CharacterLibrary />,
  'Character Creator': <div>Hello World!</div>,
  Beastiary: <div>Hello World!</div>,
  'Monster Creator': <div>Hello World!</div>,
};

const displayOptions = [
  'Character Codex',
  'Character Creator',
  'Beastiary',
  'Monster Creator',
];

const mapStateToProps = ({ display }) => ({
  display,
});

const mapDispatchToProps = dispatch => ({
  changeDisplay: (selection) => {
    dispatch(handleDisplayChange(selection));
  },
});

export function AppComponent({ display, changeDisplay }) {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <h1 className={style.h1}>Dungeon Helper</h1>
      </header>
      <div className={style.sidebar}>
        {displayOptions.map(option => (
          <button
            className={option === display ? style.active : style.inactive}
            type="button"
            value={option}
            onClick={e => changeDisplay(e.target.value)}
          >
            {option}
          </button>
        ))
        }
      </div>
      {components[display]}
      <footer className={style.footer}>
        <h5 className={style.h5}>PabÇo LLC</h5>
      </footer>
    </div>
  );
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
