import React from 'react';
import styled from 'astroturf';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1rem;
`;

const Dot = styled.span`
  width: calc(2rem + 1pt);
  display: block;
  text-align: center;
  &::before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    transform: rotate(45deg);
    background: black;
  }
`;

const Time = styled.span`
  font-weight: bold;
  margin-left: 1rem;
  font-size: 1rem;
  width: 5rem;
  line-height: 1.2;
`;

const Detail = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
  font-size: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const Highlights = styled.ul`
  margin: 0;
  line-height: 1.5;
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
      <SubTitle>{subTitle}</SubTitle>
      <Highlights>
        {highlights.map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </Highlights>
    </Detail>
  </Container>
);

export default Experience;
