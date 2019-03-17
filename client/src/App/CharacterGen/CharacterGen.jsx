import React from 'react';
import style from './module.css';

export default class CharacterGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.ui_main} />
    );
  }
}
