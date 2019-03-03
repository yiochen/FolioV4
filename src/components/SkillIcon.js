import React from 'react';

const defaultStyle = {
  width: '75px',
  margin: '0.5em',
  transition: 'all 0.3s ease',
};

const blurStyle = {
  filter: 'grayscale(100%)',
  opacity: '.5',
};

const SkillIcon = ({ src, name, selected = false, onSelect }) => {
  const style = selected
    ? defaultStyle
    : Object.assign({}, defaultStyle, blurStyle);

  return (
    <img
      src={src}
      style={style}
      alt={name}
      title={name}
      onMouseOver={onSelect}
      onClick={onSelect}
    />
  );
};

export default SkillIcon;
