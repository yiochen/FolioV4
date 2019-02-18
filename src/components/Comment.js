import React from 'react';
import styled from 'astroturf';
import Disqus from 'disqus-react';

const disqusShortname = 'code-z';

const CommentContainer = styled('div')`
  padding-bottom: 5rem;
`;

const Comment = ({ url, identifier, title }) => {
  const disqusConfig = {
    url,
    identifier,
    title,
  };
  return (
    <CommentContainer>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </CommentContainer>
  );
};

export default Comment;
