import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

// -- Components
import Profile from '@/components/auth/Profile';
import { Routers } from '@/routes';

type HeaderProps = React.JSX.IntrinsicElements['header'];

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={twMerge(
        'p-common h-header w-full fixed top-0 left-0 flex items-center justify-between bg-neutral-900',
        className,
      )}
      {...props}
    >
      <div className="flex gap-2">
        <NavLink
          to={Routers.Home}
          className={({ isActive }) => {
            return isActive
              ? 'underline decoration-white underline-offset-2'
              : '';
          }}
        >
          <h2 className="text-white">Home</h2>
        </NavLink>
        <NavLink
          to={Routers.History}
          className={({ isActive }) => {
            return isActive
              ? 'underline decoration-white underline-offset-2'
              : '';
          }}
        >
          <h2 className="text-white">History</h2>
        </NavLink>
      </div>

      <Profile />
    </header>
  );
};

export default Header;
