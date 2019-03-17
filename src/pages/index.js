import React from 'react';
import { styled } from 'linaria/react';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import TitleLabel from '../components/TitleLabel';
import Selfie from '../components/Selfie';
import SplitPane from '../components/SplitPane';
import Experience from '../components/Experience';
import Education from '../components/Education';
import NavButton from '../components/NavButton';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import data from '../resumeData';
import theme from '../globalStyle';
import HomePageFooter from '../components/HomePageFooter';

const Summary = styled('p')`
  font-family: ${theme.secondaryFont};
`;

const Name = styled.h1`
  margin-bottom: 1rem;
`;
const Address = styled.p`
  color: ${theme.textNoteColor};
  margin-bottom: 0;
`;
const AdressLabel = styled.span`
  margin-left: 1rem;
`;

const IndexPage = ({ location }) => (
  <Layout location={location} footer={<HomePageFooter data={data} />}>
    <main>
      <Helmet>
        <meta property="og:description" content={data.basics.summary} />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavButton to="/blog/0">BLOG</NavButton>

      <Section>
        <Selfie />
        <SplitPane>
          <div>
            <Name>{data.basics.name.toUpperCase()}</Name>
            <Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <AdressLabel>{data.basics.location.address}</AdressLabel>
            </Address>
          </div>
          <Summary>{data.basics.summary}</Summary>
        </SplitPane>
      </Section>

      <Section>
        <TitleLabel>Experience</TitleLabel>
        {data.work.map(experience => (
          <Experience {...experience} key={experience.company} />
        ))}
        {data.education.map(education => (
          <Education {...education} key={education.institution} />
        ))}
      </Section>
    </main>
  </Layout>
);

export default IndexPage;
