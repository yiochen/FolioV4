import React from 'react';

const style = {
  position: 'relative',

  marginTop: '0.5em',
  height: '960px',
  maxHeight: '90vh',
  padding: '1em',
};

const Jumbotron = props => <section style={style}>{props.children}</section>;

export default Jumbotron;
