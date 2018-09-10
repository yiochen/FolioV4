import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import globalStyle from '../globalStyle';

export const Title = styled.h3`
  color: #777;
  font-family: ${globalStyle.secondaryFont};
  margin: 0;
`;

export const SubTitle = styled.h5`
  color: #777;
  margin: 0;
`;

export const DateLabel = styled.p`
  color: #aaa;
`;

export const Excerpt = styled.p`
  margin: 0;
`;

const MoarLinkSection = styled.section`
  font-family: ${globalStyle.secondaryFont};
  text-align: right;
`;

const MoarLinkLink = styled(Link)`
  color: ${globalStyle.accent};
`;

const Card = styled.section`
  border-bottom: 1px solid #ddd;
  margin: 2em 0 0 0;
  padding-bottom: 2em;
`;

export default ({ title, subtitle, date, excerpt, href }) => (
  <Card>
    <Link to={href}>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Link>
    <DateLabel>Posted on {date}</DateLabel>
    <Excerpt>{excerpt}</Excerpt>
    <MoarLinkSection>
      <MoarLinkLink to={href}>[ Read Moar ]</MoarLinkLink>
    </MoarLinkSection>
  </Card>
);
