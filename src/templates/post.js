import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import utils from '../utils';
import NavButton from '../components/NavButton';
import { NodeProvider } from '../components/NodeContext';
import PostHeader from '../components/PostHeader';
import Layout from '../components/Layout';
import { Title, SubTitle } from '../components/PostCard';
import PostHTMLHead from '../components/PostHtmlHead';
import Comment from '../components/Comment';

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

const ClearFix = styled.div`
  clear: both;
`;

const PostContainer = styled.section`
  padding-top: 5em;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
`;

const PostContent = styled.div`
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

  code,
  pre code {
    overflow-x: auto;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const getPostURL = path => `https://yiou.me/blog/posts/${path}`;
class Post extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { pageContext, location } = this.props;
    const { node, backLink, previous, next } = pageContext;
    const { path, title, subtitle } = node;
    const { html } = node.content.childMarkdownRemark;

    const postTitle = [title, subtitle].filter(Boolean).join(' - ');
    return (
      <Layout location={location}>
        <NavButton to={backLink}>BLOG</NavButton>
        <NodeProvider value={node}>
          <PostHTMLHead />
          <PostHeader />
          <PostContainer>
            <PostContent dangerouslySetInnerHTML={{ __html: html }} />
            <Comment
              url={getPostURL(path)}
              identifier={path}
              title={postTitle}
            />
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
        </NodeProvider>
      </Layout>
    );
  }
}

export default Post;
