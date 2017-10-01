import React from 'react';
import SkillIcon from './SkillIcon';
import globalStyle from '../globalStyle';

import iconHtml from '../../public/static/html.jpg';
import iconCss from '../../public/static/css.jpg';
import iconJavascript from '../../public/static/javascript.jpg';
import iconAngular from '../../public/static/angular.jpg';
import iconReact from '../../public/static/react.jpg';
import iconVue from '../../public/static/vue.jpg';
import iconJava from '../../public/static/java.jpg';
import iconCsharp from '../../public/static/csharp.jpg';

const iconMapper = {
  iconHtml,
  iconCss,
  iconJavascript,
  iconAngular,
  iconReact,
  iconVue,
  iconJava,
  iconCsharp,
};

const style = {
  textAlign: 'center',
  height: '20em',
};

const descriptionStyle = {
  background: globalStyle.accent,
  padding: '1em',
  color: 'white',
  margin: '0 2em',
  boxSizing: 'border-box',
  textAlign: 'left',
};

export default class SkillCard extends React.Component {
  state = {
    selected: 0,
  };

  render() {
    const { skills } = this.props;
    const { selected } = this.state;
    return (
      <div style={style}>
        {skills.map((skill, index) => (
          <SkillIcon
            src={iconMapper[skill.icon]}
            key={skill.icon}
            selected={selected === index}
            onSelect={() => this.setState({ selected: index })}
            {...skill}
          />
        ))}

        <div style={descriptionStyle}>{skills[selected].usage}</div>
      </div>
    );
  }
}
