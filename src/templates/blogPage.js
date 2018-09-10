import React from 'react';
import { Link } from 'gatsby';
import PostCard from '../components/PostCard';
import NavButton from '../components/NavButton';
import Layout from '../components/Layout';
import globalStyle from '../globalStyle';
import utils from '../utils';

const containerStyle = {
  paddingTop: '3em',
};

const paginationStyle = {
  fontFamily: globalStyle.secondaryFont,
  display: 'flex',
};

const filler = {
  flexGrow: 1,
};

export default ({ pageContext, location }) => {
  const { chunk, page, hasNext } = pageContext;
  return (
    <Layout location={location}>
      <section style={containerStyle}>
        <NavButton to="/">HOME</NavButton>
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

        <div style={paginationStyle}>
          {page > 0 && <Link to={utils.toBlogPage(page - 1)}>Newer posts</Link>}
          <span style={filler} />
          {hasNext && <Link to={utils.toBlogPage(page + 1)}>Older posts</Link>}
        </div>
      </section>
    </Layout>
  );
};
