import React from 'react';
import me from '../static/me.png';

const style = {
  height: '20em',
  width: '20em',
  backgroundImage: `url(${me})`,
  backgroundSize: 'cover',
  borderRadius: '50%',
  boxSizing: 'border-box',
  margin: '5em auto 2em auto',
};

export default props => <div style={style} />;
