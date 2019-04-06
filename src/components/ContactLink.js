import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = styled.span`
  display: inline-block;
  font-family: ${theme.secondaryFont};
  border-width: 1px;
  border-style: solid;
  box-sizing: content-box;
  min-width: 4rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  border-radius: 2rem;

  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    padding: 0 2rem;
  }
`;

const Label = styled.span`
  display: none;
  margin-left: 1rem;

  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    display: inline-block;
  }
`;

const Icon = styled.span``;

const ContactLink = ({ icon, href, color, network, label, ...props }) => {
  let hrefProps = {};
  if (typeof href === 'string') {
    hrefProps = {
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return (
    <Link
      as={typeof href === 'string' ? 'a' : 'span'}
      {...hrefProps}
      style={{ color, borderColor: color }}
      title={`${network} ${label}`}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
      {/* <Icon className={icon} /> */}
      <Label>{props.children}</Label>
    </Link>
  );
};

export default ContactLink;
