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
    'Hi there, A little about myself i am currently doing my bacherlors in computer science and have worked as a frontend developer in HRGP.',
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
    name: 'MAYA shop ',
    description: 'An e-commerce app for selling clothes.',
    stack: ['Tailwind CSS', 'Responsive design', 'React','rest api'],
    sourceCode: 'https://github.com/VinaySehwag14/E-commerce_modern',
    livePreview: 'http://maya-shop-frontend.vercel.app/',
  },
  {
    name: 'MAYA shop Admin',
    description: 'A shop admin for handling products only.',
    stack: ['CSS', 'Firebase', 'React','rechart','rest api'],
    sourceCode: 'https://github.com/VinaySehwag14/MAYA-Shop-admin-',
    livePreview: 'https://maya-shop-admin-o8rp.vercel.app/',
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
    name: 'IBlog',
    description:
      'A blogging web application made by using React , nodejs , mongodb and express',
    stack: ['MongoDB', 'React', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/VinaySehwag14/iBlog-frontend',
    livePreview: 'https://i-blog-frontend.vercel.app/',
  },
  {
    name: 'Moviestaan',
    description: 'An online movie and show watching app with AI',
    stack: ['MUI',,'Redux Toolkit', 'Responsive design', 'React','TMBD'],
    sourceCode: 'https://github.com/VinaySehwag14/E-commerce_modern',
    livePreview: 'http://maya-shop-frontend.vercel.app/',
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
    name: 'Booking.com Clone',
    description:
      'A Booking.com clone for booking hotel and rooms ',
    stack: ['Reactjs', 'Cloudinary', 'Tailwind', 'REST Api'],
    sourceCode: 'https://github.com/VinaySehwag14/Hotel-Booking-frontendt ',
    livePreview: 'https://hotel-booking-frontend-335cejzxb-vinaysehwag14.vercel.app/'
     ,
  },
   {
    name: 'Booking.com Clone admin Panel',
    description:
      'A Booking.com clone for creating Users, hotel and rooms ',
    stack: ['Reactjs', 'Cloudinary', 'Tailwind', 'REST Api',"CRUD operations"],
    sourceCode: 'https://github.com/VinaySehwag14/Hotel_admin ',
    livePreview: 'https://hotel-admin-ashen.vercel.app/',
  },
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
    name: 'Youtube2.0',
    description: 'youtube clone with MUI 5 and Rapid API for youtube with responsive design ',
    stack: ['RAPID API', 'React','MUI'],
    sourceCode: 'https://github.com/VinaySehwag14/Youtube2.0',
    livePreview: 'https://youtube2-0-3yb33tn13-vinaysehwag14.vercel.app/',
  },
  {
    name: 'UBER2.0',
    description: 'UBER clone using google api  ',
    stack: ['Tailwind', 'React Native','React Navigation'],
    sourceCode: 'https://github.com/VinaySehwag14/uber2.0',
    livePreview: '',
  },
  {
    name: 'Vlomo',
    description: 'A vlog sharing app with appwrite',
    stack: ['Tailwind', 'React Native','Expo',"appwrite"],
    sourceCode: 'https://github.com/VinaySehwag14/Vlomo',
    livePreview: '',
  }
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'React Native',
  'NextJs',
  'Redux',
  'Redux Toolkit',
  'Node.js',
  'MongoDB',
  'Firebase',
  'appwrite',
  'Expo',
  'Python',
  'SASS',
  'Tailwind',
  'Git',
  'Figma',
  'Adobe xd',
  'UI/UX',
  'BootStrap',
  'MUI'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vinaysehwag14@gmail.com',
}

export { header, about, projects, skills, contact }
