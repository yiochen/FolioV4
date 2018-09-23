import React from 'react';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import TitleLabel from '../components/TitleLabel';
import Selfie from '../components/Selfie';
import SplitPane from '../components/SplitPane';
import Contact from '../components/ContactLink';
import Experience from '../components/Experience';
import Education from '../components/Education';
import SkillCard from '../components/SkillCard';
import NavButton from '../components/NavButton';
import Layout from '../components/Layout';

import data from '../resume.json';

const IndexPage = ({ location }) => (
  <Layout location={location}>
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
            <h1>{data.basics.name.toUpperCase()}</h1>
            <Contact icon="icon-home">{data.basics.location.address}</Contact>
            <Contact icon="icon-envelop" href={`mailto:${data.basics.email}`}>
              {data.basics.email}
            </Contact>
            {data.basics.profiles.map(profile => (
              <Contact
                icon={profile.icon}
                href={profile.url}
                key={profile.network}
              >
                {profile.username}
              </Contact>
            ))}
          </div>
          {data.basics.summary}
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

      <Section>
        <TitleLabel>Skills</TitleLabel>
        <SkillCard skills={data.skills} />
      </Section>
    </main>
  </Layout>
);

export default IndexPage;
