import React from 'react';
import { styled } from 'linaria/react';
import theme, { rem } from '../resumeTheme';

const Icon = styled.span`
  vertical-align: text-bottom;
  margin-right: ${rem(0.5)};
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${rem(1)};
`;

const Dot = styled.span`
  width: calc(${rem(2)} + 1pt);
  min-width: calc(${rem(2)} + 1pt);
  display: block;
  text-align: center;
  &::before {
    content: '';
    height: ${rem(0.5)};
    width: ${rem(0.5)};
    overflow: hidden;
    display: inline-block;
    vertical-align: baseline;
    transform: rotate(45deg);
    background: black;
  }
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
          <Icon className="icon-location" />
          {address}
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