import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';
import Contact from './ContactLink';

import jumping from '../static/jumping-edited.png';

const styleFull = {
  paddingBottom: '60%',
  background: `url(${jumping})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  position: 'relative',
  margin: 0,
};

const Footer = styled.footer`
  background: ${theme.accent};
  color: ${theme.textInvertColor};
  min-height: 20rem;
`;

const sloganStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '3em',
};

const legalStyle = {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  margin: '0',
};
export default ({ data }) => (
  <Footer>
    <Contact icon="icon-home">{data.basics.location.address}</Contact>
    <Contact icon="icon-envelop" href={`mailto:${data.basics.email}`}>
      {data.basics.email}
    </Contact>
    {data.basics.profiles.map(profile => (
      <Contact icon={profile.icon} href={profile.url} key={profile.network}>
        {profile.username}
      </Contact>
    ))}

    <p style={legalStyle}> @ 2019 Yiou Chen.</p>
  </Footer>
);
