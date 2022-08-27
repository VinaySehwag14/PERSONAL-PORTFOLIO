const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Vinay',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vinay Sehwag',
  role: 'FullStack Developer',
  description:
    'Hi there, A little about myself i am currently doing my bacherlors in computer science and have worked as a freelancer.',
  resume:
    'https://drive.google.com/drive/folders/1-3RKK2OLHwjzHid-Nd_XYeLyyksn7_kr?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/vinay-sehwag-malang08/',
    github: 'https://github.com/VinaySehwag14',
    twitter: 'https://twitter.com/VinaySehwag14',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kisaan Ki dukaan ',
    description: 'An E-commerce platform for farmers using MERN stack',
    stack: ['MONGODB', 'Express', 'React', 'Node.js'],
    sourceCode: 'https://github.com/VinaySehwag14/E-comm-Frontend',

    livePreview: 'https://kisaan-mern.herokuapp.com/',
  },
  {
    name: 'Netflix Clone',
    description: 'A netflix clone web app made by using react and firebase',
    stack: ['CSS', 'Firebase', 'React'],
    sourceCode: 'https://github.com/VinaySehwag14/NetflixClone-React',
    livePreview: 'https://62d29ec47de22d75e884d618--ornate-cobbler-fa7233.netlify.app/',
  },
  {
    name: 'IBlog',
    description:
      'A blogging web application made by using React , nodejs , mongodb and express',
    stack: ['MongoDB', 'React', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/VinaySehwag14/iBlog-frontend',
    livePreview: 'https://i-blog-frontend.vercel.app/',
  },
  {
    name: 'Nextjs blog with MARKDOWN',
    description:
      'A simple Nextjs Personal Blog using MARKDOWN where I can share code also ',
    stack: ['Reactjs', 'Nextjs', 'Tailwind', 'Api'],
    sourceCode: 'https://github.com/VinaySehwag14/Nextjs-Blog-App',
    livePreview: 'https://nextjs-blog-app-eight-lyart.vercel.app/',
  },
  {
    name: 'Pizza-Corner',
    description:
      'A NextJs app , personal pizza delivery app with beautiful modified images and UI and used cloudfare for image storage.',
    stack: ['Next Js', 'Javascript', 'Cloudfare', 'MongoDB', 'Node.js'],
    sourceCode: 'https://github.com/VinaySehwag14/Pizza_Corner/tree/master',
    livePreview: 'https://pizza-corner.vercel.app/',
  },
  {
    name: 'Smart Home Mobile App',
    description:
      'A Smart Home app that controls you home electronic devices through nodemcu',
    stack: ['Flutter', 'C++', 'Node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJs',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Python',
  'SASS',
  'Tailwind',
  'Git',
  'Figma',
  'Adobe xd',
  'UI/Ux',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vinaysehwag14@gmail.com',
}

export { header, about, projects, skills, contact }
