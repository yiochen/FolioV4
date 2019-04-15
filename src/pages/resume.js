import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faBriefcase,
  faMagic,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import resume from '../resumeData';
import SquareDot from '../components/SquareDot';
import Experience from '../components/ResumeExperience';
import Skills from '../components/ResumeSkills';
import theme, { rem } from '../resumeTheme';
import '../configureFontAwesome';

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
  display: flex;
  flex-direction: column;
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

const Name = styled.h1`
  ${theme.h1};
`;

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

const SafeAnchor = ({ className, style, ...rest }) => (
  <a
    style={style}
    className={className}
    {...rest}
    target="_blank"
    rel="noopener noreferrer"
  />
);
const Contact = styled(SafeAnchor)`
  ${theme.p};
  margin-bottom: 0;
  display: block;
  text-decoration: none;
  color: white;
`;

const ContactInfo = styled.span`
  margin-left: ${rem(1)};
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

const SectionTitle = styled.h2`
  ${theme.h2};
  font-weight: 800;
  margin-bottom: ${rem(1.5)};
  display: inline-block;
  margin-left: ${rem(1)};
`;

const Sections = styled.section`
  margin: 0;
  padding-top: ${rem(1.5)};
  /* padding-bottom: ${rem(2)}; */
`;

const SinglePosition = styled.p`
  margin: 0;
  margin-bottom: ${rem(0.5)};
`;

const PositionName = styled.span`
  margin-right: ${rem(0.5)};
`;

const PositionTime = styled.span`
  font-weight: normal;
  margin-left: ${rem(0.5)};
`;

const MultiplePositions = ({ positions }) => {
  return (
    <>
      {positions.map(position => (
        <SinglePosition key={position.name}>
          <PositionName>{position.name}</PositionName>
          <PositionTime>{`${position.startDate} - ${
            position.endDate
          }`}</PositionTime>
        </SinglePosition>
      ))}
    </>
  );
};
const ResumePage = () => (
  <Page>
    <Helmet>
      <title> Yiou's Resume </title>
      <meta name="theme-color" content={theme.accent} />
      <meta property="og:title" content="Yiou Chen" />
      <meta property="og:description" content="Yiou's resume" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Header>
      <div className={inlineBlock}>
        <Name>
          <FirstName>{resume.basics.firstname}</FirstName>
          <LastName>{resume.basics.lastname}</LastName>
        </Name>
        <SubTitle>{resume.basics.label}</SubTitle>
      </div>

      <div className={inlineBlock}>
        <Contact href={resume.basics.website}>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ verticalAlign: 'text-bottom' }}
          />
          <ContactInfo>{resume.basics.website}</ContactInfo>
        </Contact>
        <Contact href={`mailto:${resume.basics.email}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ verticalAlign: 'text-bottom' }}
          />
          <ContactInfo>{resume.basics.email}</ContactInfo>
        </Contact>
        {resume.basics.profiles.map(profile => (
          <Contact key={profile.network} href={profile.url}>
            <FontAwesomeIcon
              icon={profile.icon}
              style={{ verticalAlign: 'text-bottom' }}
            />
            <ContactInfo>{profile.username}</ContactInfo>
          </Contact>
        ))}
      </div>
    </Header>

    <Sections>
      <Section className="timeline">
        <SquareDot icon={faBriefcase} />
        <SectionTitle>EXPERIENCE</SectionTitle>
        {resume.work.map(work => (
          <Experience
            key={work.company}
            title={work.company}
            subTitle={
              typeof work.position === 'string' ? (
                <SinglePosition>{work.position}</SinglePosition>
              ) : (
                <MultiplePositions positions={work.position} />
              )
            }
            startDate={work.startDate}
            endDate={work.endDate}
            highlights={work.highlights}
            address={work.address}
          />
        ))}
      </Section>
      <Section className="timeline">
        <SquareDot icon={faGraduationCap} />
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
        <SquareDot icon={faMagic} />
        <SectionTitle>TOOLS</SectionTitle>
        <Skills skills={resume.skills} />
      </Section>
    </Sections>
  </Page>
);

export default ResumePage;

function join(...classnames) {
  return classnames.join(' ');
}
