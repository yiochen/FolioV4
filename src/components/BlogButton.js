import React from 'react';
import globalStyle from '../globalStyle';
import Link from 'gatsby-link';

const anchorStyle = {
  height: '2em',
  position: 'absolute',
  right: 0,
  top: '1em',
  marginRight: '1em',
  cursor: 'pointer',
  display: 'flex',
};
const style = {
  background: globalStyle.accent,
  border: 0,
  boxSizing: 'border-box',
  top: '2em',
  color: 'white',
  height: '100%',
  width: '5em',
  display: 'inline-block',
  paddingLeft: '0.5em',
  lineHeight: '2em',
};

const arrowStyle = {
  height: '100%',
  width: '10px',
  display: 'inline-block',
  borderTop: '1em solid transparent',
  borderBottom: '1em solid transparent',
  borderLeft: `10px solid ${globalStyle.accent}`,
  boxSizing: 'border-box',
};

export default props => (
  <Link to="/blog/0/" style={anchorStyle}>
    <div style={style}>BLOG</div>
    <span style={arrowStyle} />
  </Link>
);
