import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import utils from '../utils';
import NavButton from '../components/NavButton';

import { Title, SubTitle, DateLabel } from '../components/PostCard';

const PrimaryTitle = Title.withComponent('h1');

const PrimarySubTitle = SubTitle.withComponent('h5');

const RelatedTitle = Title.withComponent('h5');

const RelatedSubTitle = SubTitle.withComponent('h6');

const RelatedPostLink = styled(Link)`
  width: 40%;
  display: block;
`;

RelatedPostLink.Left = RelatedPostLink.extend`
  float: left;
`;

RelatedPostLink.Right = RelatedPostLink.extend`
  float: right;
`;

const TimeToRead = styled.span`
  float: 'right';
`;

const ClearFix = styled.div`
  clear: both;
`;

const PostContainer = styled.section`
  padding-top: 5em;
`;

const Post = styled.div`
  margin-top: 4em;
  margin-bottom: 4em;
  border-bottom: 1px solid rgb(221, 221, 221);
  color: rgb(58, 58, 58);

  blockquote {
    background: #eee;
    padding: 1em;
    p {
      margin: 0;
    }
  }

  pre code {
    overflow-x: auto;
  }

  img {
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

class PostTemplate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { node, backLink, previous, next } = this.props.pathContext;
    const { title, subtitle, publishDate, tags } = node;
    const { html, timeToRead, excerpt } = node.content.childMarkdownRemark;

    const documentTitle = `${title}${subtitle ? ` - ${subtitle}` : ''}`;
    return (
      <PostContainer>
        <Helmet>
          <title>documentTitle</title>
          <meta property="og:title" content={documentTitle} />
          <meta property="og:description" content={excerpt} />
          <meta property="og:type" content="article" />
        </Helmet>
        <NavButton to={backLink}>BLOG</NavButton>
        <PrimaryTitle>{node.title}</PrimaryTitle>
        {subtitle && <PrimarySubTitle>{node.subtitle}</PrimarySubTitle>}
        <DateLabel>
          {publishDate}
          <TimeToRead>Time to read: {timeToRead} min</TimeToRead>
        </DateLabel>

        <Post dangerouslySetInnerHTML={{ __html: html }} />

        {previous && (
          <RelatedPostLink.Right to={utils.toPostPath(previous.path)}>
            <RelatedTitle>{previous.title}</RelatedTitle>
            {previous.subtitle && (
              <RelatedSubTitle>{previous.subtitle}</RelatedSubTitle>
            )}
          </RelatedPostLink.Right>
        )}
        {next && (
          <RelatedPostLink.Left to={utils.toPostPath(next.path)}>
            <RelatedTitle>{next.title}</RelatedTitle>
            {next.subtitle && (
              <RelatedSubTitle>{next.subtitle}</RelatedSubTitle>
            )}
          </RelatedPostLink.Left>
        )}
        <ClearFix />
      </PostContainer>
    );
  }
}

export default PostTemplate;
