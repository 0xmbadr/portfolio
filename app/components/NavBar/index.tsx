import NavDropDown from './NavDropDown';
import Link from 'next/link';
import NavNavigator from './NavNavigator';

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row bg-white/75 backdrop-blur-lg">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">DevBadr</h1>
      </Link>
      <div className="flex items-stretch">
        <NavNavigator />
        <div className="flex items-stretch">
          <button
            type="button"
            className="h-10 border border-blue px-4 rounded-l-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-600 whitespace-nowrap">
            Contact Me
          </button>
          <NavDropDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
