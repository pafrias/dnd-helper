import React from 'react';
import { connect } from 'react-redux';
// import { connect } from 'http2';
import CharacterLibrary from './CharacterLibrary/CharacterLibrary';
// import display action dispatcher
// import sidebar

const displayOptions = {
  CharacterLibrary: <CharacterLibrary />,
};

const mapStateToProps = ({ display }) => ({
  display,
});

export function App({ display }) {
  return (
    <div id="main">
      <h2>Hello world</h2>
      {displayOptions[display]}
    </div>
  );
}

export const AppContainer = connect(mapStateToProps)(App);
