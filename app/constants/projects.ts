export interface Project {
  name: string;
  description: string;
  links: {
    github: string;
    site: string;
  };
  tech: string[];
}

const projects: Project[] = [
  {
    name: 'Messaging App',
    description: '',
    links: {
      github: 'https://github.com/MrCarbene/next13-messaging-app',
      site: 'https://next13-messaging-app.vercel.app/',
    },
    tech: [
      'Typescript',
      'React',
      'Tailwind',
      'Next',
      'AuthJS',
      'Zustand',
      'Prisma',
      'MongoDB',
      'Pusher',
    ],
  },
  {
    name: 'Task Management',
    description: '',
    links: {
      github: 'https://github.com/MrCarbene/task-management-app',
      site: 'https://mrcarbene.github.io/task-management-app/',
    },
    tech: ['Typescript', 'React', 'Next', 'Redux', 'Sass'],
  },
  {
    name: 'DevBadr',
    description: 'My personal portfolio',
    links: {
      github: '',
      site: '/#top',
    },
    tech: ['Typescript', 'React', 'Next', 'Tailwind'],
  },
];

export default projects;
