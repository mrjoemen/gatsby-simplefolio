import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jose Cabral | Your DevOps Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A Latino man', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jose Cabral',
  subtitle: 'Your favorite DevOps Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'myPhoto.jpg',
  paragraphOne: `Born in the Dominican Republic, Jose Cabral always had a knack for computer and technology since a young age.
  When he was 9 years old, he downloaded Adobe After Effects and experimented with video editing and effects. Although the videos
  were terrible (this maybe subjective), the video sparked Jose's new found interest into computers and the internet. This new hobby
  developed into interest in building computers, in which he built his first computer at 18 after saving up money from his part-time job.`,
  paragraphTwo: `Eventually, Jose decided to go to school for something that is computer related after teaching himself basic Python starting 
  at 19 years old. In May of 2021, he graduated from Georgia State University with a BBA in Computer Informaiton Systems (CIS) with a concentration
  in Application Developement.`,
  paragraphThree: `Today, Jose works at FIS as a DevOps Engineer learning, absorbing and implementing CI/CD concepts everyday. Some of his hobbies include
  learning STEM subjects (currently learning Calculus and Physics), keeping his coding knowledge sharp, going to the gym and wathcing YouTube videos.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = [
  //{skill1: "Python", image: "pathToImage.jpg", description: "Used Python in multiple jobs"}
  //{skill1: "Python", image: "pathToImage.jpg", description: "Used Python in multiple jobs"}
  //{skill1: "Python", image: "pathToImage.jpg", description: "Used Python in multiple jobs"}
]
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
