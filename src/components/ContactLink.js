import React from 'react';
import globalStyle from '../globalStyle';

const style = {
  display: 'inline-block',
  marginLeft: '10px',
};

const iconStyle = {
  marginRight: '5px',
  color: globalStyle.accent,
};

export default ({ icon, href, ...props }) => {
  let Tag = 'span';
  let hrefProps = {};
  if (typeof href === 'string') {
    Tag = 'a';
    hrefProps = {
      href,
    };
  }
  return (
    <Tag style={style} {...hrefProps} {...props}>
      <span className={icon} style={iconStyle} />
      {props.children}
    </Tag>
  );
};
