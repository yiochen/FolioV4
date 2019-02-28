import React from 'react';
import styled from 'astroturf';

const Container = styled.div`
  @import '../pages/resume';
  display: flex;
  align-items: flex-start;
  padding-bottom: $fontSize;
`;

const Dot = styled.span`
  @import '../pages/resume';
  width: 2 * $fontSize + 1pt;
  min-width: 2 * $fontSize + 1pt;
  display: block;
  text-align: center;
  &::before {
    content: '';
    height: 0.5 * $fontSize;
    width: 0.5 * $fontSize;
    overflow: hidden;
    display: inline-block;
    vertical-align: baseline;
    transform: rotate(45deg);
    background: black;
  }
`;

const Time = styled.span`
  @import '../pages/resume';
  font-weight: bold;
  margin-left: $fontSize;
  font-size: $fontSize;
  width: 5 * $fontSize;
  min-width: 5 * $fontSize;
  line-height: 1.2;
`;

const Detail = styled.div`
  @import '../pages/resume';
  margin-left: $fontSize;
  flex-grow: 1;
  font-size: $fontSize;
`;

const Title = styled.h3`
  @import '../pages/resume';
  @include h3;
  font-weight: bold;
`;

const SubTitle = styled.h4`
  @import '../pages/resume';
  @include h4;
  font-weight: normal;
  font-style: italic;
`;

const Highlights = styled.ul`
  @import '../pages/resume';
  margin: 0;
  line-height: 1.5;
  padding-inline-start: $fontSize;
  list-style-type: disc;
`;

const Experience = ({
  title,
  subTitle,
  startDate,
  endDate,
  highlights = [],
} = {}) => (
  <Container>
    <Dot />
    <Time>{`${startDate} - ${endDate}`}</Time>
    <Detail>
      <Title>{title}</Title>
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
