import React from 'react';

const style = {
    position: 'relative',

    marginTop: '0.5em',
    height: '960px',
    maxHeight: '90vh',
    padding: '1em'
};

export default (props) => (
    <section style={style}>
        {props.children}
    </section>
)