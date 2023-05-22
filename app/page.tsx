import ProjectsList from './components/ProjectList';
import SkillList from './components/SkillList';

export default function Home() {
  return (
    <main className="container mx-auto mt-32 min-h-[calc(100vh-12rem)] pb-16 max-w-3xl">
      <div className="mx-auto py-32 max-w-4xl">
        <h2 className="text-xl font-bold text-center tracking-wide text-zinc-600 font-display">
          Hello!
        </h2>
        <h3 className="text-3xl font-bold text-center md:text-6xl">
          I&apos;m Muhammad Badr &mdash; A full stack developer. 👋
        </h3>
      </div>

      <section className="my-10">
        <article className="mx-3 p-2 space-y-4 prose-lg">
          <h4 className="text-2xl font-bold md:text-4xl">Who Am I?</h4>
          <p className="text-justify">
            Hello and welcome to my website! I am a self-taught developer
            specializing in Node.js and React. With a love for coding and a
            strong curiosity for learning, I have honed my skills in these
            technologies to create dynamic and engaging web applications. From
            crafting responsive user interfaces to developing efficient backend
            solutions, I thrive on bringing ideas to life through clean and
            maintainable code. With a passion for problem-solving and a
            commitment to delivering high-quality results, I am excited to
            collaborate with you and turn your vision into reality. Let&apos;s
            embark on this journey together and build something amazing using
            Node.js and React!
          </p>
        </article>
      </section>

      <section className="my-10">
        <div className="mx-3 p-2 space-y-4">
          <div>
            <h4 className="m-0 text-2xl font-bold md:text-4xl">
              Skills &amp; Technology
            </h4>
          </div>
          <SkillList />
        </div>
      </section>

      <section>
        <div className="mx-3 p-2 space-y-4">
          <h4 className="m-0 text-2xl font-bold md:text-4xl">Projects</h4>
          <div className="space-y-2">
            <ProjectsList />
          </div>
        </div>
      </section>
    </main>
  );
}
