import React from 'react';

const style = {
    marginBottom: '2em',
    color: '#555',
};
export default (props) => <section style={style} {...props}>{props.children}</section>;