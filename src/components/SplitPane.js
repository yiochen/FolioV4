import React from 'react';

const constainerStyle = {
    postion: 'relative',
    display: 'flex',
    backgroundImage: 'linear-gradient(0deg, #000 0%,#000 100%)',
    backgroundSize: '2px 100%',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',

}

const childStyle = {
    flex: '1',
    padding: '1em',
    position: 'relative'
}

export default (props) => {
    const children = React.Children.toArray(props.children);
    const left = children[0] || null;
    const right = children[1] || null;
    return (<div style={constainerStyle}>
        <div style={childStyle}>{left}</div>
        <div style={childStyle}>{right}</div>
    </div>);
};