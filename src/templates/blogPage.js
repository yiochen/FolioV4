import React from 'react';
import Link from 'gatsby-link';
import PostCard from '../components/PostCard';
import NavButton from '../components/NavButton';
import globalStyle from '../globalStyle';

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

export default ({ pathContext }) => {
  const { chunk, page, hasNext } = pathContext;
  return (
    <section style={containerStyle}>
      <NavButton to="/">HOME</NavButton>
      {chunk.map(blog => {
        const { title, subtitle, path, content, publishDate: date, id } = blog.node;

        const { excerpt } = content.childMarkdownRemark;
        return (
          <PostCard
            key={id}
            title={title}
            subtitle={subtitle}
            href={`/blog/posts/${path}`}
            excerpt={excerpt}
            date={date}
          />
        );
      })}

      <div style={paginationStyle}>
        {page > 0 && <Link to={`/blog/${page - 1}/`}>Newer posts</Link>}
        <span style={filler} />
        {hasNext && <Link to={`/blog/${page + 1}/`}>Older posts</Link>}
      </div>
    </section>
  );
};
