export interface Skill {
  image: string;
  name: string;
  link: string;
  isFavorite: boolean;
}

const skills: Skill[] = [
  {
    image: '/logos/typescript.svg',
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    isFavorite: true,
  },
  {
    image: '/logos/javascript.svg',
    name: 'Javascript',
    link: 'https://www.javascript.com/',
    isFavorite: false,
  },
  {
    image: '/logos/react.svg',
    name: 'React',
    link: 'https://react.dev/',
    isFavorite: true,
  },
  {
    image: '/logos/next.svg',
    name: 'Next.js',
    link: 'https://nextjs.org/',
    isFavorite: true,
  },
  {
    image: '/logos/tailwind.svg',
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    isFavorite: false,
  },
  {
    image: '/logos/sass.svg',
    name: 'SCSS',
    link: 'https://sass-lang.com/',
    isFavorite: false,
  },
  {
    image: '/logos/node.svg',
    name: 'NodeJS',
    link: 'https://nodejs.org/',
    isFavorite: true,
  },
  {
    image: '/logos/nest.svg',
    name: 'NestJS',
    link: 'https://nestjs.com/',
    isFavorite: true,
  },
  {
    image: '/logos/mongo.svg',
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    isFavorite: false,
  },
  {
    image: '/logos/postgresql.svg',
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    isFavorite: false,
  },
];

export default skills;
