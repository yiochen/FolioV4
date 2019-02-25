import React from 'react';
import styled, { css } from 'astroturf';
import resume from '../resume.json';
import SquareDot from '../components/SquareDot';
import Experience from '../components/ResumeExperience';

const ACCENT = '#373d48';

css`
  :global(html) {
    font-size: 12pt;
  }
  :global(body) {
    @import url('https://fonts.googleapis.com/css?family=Arimo:400,700');
    background-color: #ececec;
    font-family: 'Arimo', sans-serif;
  }

  :global(p) {
    margin-bottom: 0.5rem;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    letter-spacing: 0;
  }
`;

const sharable = css`
  .inlineBlock {
    display: inline-block;
  }
  .verticalTop {
    vertical-align: top;
  }
`;

const Page = styled.main`
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
  background: ${ACCENT};
  padding: 2.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const FirstName = styled.span`
  font-weight: normal;
`;
const LastName = styled.span`
  font-weight: bold;
  margin-left: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
`;

const Contact = styled.p`
  font-size: 1rem;
`;

const contactStyle = css`
  .icon {
    vertical-align: text-bottom;
  }
  .info {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
  }
`;

const Section = styled.section`
  margin: 1rem 2.5rem;
  display: block;
  position: relative;
  line-height: normal;
  &.timeline {
    margin: 0 2.5rem;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 1rem;
      border-right: 1pt solid ${ACCENT};
    }
  }
`;

const Objective = styled.p`
  text-align: center;
  font-size: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  display: inline-block;
  margin-left: 1rem;
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
        />
      ))}
    </Section>
  </Page>
);

export default ResumePage;

function join(...classnames) {
  return classnames.join(' ');
}
