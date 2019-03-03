import React from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

export const Title = styled('h3')`
  color: #777;
  font-family: ${theme.secondaryFont};
  margin: 0;
`;

export const SubTitle = styled('h5')`
  color: #777;
  margin: 0;
`;

export const DateLabel = styled('p')`
  color: ${theme.textNoteColor};
`;

export const Excerpt = styled('p')`
  margin: 0;
`;

const MoarLinkSection = styled('section')`
  font-family: ${theme.secondaryFont};
  text-align: right;
`;

const MoarLinkLink = styled(Link)`
  color: ${theme.accent};
`;

const Card = styled('section')`
  border-bottom: 1px solid #ddd;
  margin: 2em 0 0 0;
  padding-bottom: 2em;
`;

const PostCard = ({ title, subtitle, date, excerpt, href }) => (
  <Card>
    <Link to={href}>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Link>
    <DateLabel>Posted on {date}</DateLabel>
    <Excerpt>{excerpt}</Excerpt>
    <MoarLinkSection>
      <MoarLinkLink to={href}>[ Read More ]</MoarLinkLink>
    </MoarLinkSection>
  </Card>
);

export default PostCard;
