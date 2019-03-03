import React from 'react';
import { Title as TitleBase } from './PostCard';
import { connect } from './NodeContext';

const Title = ({ title, subtitle }) => (
  <React.Fragment>
    <TitleBase as="h1">{title}</TitleBase>
    {subtitle && <TitleBase as="h5">{subtitle}</TitleBase>}
  </React.Fragment>
);

const mapStateToProps = node => ({
  title: node.title,
  subtitle: node.subtitle,
});
export default connect(mapStateToProps)(Title);
