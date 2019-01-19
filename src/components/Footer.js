import React from 'react';
import jumping from '../static/jumping-edited.png';

const styleFull = {
  paddingBottom: '60%',
  background: `url(${jumping})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  position: 'relative',
  margin: 0,
};

const styleMini = {
  height: '2em',
  position: 'relative',
  margin: 0,
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
export default ({ full }) => (
  <footer style={full ? styleFull : styleMini}>
    {full && <h1 style={sloganStyle}>Keep on hacking</h1>}
    <p style={legalStyle}> @ 2019 Yiou Chen.</p>
  </footer>
);
