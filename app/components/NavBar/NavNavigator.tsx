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
          <div className="flex items-center px-4 mr-2 h-10 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
            <AiOutlineHome size={'1.3rem'} />
          </div>
        </Link>
      )}

      {pathname !== '/notes' && (
        <Link href="/notes">
          <div className="flex items-center h-10 gap-1 px-4 mr-2 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
            <CgNotes />
            <span>Notes</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default NavNavigator;
