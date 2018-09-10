import React from 'react';
import Helmet from 'react-helmet';
import { connect } from './NodeContext';

const PostHtmlHead = ({ documentTitle, excerpt, coverUrl }) => (
  <Helmet>
    <title>{documentTitle}</title>
    <meta property="og:title" content={documentTitle} />
    <meta property="og:description" content={excerpt} />
    <meta property="og:type" content="article" />
    {coverUrl && <meta property="og:image" content={coverUrl} />}
    {coverUrl && <meta property="og:image:height" content="240" />}
    {coverUrl && <meta property="og:image:width" content="360" />}
  </Helmet>
);

const mapStateToProps = node => {
  const { title, subtitle, content, cover } = node;
  const { excerpt } = content.childMarkdownRemark;
  let documentTitle = title;
  if (subtitle) {
    documentTitle = documentTitle + ` - ${subtitle}`;
  }
  const props = {
    documentTitle,
    excerpt,
  };

  if (cover) {
    props.coverUrl = cover.image.thumbnail.src;
  }
  return props;
};

export default connect(mapStateToProps)(PostHtmlHead);
