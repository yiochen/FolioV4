import React from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

export const Title = styled('h3')`
  color: ${theme.textColor};
  font-family: ${theme.secondaryFont};
  margin: 0;
`;

export const SubTitle = styled('h5')`
  color: ${theme.textNoteColor};
  margin: 0;
  margin-top: 0.5rem;
`;

export const DateLabel = styled('p')`
  margin: 0;
  margin-top: 2rem;
  color: ${theme.textNoteColor};
  font-size: 1.5rem;
`;

export const Excerpt = styled('p')`
  margin: 0;
  margin-top: 2rem;
  color: ${theme.textNoteColor};
`;

const MoreLinkSection = styled('div')`
  font-family: ${theme.secondaryFont};
  text-align: right;
`;

const MoreLinkLink = styled(Link)`
  color: ${theme.accent};
`;

const Card = styled('section')`
  /* border-bottom: 1px solid #ddd; */
  margin: 2em 0 0 0;
  padding-bottom: 2em;
`;

export default ({ title, subtitle, date, excerpt, href }) => (
  <Card>
    <Link to={href}>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Excerpt>{excerpt}</Excerpt>
    </Link>
    <DateLabel>Posted on {date}</DateLabel>
  </Card>
);
