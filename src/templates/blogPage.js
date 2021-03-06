import React from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import PostCard from '../components/PostCard';
import NavButton from '../components/NavButton';
import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import utils from '../utils';
import theme from '../globalStyle';

const Pagination = styled('div')`
  font-family: ${theme.secondaryFont};
  display: flex;
`;

const filler = {
  flexGrow: 1,
};

export default ({ pageContext, location }) => {
  const { chunk, page, hasNext } = pageContext;
  return (
    <Layout location={location}>
      <MainContent>
        <NavButton.FloatTopRight to="/">HOME</NavButton.FloatTopRight>
        {chunk.map(blog => {
          const {
            title,
            subtitle,
            path,
            content,
            publishDate: date,
            id,
          } = blog.node;

          const { excerpt } = content.childMarkdownRemark;
          return (
            <PostCard
              key={id}
              title={title}
              subtitle={subtitle}
              href={utils.toPostPath(path)}
              excerpt={excerpt}
              date={date}
            />
          );
        })}

        <Pagination>
          {page > 0 && (
            <NavButton.Secondary to={utils.toBlogPage(page - 1)}>
              Newer posts
            </NavButton.Secondary>
          )}
          <span style={filler} />
          {hasNext && (
            <NavButton.Secondary to={utils.toBlogPage(page + 1)}>
              Older posts
            </NavButton.Secondary>
          )}
        </Pagination>
      </MainContent>
    </Layout>
  );
};
