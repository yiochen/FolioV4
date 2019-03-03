import React from 'react';
import { styled } from 'linaria/react';

import PostTitle from './PostTitle';
import { connect } from './NodeContext';
import { defaultCover } from '../utils';
import theme from '../globalStyle';

import PostDate from './PostDate';

const FigureContainer = styled('figure')`
  width: 100%;
  margin: 0;
`;

const CoverImage = styled('div')`
  width: 100%;
  height: auto;
  min-height: 400px;
  background-position: 50% 59%;
  background-size: cover;
  @media (min-width: 1200px) {
    height: 60vh;
  }
`;

const Figcaption = styled('figcaption')`
  color: ${theme.textNoteColor};
  font-size: 1.5rem;
  padding: 0 1rem;
  display: inline;
`;

const Cover = ({ src, coverTitle, credit, sourceLink }) => (
  <FigureContainer>
    <CoverImage style={{ backgroundImage: `url(${src})` }} alt={coverTitle} />
    <a href={sourceLink} target="_blank" rel="noopener noreferrer">
      <Figcaption>{credit}</Figcaption>
    </a>
  </FigureContainer>
);

const mapStateToProps = node => {
  const cover = node.cover || defaultCover;
  return {
    src: cover.image.full.src,
    coverTitle: cover.image.PostTitle,
    credit: cover.credit,
    sourceLink: cover.sourceLink,
  };
};

const ConnectedCover = connect(mapStateToProps)(Cover);

const SplitedContainer = styled('div')`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    padding-top: 50px;
    flex-direction: row-reverse;
    margin: 0 65px;
  }
`;

const TitlePane = styled('div')`
  max-width: 960px;
  margin: auto;
  padding: 30px 0 0 0;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    max-width: 612px;
    padding: 60px 60px 32px 0;
    display: inline-block;
  }
`;

const CoverPane = styled('div')`
  flex-grow: 1;
`;

const PostHeader = () => (
  <SplitedContainer>
    <CoverPane>
      <ConnectedCover />
    </CoverPane>
    <TitlePane>
      <PostTitle />
      <PostDate />
    </TitlePane>
  </SplitedContainer>
);

export default PostHeader;
