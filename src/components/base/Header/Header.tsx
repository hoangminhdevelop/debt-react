import React from 'react';
import { twMerge } from 'tailwind-merge';

// -- Components
import logo from '@/assets/react.svg';
import Button from '../../ui-kits/Button/Button';
import { Link, NavLink } from 'react-router-dom';
import { Routers } from '@/routes';
import clsx from 'clsx';

type HeaderProps = React.JSX.IntrinsicElements['header'];

const navLinkStyles =
  'h-full decoration-black relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-cover';

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={twMerge(
        'fixed w-full top-0 left-0 flex justify-between px-2 py-1 bg-white',
        className,
      )}
      {...props}
    >
      {/** Logo */}
      <Link to={Routers.Home}>
        <img src={logo} alt="my logo" />
      </Link>

      {/** Navigation */}
      <nav className="flex items-center">
        <ul className="flex items-center text-base gap-2">
          <li className="h-full">
            <NavLink
              to={Routers.Home}
              className={({ isActive }) => {
                return clsx(navLinkStyles, { 'after:bg-underline': isActive });
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={Routers.History}
              className={({ isActive }) => {
                return clsx(navLinkStyles, { 'after:bg-underline': isActive });
              }}
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>

      {/** Sign In / Sign Up */}
      {/* <div className="flex space-x-1 items-baseline">
        <Button size="md">Sign in</Button>
        <Button size="md" color="secondary">
          Sign up
        </Button>
      </div> */}
      {/** Profile */}
      <Button size="md" color="secondary">
        Profile
      </Button>
    </header>
  );
};

export default Header;
