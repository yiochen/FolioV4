import React from 'react';
import { Title as TitleBase } from './PostCard';
import { connect } from './NodeContext';
const PostTitle = TitleBase.withComponent('h1');
const PostSubtitle = TitleBase.withComponent('h5');

const Title = ({ title, subtitle }) => (
  <React.Fragment>
    <PostTitle>{title}</PostTitle>
    {subtitle && <PostSubtitle>{subtitle}</PostSubtitle>}
  </React.Fragment>
);

const mapStateToProps = node => ({
  title: node.title,
  subtitle: node.subtitle,
});
export default connect(mapStateToProps)(Title);
