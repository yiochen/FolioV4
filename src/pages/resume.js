import React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import resume from '../resume.json';
import SquareDot from '../components/SquareDot';
import Experience from '../components/ResumeExperience';
import theme, { rem } from '../resumeTheme';

const inlineBlock = css`
  display: inline-block;
`;

export const global = css`
  :global() {
    body {
      background-color: #ececec;
      @page {
        size: letter portrait;
        margin: 0;
      }
    }
  }
`;

const Page = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Arimo:400,700');
  font-family: 'Arimo', serif;
  font-size: ${theme.fontSize};
  width: 8.5in;
  height: 11in;
  background: white;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  color: white;
  background: ${theme.resumeAccent};
  padding: ${rem(2.5)};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1``;

const FirstName = styled.span`
  font-weight: normal;
`;
const LastName = styled.span`
  font-weight: bold;
  margin-left: ${rem(1)};
`;

const SubTitle = styled.h2`
  ${theme.h2};
`;

const Contact = styled.p`
  ${theme.p};
  margin-bottom: 0;
`;

const contactIcon = css`
  vertical-align: text-bottom;
`;
const contactInfo = css`
  margin-left: ${rem(1)};
  color: white;
  text-decoration: none;
`;

const Section = styled.section`
  margin: ${rem(1)} ${rem(2.5)};
  display: block;
  position: relative;
  line-height: normal;
  &.timeline {
    margin: 0 ${rem(2.5)};
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: ${rem(1)};
      border-right: 1pt solid ${theme.resumeAccent};
    }
  }
`;

const Objective = styled.p`
  ${theme.p};
  text-align: center;
`;

const SectionTitle = styled.h2`
  ${theme.h2};
  font-weight: 800;
  margin-bottom: ${rem(1.5)};
  display: inline-block;
  margin-left: ${rem(1)};
`;

const Skills = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: ${rem(0.5)};
  margin-left: calc(${rem(3)} + 1pt);
`;

const Skill = styled.li`
  display: inline-block;
  margin-right: ${rem(0.5)};
`;

const ResumePage = () => (
  <Page>
    <Header>
      <div className={inlineBlock}>
        <Name>
          <FirstName>{resume.basics.firstname}</FirstName>
          <LastName>{resume.basics.lastname}</LastName>
        </Name>
        <SubTitle>{resume.basics.label}</SubTitle>
      </div>

      <div className={inlineBlock}>
        <Contact>
          <span className={join('icon-earth', contactIcon)} />
          <a className={contactInfo} href={resume.basics.website}>
            {resume.basics.website}
          </a>
        </Contact>
        <Contact>
          <span className={join('icon-envelop', contactIcon)} />
          <a className={contactInfo} href={`mailto:${resume.basics.email}`}>
            {resume.basics.email}
          </a>
        </Contact>
        {resume.basics.profiles.map(profile => (
          <Contact key={profile.network}>
            <span className={join(profile.icon, contactIcon)} />
            <a className={contactInfo} href={profile.url}>
              {profile.username}
            </a>
          </Contact>
        ))}
      </div>
    </Header>
    <Section>
      <Objective>{resume.basics.objective}</Objective>
    </Section>
    <Section className="timeline">
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
    <Section className="timeline">
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
    <Section className="timeline">
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
