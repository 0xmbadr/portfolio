import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="text-center text-zinc-600">
          <Link href="/#top" className="underline">
            Muhammad Badr
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
