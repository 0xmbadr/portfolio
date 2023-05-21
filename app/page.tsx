import Image from 'next/image';

export default function Home() {
  return (
    <main className="container border border-yellow-950 mx-auto mt-32 space-y-16 px-4 pb-16  min-h-[calc(100vh-12rem)]">
      <div className="mx-auto border border-blue-600 py-32 max-w-4xl">
        <h2 className="text-xl font-bold text-center tracking-wide text-zinc-600 font-display">
          Hello!
        </h2>
        <h3 className="text-3xl font-bold text-center md:text-6xl">
          I&apos;m Muhammad Badr &mdash; A full stack developer. 👋
        </h3>
      </div>
    </main>
  );
}
