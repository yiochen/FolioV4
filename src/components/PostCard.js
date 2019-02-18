import React from 'react';
import { Link } from 'gatsby';
import styled from 'astroturf';

export const Title = styled('h3')`
  @import '../globalStyle';
  color: #777;
  font-family: $secondaryFont;
  margin: 0;
`;

export const SubTitle = styled('h5')`
  color: #777;
  margin: 0;
`;

export const DateLabel = styled('p')`
  @import '../globalStyle';
  color: $textNoteColor;
`;

export const Excerpt = styled('p')`
  margin: 0;
`;

const MoarLinkSection = styled('section')`
  @import '../globalStyle';
  font-family: $secondaryFont;
  text-align: right;
`;

const MoarLinkLink = styled(Link)`
  @import '../globalStyle';
  color: $accent;
`;

const Card = styled('section')`
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
      <MoarLinkLink to={href}>[ Read More ]</MoarLinkLink>
    </MoarLinkSection>
  </Card>
);
