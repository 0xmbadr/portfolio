import NavDropDown from './NavDropDown';
import Link from 'next/link';
import { CgNotes } from 'react-icons/cg';

const NavBar = () => {
  return (
    <nav className="flex">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">DevBadr</h1>
      </Link>
      <div>
        <Link href="/notes">
          <div className="flex items-center gap-1">
            <CgNotes />
            <span>Notes</span>
          </div>
        </Link>

        <div className="flex items-center">
          <button>Contact Me</button>
          <NavDropDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
