import React from 'react';
import styled from 'styled-components';
import { DateLabel } from './PostCard';
import { connect } from './NodeContext';

const TimeToRead = styled.span`
  margin-left: 20px;
`;
const PostDate = ({ publishDate, timeToRead }) => (
  <DateLabel>
    {publishDate}
    <TimeToRead>Time to read: {timeToRead} min</TimeToRead>
  </DateLabel>
);
const mapStateToProps = node => ({
  publishDate: node.publishDate,
  timeToRead: node.content.childMarkdownRemark.timeToRead,
});

export default connect(mapStateToProps)(PostDate);
