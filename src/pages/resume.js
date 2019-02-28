import React from 'react';
import styled, { css } from 'astroturf';
import resume from '../resume.json';
import SquareDot from '../components/SquareDot';
import Experience from '../components/ResumeExperience';

const ACCENT = '#373d48';

const sharable = css`
  .inlineBlock {
    display: inline-block;
  }
  .verticalTop {
    vertical-align: top;
  }
`;

css`
  @page {
    size: letter portrait;
    margin: 0;
  }

  :global(body) {
    background-color: #ececec;
  }
`;

const Page = styled.main`
  @import './resume';
  @import url('https://fonts.googleapis.com/css?family=Arimo:400,700');
  font-family: 'Arimo', serif;
  font-size: $fontSize;
  width: 8.5in;
  height: 11in;
  background: white;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const Header = styled.header`
  @import './resume';
  width: 100%;
  color: white;
  background: ${ACCENT};
  padding: 2.5 * $fontSize;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1``;

const FirstName = styled.span`
  font-weight: normal;
`;
const LastName = styled.span`
  @import './resume';
  font-weight: bold;
  margin-left: $fontSize;
`;

const SubTitle = styled.h2`
  @import './resume';
  @include h2;
`;

const Contact = styled.p`
  @import './resume';
  @include p;
  margin-bottom: 0;
`;

const contactStyle = css`
  @import './resume';
  .icon {
    vertical-align: text-bottom;
  }
  .info {
    margin-left: $fontSize;
    color: white;
    text-decoration: none;
  }
`;

const Section = styled.section`
  @import './resume';
  margin: $fontSize 2.5 * $fontSize;
  display: block;
  position: relative;
  line-height: normal;
  &.timeline {
    margin: 0 2.5 * $fontSize;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: $fontSize;
      border-right: 1pt solid ${ACCENT};
    }
  }
`;

const Objective = styled.p`
  @import './resume';
  @include p;
  text-align: center;
`;

const SectionTitle = styled.h2`
  @import './resume';
  @include h2;
  font-weight: 800;
  margin-bottom: 1.5 * $fontSize;
  display: inline-block;
  margin-left: $fontSize;
`;

const Skills = styled.ul`
  @import './resume';
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5 * $fontSize;
  margin-left: 3 * $fontSize + 1pt;
`;

const Skill = styled.li`
  @import './resume';
  display: inline-block;
  margin-right: 0.5 * $fontSize;
`;

const ResumePage = () => (
  <Page>
    <Header>
      <div className={sharable.inlineBlock}>
        <Name>
          <FirstName>{resume.basics.firstname}</FirstName>
          <LastName>{resume.basics.lastname}</LastName>
        </Name>
        <SubTitle>{resume.basics.label}</SubTitle>
      </div>

      <div className={sharable.inlineBlock}>
        <Contact>
          <span className={join('icon-earth', contactStyle.icon)} />
          <a className={contactStyle.info} href={resume.basics.website}>
            {resume.basics.website}
          </a>
        </Contact>
        <Contact>
          <span className={join('icon-envelop', contactStyle.icon)} />
          <a
            className={contactStyle.info}
            href={`mailto:${resume.basics.email}`}
          >
            {resume.basics.email}
          </a>
        </Contact>
        {resume.basics.profiles.map(profile => (
          <Contact key={profile.network}>
            <span className={join(profile.icon, contactStyle.icon)} />
            <a className={contactStyle.info} href={profile.url}>
              {profile.username}
            </a>
          </Contact>
        ))}
      </div>
    </Header>
    <Section>
      <Objective>{resume.basics.objective}</Objective>
    </Section>
    <Section timeline={true}>
      <SquareDot icon="icon-briefcase" />
      <SectionTitle>EXPERIENCE</SectionTitle>
      {resume.work.map(work => (
        <Experience
          key={work.company}
          title={work.company}
          subTitle={work.position}
          startDate={work.startDate}
          endDate={work.endDate}
          highlights={work.highlights}
          address={work.address}
        />
      ))}
    </Section>
    <Section timeline={true}>
      <SquareDot icon="icon-books" />
      <SectionTitle>EDUCATION</SectionTitle>
      {resume.education.map(education => (
        <Experience
          key={education.institution}
          title={education.institution}
          subTitle={`${education.studyType} of ${education.area}`}
          startDate={education.startDate}
          endDate={education.endDate}
          address={education.address}
        />
      ))}
    </Section>
    <Section timeline={true}>
      <SquareDot icon="icon-magic-wand" />
      <SectionTitle>TOOLS</SectionTitle>
      {Object.values(resume.skills).map((skills, index) => (
        <Skills key={index}>
          {skills.map(skill => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>
      ))}
    </Section>
  </Page>
);

export default ResumePage;

function join(...classnames) {
  return classnames.join(' ');
}
