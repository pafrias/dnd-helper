import React from 'react';
import { connect } from 'react-redux';
import CharacterLibrary from './CharacterLibrary/CharacterLibrary';
import style from './App.css';
import handleDisplayChange from '../actions/handleDisplayChange';

const components = {
  'Character Codex': <CharacterLibrary />,
  'Character Creator': <div>Hello Character Creator!</div>,
  Beastiary: <div>Hello Bestiary!</div>,
  'Monster Creator': <div>Hello Monster Creator!</div>,
  Settings: <div>Hello Settings!</div>,
};

const displayOptions = [
  'Character Codex',
  'Character Creator',
  'Beastiary',
  'Monster Creator',
  'Settings',
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
        <h1 className={style.h1}>Dungeons and Dragons Helper</h1>
      </header>
      <div className={style.main}>
        <div className={style.sidebar}>
          {displayOptions.map(option => (
            <button
              className={option === display
                ? `${style.button} ${style.active}`
                : `${style.button} ${style.inactive}`}
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
      </div>
      <footer className={style.footer}>
        <h5 className={style.h5}>Pablo Frias 2019</h5>
      </footer>
    </div>
  );
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
