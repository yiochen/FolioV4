import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

const Link = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const Icon = styled.span`
  margin-right: 5px;
  color: ${theme.accent};
`;

export default ({ icon, href, ...props }) => {
  let hrefProps = {};
  if (typeof href === 'string') {
    hrefProps = {
      href,
    };
  }
  return (
    <Link
      as={typeof href === 'string' ? 'a' : 'span'}
      {...hrefProps}
      {...props}
    >
      <Icon className={icon} />
      {props.children}
    </Link>
  );
};
