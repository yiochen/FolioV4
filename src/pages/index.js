import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Section from '../components/Section';
import TitleLabel from '../components/TitleLabel';
import Jumbotron from '../components/Jumbotron';
import Selfie from '../components/Selfie';
import SplitPane from '../components/SplitPane';
import Card from '../components/Card';
import Contact from '../components/ContactLink';
import Experience from '../components/Experience';
import Education from '../components/Education';
import SkillCard from '../components/SkillCard';
import NavButton from '../components/NavButton';

import data from './resume.json';

// const IntroBasicInfo = styled.div`
//   text-align: left;
//   @media
// `;
const IndexPage = () => (
  <main>
    <NavButton to="/blog/0">BLOG</NavButton>

    <Section>
      <Selfie />
      <SplitPane>
        <div>
          <h1>{data.basics.name.toUpperCase()}</h1>
          <Contact icon="icon-home">{data.basics.location.address}</Contact>
          <Contact icon="icon-envelop" href={`mailto:${data.basics.email}`}>
            {data.basics.email}
          </Contact>
          {data.basics.profiles.map(profile => (
            <Contact icon={profile.icon} href={profile.url} key={profile.network}>
              {profile.username}
            </Contact>
          ))}
        </div>
        {data.basics.summary}
      </SplitPane>
    </Section>

    <Section>
      <TitleLabel>Experience</TitleLabel>
      {data.work.map(experience => <Experience {...experience} key={experience.company} />)}
      {data.education.map(education => <Education {...education} key={education.institution} />)}
    </Section>

    <Section>
      <TitleLabel>Skills</TitleLabel>
      <SkillCard skills={data.skills} />
    </Section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </main>
);

export default IndexPage;
