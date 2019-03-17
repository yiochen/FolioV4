import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';
import Contact from './ContactLink';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import jumping from '../static/jumping-edited.png';
import { css } from 'linaria';

const Footer = styled.footer`
  background: ${theme.accent};
  color: ${theme.textInvertColor};
  padding: 2rem 0 1rem 0;
`;

const sloganStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '3em',
};

const Spacer = styled.span`
  margin: 0;
  padding: 0;
  flex-grow: 1;
`;
const ContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const horizontalSpacing = css`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Legal = styled.p`
  margin: 0;
  text-align: center;

  font-size: 1.5rem;
`;

const HomePageFooter = ({ data }) => (
  <Footer>
    <ContactContainer>
      <Spacer />
      <Contact
        icon={faEnvelope}
        href={`mailto:${data.basics.email}`}
        color={theme.textInvertColor}
        className={horizontalSpacing}
        label={data.basics.email}
        network="email"
      >
        {data.basics.email}
      </Contact>
      {data.basics.profiles.map(profile => (
        <Contact
          icon={profile.icon}
          href={profile.url}
          key={profile.network}
          network={profile.network}
          color={theme.textInvertColor}
          className={horizontalSpacing}
          label={profile.username}
        >
          {profile.username}
        </Contact>
      ))}
      <Spacer />
    </ContactContainer>

    <Legal> @ 2019 Yiou Chen.</Legal>
  </Footer>
);

export default HomePageFooter;
