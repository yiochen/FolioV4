import React from 'react';
import { styled } from 'linaria/react';
import theme, { rem } from '../resumeTheme';
import Dot from './ResumeTimelineDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${rem(1)};
`;

const Time = styled.span`
  font-weight: bold;
  margin-left: ${rem(1)};
  font-size: ${theme.fontSize};
  width: ${rem(5)};
  min-width: ${rem(5)};
  line-height: 1.2;
`;

const Detail = styled.div`
  margin-left: ${rem(1)};
  flex-grow: 1;
  font-size: ${theme.fontSize};
`;

const Title = styled.h3`
  ${theme.h3};
  font-weight: bold;
  display: inline-block;
`;

const Address = styled.p`
  ${theme.p};
  display: inline-block;
  float: right;
`;

const AddressLabel = styled.span`
  margin-left: ${rem(0.5)};
`;

const SubTitle = styled.h4`
  ${theme.h4};
  font-weight: normal;
  font-style: italic;
`;

const Highlights = styled.ul`
  margin: 0;
  line-height: 1.5;
  padding-inline-start: ${rem(1)};
  list-style-type: disc;
`;

const Experience = ({
  title,
  subTitle,
  startDate,
  endDate,
  highlights = [],
  address,
} = {}) => (
  <Container>
    <Dot />
    <Time>{`${startDate} - ${endDate}`}</Time>
    <Detail>
      <Title>{title}</Title>
      {address && (
        <Address>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ verticalAlign: 'text-bottom' }}
          />
          <AddressLabel>{address}</AddressLabel>
        </Address>
      )}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Highlights>
        {highlights.map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </Highlights>
    </Detail>
  </Container>
);

export default Experience;
