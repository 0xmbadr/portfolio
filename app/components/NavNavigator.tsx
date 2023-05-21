'use client';

import Link from 'next/link';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter, usePathname } from 'next/navigation';

const NavNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/' && (
        <Link href="/">
          <div className="flex items-center">
            <AiOutlineHome />
          </div>
        </Link>
      )}

      {pathname !== '/notes' && (
        <Link href="/notes">
          <div className="flex items-center gap-1">
            <CgNotes />
            <span>Notes</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default NavNavigator;
