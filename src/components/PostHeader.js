import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import PostTitle from './PostTitle';
import { connect } from './NodeContext';
import { defaultCover } from '../utils';

import PostDate from './PostDate';

console.log(defaultCover);
const FigureContainer = styled.figure`
  width: 100%;
  margin: 0;
`;

const CoverImage = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background-position: 50% 59%;
  background-size: cover;
  @media (min-width: 1200px) {
    height: 60vh;
  }
`;

const Figcaption = styled.figcaption`
  color: #aaa;
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

const BaseContainer = styled.div`
  padding-top: 60px;
  @media (min-width: 1200px) {
    padding-top: 100px;
  }
`;

const SplitedContainer = styled(BaseContainer)`
  margin: 0 65px;
  display: flex;
  flex-direction: row;
`;

const StackContainer = BaseContainer;

const TitlePane = styled.div`
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

const CoverPane = styled.div`
  flex-grow: 1;
`;

const PostHeader = () => (
  <Media query="(min-width: 1200px)">
    {matches =>
      matches ? (
        <SplitedContainer>
          <TitlePane>
            <PostTitle />
            <PostDate />
          </TitlePane>
          <CoverPane>
            <ConnectedCover />
          </CoverPane>
        </SplitedContainer>
      ) : (
        <StackContainer>
          <ConnectedCover />
          <TitlePane>
            <PostTitle />
            <PostDate />
          </TitlePane>
        </StackContainer>
      )
    }
  </Media>
);

export default PostHeader;
