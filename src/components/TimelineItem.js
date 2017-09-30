import React from 'react';

export const style = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
};

export const leftPaneStyle = {
  flex: '1',
  textAlign: 'right',
  marginRight: '1.5em',
  boxSizing: 'border-box',
  overflow: 'hidden',
  paddingBottom: '5em',
};

const timelineWidth = 5;

export const rightPaneStyle = {
  flex: '2',
  position: 'relative',
  paddingLeft: `calc(${timelineWidth}px + 1.5em)`,
  borderLeft: `${timelineWidth}px dotted skyblue`,
  boxSizing: 'border-box',
  paddingBottom: '5em',
};

const dotSize = 30;

export const dotStyle = {
  display: 'block',
  position: 'absolute',
  top: '0',
  left: '0',
  width: `${dotSize}px`,
  height: `${dotSize}px`,
  marginLeft: `${-dotSize / 2 - timelineWidth / 2}px`,
  backgroundColor: 'skyblue',
  borderRadius: '50%',
};

export default ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [leftChild, rightChild] = childrenArray;
  return (
    <div style={style} {...props}>
      <div style={leftPaneStyle}>{leftChild}</div>

      <div style={rightPaneStyle}>
        <span style={dotStyle} />
        {rightChild}
      </div>
    </div>
  );
};
