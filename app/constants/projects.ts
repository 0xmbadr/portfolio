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
];

export default projects;
