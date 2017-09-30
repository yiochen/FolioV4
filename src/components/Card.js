import React from 'react';

const style = {
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  width: '80%',
  margin: '3em auto 1em auto',
  padding: '1.5em 1em',
  boxSizing: 'border-box',
  borderRadius: '2px',
  background: 'rgba(255,255,255,0.3)',
};
export default props => (
  <div style={style} {...props}>
    {props.children}
  </div>
);
