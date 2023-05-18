import * as icons from './Icons';

export const getMainProjects = (muiImageDownloads) => [
  {
    id: 1,
    title: 'Veganise It!',
    url: 'https://veganise.it',
    github: 'https://github.com/benmneb/veganise-it',
    image: 'https://i.postimg.cc/c4JG7PPn/veganiseit.gif',
    subTitle: "The internet's most surprisingly vegan recipes.",
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, React-Router, MUI',
      },
      { icon: icons.Redux, description: 'Redux / React-Redux' },
      {
        icon: icons.Netlify,
        description: 'Deployed to Netlify (w/ serverless functions)',
      },
      {
        icon: icons.MongoDB,
        description: 'MongoDB (Native NodeJS Driver) on Atlas',
      },
      { icon: icons.AWS, description: 'Images stored on AWS S3' },
      { icon: icons.PWA, description: 'Installable as a PWA' },
    ],
  },
  {
    id: 2,
    title: 'mui-image',
    url: 'https://mui-image.surge.sh',
    github: 'https://github.com/benmneb/mui-image',
    image: 'https://i.postimg.cc/wvddhMdq/mui-image.gif',
    subTitle:
      'The only MUI React component to satisfy the Material guidelines for loading images.',
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, NWB, MUI',
      },
      {
        icon: icons.NPM,
        description: `${muiImageDownloads} downloads in the last week`,
      },
      { icon: icons.Surge, description: 'Demo hosted on Surge' },
    ],
  },
  {
    id: 3,
    title: 'Vomad Life',
    url: 'https://vomad.life',
    github: 'https://github.com/benmneb/vomad.life',
    image: 'https://i.postimg.cc/cJjR3bQX/VL.gif',
    subTitle: 'Travel world. Eat Plants - A travel blog with a cause',
    stack: [
      {
        icon: icons.Nuxt,
        description: 'Static site generated in Nuxt w/ Nuxt-Content',
      },
      { icon: icons.Netlify, description: 'Deployed via Netlify' },
      { icon: icons.Sass, description: 'Styled with SASS' },
    ],
  },
  {
    id: 4,
    title: 'Vomad Guide',
    url: 'https://vomad.guide',
    github: 'https://github.com/benmneb/guide',
    image: 'https://i.postimg.cc/pX1bsqt1/vomadguide.gif',
    subTitle: "The world's first complete vegan product guide to Australia.",
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, React-Router, Material-UI',
      },
      { icon: icons.Redux, description: 'Redux / React-Redux' },
      { icon: icons.NodeJS, description: 'NodeJS / ExpressJS server' },
      { icon: icons.PostgreSQL, description: 'PostgreSQL with Knex.js' },
      { icon: icons.AWS, description: 'AWS Elastic Beanstalk' },
      { icon: icons.PWA, description: 'Installable as a PWA' },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Four Noble Truths',
  //   url: 'https://four-noble-truths.vercel.app/',
  //   github: 'https://github.com/benmneb/four-noble-truths',
  //   image: 'https://i.postimg.cc/PJTTkx63/4NT.gif',
  //   subTitle:
  //     'Deep elaboration of the heart of Buddhas teachings - in his own words.',
  //   stack: [
  //     {
  //       icon: icons.ReactJS,
  //       description: 'ReactJS, Material-UI',
  //     },
  //     {
  //       icon: icons.Redux,
  //       description: 'Redux / React-Redux',
  //     },
  //     { icon: icons.ExpressJS, description: 'NodeJS / ExpressJS server' },
  //     { icon: icons.MongoDB, description: 'MongoDB Atlas' },
  //     { icon: icons.Vercel, description: 'Front-end hosted on Vercel' },
  //     { icon: icons.Heroku, description: 'Back-end hosted on Heroku' },
  //     { icon: icons.PWA, description: 'Installable as a PWA' },
  //   ],
  //   keyPoints: ['Working with large data objects'],
  // },
  // {
  //   id: 5,
  //   title: 'Meditation Subjects',
  //   url: 'github.com',
  //   github: 'https://github.com/benmneb/meditation-subjects',
  //   image: 'https://i.ibb.co/m6sYBw2/Screen-Shot-2020-05-12-at-8-53-59-am.png',
  //   subTitle:
  //     'A 1,500-year-old classic Buddhist manual is now a modern web-app.',
  //   stack: [
  //     {
  //       icon: icons.ReactJS,
  //       description: 'ReactJS, useContext replicating Redux',
  //     },
  //     { icon: icons.PWA, description: 'Installable as a PWA' },
  //   ],
  //   keyPoints: ['Working with large data objects'],
  // },
  // {
  //   id: 6,
  //   title: 'Simple Simon',
  //   url: 'https://simple-simon.surge.sh',
  //   github: 'https://github.com/benmneb/simon',
  //   image: 'https://i.ibb.co/wsKcm17/Screen-Shot-2020-05-12-at-8-51-07-am.png',
  //   subTitle:
  //     'Simon game with audio, settings, keyboard navigation and global high scores.',
  //   stack: [
  //     { icon: icons.HTML, description: 'HTML5' },
  //     { icon: icons.CSS, description: 'CSS3' },
  //     { icon: icons.Jquery, description: 'jQuery' },
  //     { icon: icons.ExpressJS, description: 'NodeJS / ExpressJS server' },
  //     { icon: icons.MongoDB, description: 'MongoDB (NodeJS Driver) on Atlas' },
  //     { icon: icons.Surge, description: 'Front-end hosted on Surge' },
  //     { icon: icons.Heroku, description: 'Server hosted on Heroku' },
  //   ],
  // },
];
