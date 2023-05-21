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
    <Menu>
      <Menu.Button>
        <RiArrowDropDownLine size={'1.6rem'} />
      </Menu.Button>
      <Menu.Items as="div">
        <Menu.Item as="a" href="" target="_blank">
          <SlSocialTwitter />
          <p>Twitter</p>
        </Menu.Item>
        <Menu.Item as="a" href="" target="_blank">
          <SlSocialLinkedin />
          <p>LinkedIn</p>
        </Menu.Item>
        <Menu.Item as="a" href="" target="_blank">
          <SlSocialGithub />
          <p>Github</p>
        </Menu.Item>
        <Menu.Item as="a" href="" target="_blank">
          <MdOutlineEmail />
          <p>Email</p>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavDropDown;
