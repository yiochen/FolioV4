import React from 'react';
import styled from 'styled-components';
import { Title as TitleBase } from './PostCard';
import { connect } from './NodeContext';
const PostTitle = TitleBase.withComponent('h1');
const PostSubTitle = TitleBase.withComponent('h5');

const Title = ({ title, subTitle }) => (
  <React.Fragment>
    <PostTitle>{title}</PostTitle>
    {subTitle && <PostSubTitle>{subTitle}</PostSubTitle>}
  </React.Fragment>
);

const mapStateToProps = node => ({
  title: node.title,
  subtitle: node.subtitle,
});
export default connect(mapStateToProps)(Title);
