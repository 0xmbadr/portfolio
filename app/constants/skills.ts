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
    image: '/logos/node.svg',
    name: 'NodeJS',
    link: 'https://nodejs.org/',
    isFavorite: true,
  },
  {
    image: '/logos/git.svg',
    name: 'Git',
    link: 'https://git-scm.com/',
    isFavorite: false,
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
  {
    image: '/logos/tailwind.svg',
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    isFavorite: false,
  },
  {
    image: '/logos/html.svg',
    name: 'HTML',
    link: 'https://html.spec.whatwg.org/',
    isFavorite: false,
  },
  {
    image: '/logos/css.svg',
    name: 'CSS',
    link: 'https://www.w3.org/TR/CSS/',
    isFavorite: false,
  },
];

export default skills;
