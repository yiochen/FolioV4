import React from 'react';
import { styled } from 'linaria/react';
import theme, { rem } from '../resumeTheme';
import Dot from './ResumeTimelineDot';

const Container = styled.div``;

const Category = styled.h3`
  ${theme.h3};
  display: inline-block;
  font-weight: bold;
  font-size: ${theme.fontSize};
  width: ${rem(5)};
  min-width: ${rem(5)};
  line-height: 1.2;
  margin: 0;
  margin-left: ${rem(1)};
`;

const SkillLine = styled.div`
  ${theme.p};
  display: flex;
  align-items: baseline;
  margin-left: calc(${rem(2)} + 1pt);
`;

const CategoryItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline;
  margin-left: ${rem(1)};
`;

const Skill = styled.li`
  display: inline-block;
  margin-right: ${rem(0.5)};
`;

const Skills = ({ skills }) => (
  <React.Fragment>
    {skills.map(({ category, items }) => (
      <SkillLine key={category}>
        <Category>{category}</Category>
        <CategoryItems>
          {items.map(item => (
            <Skill key={item}>{item}</Skill>
          ))}
        </CategoryItems>
      </SkillLine>
    ))}
  </React.Fragment>
);

export default Skills;
