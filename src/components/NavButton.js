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
  zIndex: 10,
};

const startAnchorStyle = {
  ...anchorStyle,
  left: 0,
  right: undefined,
  marginLeft: '1em',
  marginRight: undefined,
  textAlign: 'right',
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
  padding: '0 0.5em',
  textAlign: 'center',
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

const startArrowStyle = {
  ...arrowStyle,
  borderRight: `10px solid ${globalStyle.accent}`,
  borderLeft: undefined,
};

export default ({ link, text, direction }) => (
  <Link to={link} style={direction === 'start' ? startAnchorStyle : anchorStyle}>
    {direction === 'start' && <div style={startArrowStyle} />}
    <div style={style}>{text}</div>
    {direction === 'end' && <span style={arrowStyle} />}
  </Link>
);
