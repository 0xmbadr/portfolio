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
    description:
      "A real-time messenger clone that allows users to send and receive messages in real time. This project utilizes Next's App directory, and uses NextAuth for Authentication, Tailwind for styling and Prisma wiht MongoDB for DB.",
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
    description:
      'A Task Management Application that allows users to create, track, and complete tasks. The project is built with React, Vite, Redux, and SASS.',
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
      github: 'https://github.com/MrCarbene/portfolio',
      site: '/#top',
    },
    tech: ['Typescript', 'React', 'Next', 'Tailwind'],
  },
  {
    name: 'brent',
    description:
      'This project serves as a back-end for a platform known as bRent, which enables landlords to offer their apartments for rental. In addition, other users can review apartments listed on the platform. ',
    links: {
      github: 'https://github.com/MrCarbene/brent',
      site: '',
    },
    tech: ['TypeScript', 'Node', 'Nest', 'Swagger', 'TypeORM'],
  },
  {
    name: 'bwrite',
    description:
      'This is a backend API for a blog application with different user roles such as writers, editors, admin, and normal users (called learners).The API provides a set of endpoints that enable writers and editors to perform various operations, such as creating, reading, updating, and deleting blogs',
    links: {
      github: 'https://github.com/MrCarbene/bwrite-api',
      site: '',
    },
    tech: ['TypeScript', 'Node', 'Express', 'MongoDB', 'Mongoose'],
  },
];

export default projects;
