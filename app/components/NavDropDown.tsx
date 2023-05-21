'use client';

import { Menu } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialGithub,
} from 'react-icons/sl';
import { MdOutlineEmail } from 'react-icons/md';
const NavDropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="h-10 leading-none text-white border-l border-white rounded-r-lg bg-zinc-800 hover:bg-zinc-600 aspect-square">
        <RiArrowDropDownLine className="w-9 h-9" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-12 bg-zinc-800 text-white">
        <Menu.Item
          as="a"
          href=""
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 space-x-2 border-b whitespace-nowrap text-zinc-100 hover:bg-zinc-600">
          <SlSocialTwitter />
          <p>Twitter</p>
        </Menu.Item>
        <Menu.Item
          as="a"
          href=""
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 space-x-2 border-b whitespace-nowrap text-zinc-100 hover:bg-zinc-600">
          <SlSocialLinkedin />
          <p>LinkedIn</p>
        </Menu.Item>
        <Menu.Item
          as="a"
          href=""
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 space-x-2 border-b whitespace-nowrap text-zinc-100 hover:bg-zinc-600">
          <SlSocialGithub />
          <p>Github</p>
        </Menu.Item>
        <Menu.Item
          as="a"
          href=""
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 space-x-2 border-b whitespace-nowrap text-zinc-100 hover:bg-zinc-600">
          <MdOutlineEmail />
          <p>Email</p>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavDropDown;
