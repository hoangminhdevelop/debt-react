import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={Routers.Home}>
        <h1 className="text-white">Home</h1>
      </Link>
      <Profile />
    </header>
  );
};

export default Header;
