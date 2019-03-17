import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';
import Contact from './ContactLink';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import jumping from '../static/jumping-edited.png';
import { css } from 'linaria';
import Footer from './Footer';

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
  </Footer>
);

export default HomePageFooter;
