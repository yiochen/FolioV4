import React from 'react';

const Tag = 'h2';

const style = {
  color: 'rgb(245, 245, 245)',
  fontSize: '3em',
  textAlign: 'center',
  margin: '1.5em 0',
};
export default props => (
  <Tag style={style} {...props}>
    {props.children}
  </Tag>
);
