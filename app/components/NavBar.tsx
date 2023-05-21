import NavDropDown from './NavDropDown';
import Link from 'next/link';
import NavNavigator from './NavNavigator';

const NavBar = () => {
  return (
    <nav className="flex">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">DevBadr</h1>
      </Link>
      <div>
        <NavNavigator />
        <div className="flex items-center">
          <button>Contact Me</button>
          <NavDropDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
