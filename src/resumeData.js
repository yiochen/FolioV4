import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default {
  basics: {
    name: 'Yiou Chen',
    firstname: 'Yiou',
    lastname: 'Chen',
    label: 'Software engineer',
    picture: '',
    email: 'yiouc99@gmail.com',
    phone: '',
    website: 'https://yiou.me',
    objective:
      'Looking for software engineering positions (frontend) in California Bay Area.',
    summary: 'Frontend engineer at Google. Working in Google Assistant team.',
    location: {
      address: 'Pleasanton, CA',
      postalCode: '',
      city: '',
      countryCode: '',
      region: '',
    },
    profiles: [
      {
        network: 'Github',
        icon: faGithub,
        username: 'yiochen',
        url: 'https://github.com/yiochen',
      },
      {
        network: 'Linkedin',
        icon: faLinkedinIn,
        username: 'yiouchen',
        url: 'https://www.linkedin.com/in/yiouchen/',
      },
    ],
  },
  work: [
    {
      company: 'Google',
      position: 'Software Engineer',
      startDate: '06/2019',
      endDate: 'Present',
      address: 'Mountain View, CA',
      summary: 'I work in the Google Assistant team.',
      website: 'https://google.com',
      toolset: [],
      highlights: [],
    },
    {
      company: 'Veeva Systems',
      position: [
        {
          name: 'Software Engineer • UI Platform',
          startDate: '04/2019',
          endDate: '05/2019',
        },
        {
          name: 'Associate Engineer • UI Platform',
          startDate: '06/2017',
          endDate: '04/2019',
        },
      ],
      team: 'UI Platform',
      website: 'https://www.veeva.com/',
      startDate: '06/2017',
      endDate: 'Present',
      address: 'Pleasanton, CA',
      summary:
        'I worked in the UIPlatform team for Veeva Vault. Our objective was to improve the foundation of our enterprise application using the latest technologies and best practices.',
      toolset: [
        'React',
        'Redux',
        'Webpack',
        'Babel',
        'Jest',
        'ESlint',
        'Prettier',
        'Storybook',
        'Sass',
      ],
      highlights: [
        'Set up CDN for frontend static assets on AWS infrastructure.',
        'Created an interpreter runtime for a domain specific language using JavaScript.',
        'Developed various UI components in React including select and data grid.',
        'Developed a suite of URL/location utilities to unify client-side routing in our SPA.',
        'Evaluated and integrated various UI development tools such as dependency lock, Prettier, and Storybook.',
        'Rebuilt login/password reset flow using React, Redux and Redux Thunk.',
      ],
    },
    {
      company: 'CA Technologies',
      position: 'Software Engineer Intern',
      website: 'https://www.ca.com/',
      startDate: '05/2016',
      endDate: '05/2017',
      address: 'Stony Brook, NY',
      summary:
        "I worked in a small fast-paced technology incubator. We experimented with various technologies and turned clients' idea into working prototype. As one of the frontend engineers in the team, I have experienced with Angular, React, Polymer, D3 and so on.",
      toolset: ['Angular', 'Sass', 'Jasmine', 'JQuery', 'D3'],
      highlights: [
        'Developed customizable data visualization components using D3 and Angular.',
        'Maintained a Angular UI component library.',
        'Developed a search engine frontend using Angular.',
        'Created and integrated a map widget that handled high-volume real-time data using Leaflet.',
      ],
      hideInResume: true,
    },
  ],
  volunteer: [],
  education: [
    {
      institution: 'Stony Brook University',
      area: 'Computer Science',
      address: 'Stony Brook, NY',
      studyType: 'Bachelor',
      startDate: '09/2013',
      endDate: '05/2017',
      gpa: '3.87/4.00',
      courses: [],
      schoolWebsite: 'http://www.stonybrook.edu/',
      summary:
        'I majored in Computer Science, minored in Digital art. In college, I studied various topics in computer science, including database design, system programming, network programming, computer graphics, etc. I graduated from the Computer Science Honor Program with Summa Cum Laude designation.',
    },
  ],
  awards: [],
  publications: [],
  skills: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass'],
    },
    {
      category: 'Libraries',
      items: ['React', 'Redux', 'Immer', 'Gatsby'],
    },
    {
      category: 'Dev tools',
      items: [
        'Webpack',
        'Parcel',
        'Rollup',
        'Storybook',
        'Jest',
        'Enzyme',
        'Lerna',
        'Prettier',
        'Eslint',
      ],
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Full professional proficiency',
    },
    {
      language: 'Mandarin Chinese',
      fluency: 'Native speaker',
    },
  ],
  interests: [],
  references: [],
};
