import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section';
import TitleLabel from '../components/TitleLabel';
import Jumbotron from '../components/Jumbotron';
import Selfie from '../components/Selfie';
import SplitPane from '../components/SplitPane';

const IndexPage = () => (
  <main>
    <Section>
      <Selfie />
      <SplitPane>
        <div style={{ textAlign: 'right' }}>
          <h1>YIOU CHEN</h1>
          <a href="mailto: hi@yiou.me">hi@yiou.me</a>
        </div>
        Hi, I am Yiou (pronounced “EE-Oh”). I work at Veeva Systems in the Vault UI Platform team.
      </SplitPane>
    </Section>



    <Section>
      <TitleLabel>Work</TitleLabel>
      We are a team of passionate developers, working on improving the foundation of our enterprise applications using the latest technologies and best practices. Some of the technologies we use everyday includes React, Webpack, Sass. Jest, Enzyme, and etc.</Section>

    <Section>
      <TitleLabel>Education</TitleLabel>
      I graduated from Stony Brook University in May 2017 with Bachelor of Science in Computer Science. I also completed a minor in Digital Arts.Currently I am living in Pleasanton, a lovely town on the east bay California.</Section>

    <Section>
      <TitleLabel>Personal Projects</TitleLabel>
      Most of my projects are on Github, with some exceptions on Bitbucket. I play with various front-end technologies such as Angular, React, Vue, Polymer and so on. I also fiddle with game development using Unity or Cocos2Dx. I am trying to keep the habit of writing down things I learned from daily work and personal project in my blog. Check it out :)</Section>
    <Link to="/page-2/">Go to page 2</Link>
  </main >
)

export default IndexPage
