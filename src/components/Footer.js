import React from 'react';

const style = {
  paddingBottom: '60%',
  background: 'url(static/jumping-edited.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  position: 'relative',
};

const sloganStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '3em',
};

const legalStyle = {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  margin: '0',
};
export default props => (
  <footer style={style}>
    <h1 style={sloganStyle}>Keep on hacking</h1>
    <p style={legalStyle}> @ 2017 Yiou Chen.</p>
  </footer>
);
