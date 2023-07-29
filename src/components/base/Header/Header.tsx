import React from 'react';
import { twMerge } from 'tailwind-merge';

// -- Components
import Profile from '@/components/auth/Profile';

type HeaderProps = React.JSX.IntrinsicElements['header'];

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={twMerge(
        'p-common h-header w-full fixed top-0 left-0 flex items-center justify-end bg-neutral-900',
        className,
      )}
      {...props}
    >
      <Profile />
    </header>
  );
};

export default Header;
