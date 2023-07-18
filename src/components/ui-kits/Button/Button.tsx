import React, { ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// -- Utils --
import { ComponentColors, ComponentCommonType } from '../../../types/component';
import Spinner from '../Spinner';

type ButtonProps = React.JSX.IntrinsicElements['button'] &
  ComponentCommonType & {
    variant?: 'text' | 'contained' | 'outlined';
    color?: ComponentColors;
    isLoading?: boolean;
    icon?: ReactNode;
    loadingText?: string;
  };

//! Must to sync with icon size in Spinner
const iconSizes = {
  sm: 3,
  md: 4,
  lg: 5,
};

const Button = ({
  size,
  color,
  variant,
  icon,
  isLoading,
  loadingText,
  ...props
}: ButtonProps) => {
  const sizeStyles = {
    'px-3 py-[0.8rem] text-xl': size === 'lg',
    'px-[2rem] py-[0.5rem] text-base': size === 'md',
    'px-[1.5rem] py-[0.3rem] text-sm': size === 'sm',
  };

  const colorStyles = {
    'text-primary bg-primary': color === 'primary',
    'text-secondary bg-secondary': color === 'secondary',
    'text-success bg-success': color === 'success',
    'text-error bg-error': color === 'error',
    'text-warning bg-warning': color === 'warning',
  } as ClassValue;

  const variantStyles = {
    'border-none bg-white': variant === 'text',
    'text-white': variant === 'contained',
    'border-2 bg-white': variant === 'outlined',
  } as ClassValue;

  const disableStyles = {
    'bg-disable text-white cursor-not-allowed': props.disabled,
  };

  const commonStyles =
    'rounded-md inline-flex items-center hover:hue-rotate-[-15deg]';
  const iconSize = (size && iconSizes[size]) ?? iconSizes.md;
  return (
    <button
      className={twMerge(
        clsx(
          sizeStyles,
          colorStyles,
          variantStyles,
          commonStyles,
          disableStyles,
          props.className,
        ),
      )}
    >
      <div
        className={clsx(
          !!icon || isLoading
            ? `h-${iconSize} w-${iconSize} mr-2`
            : `h-${iconSize}`,
        )}
      >
        {isLoading && <Spinner size={size} />}
        {icon && !isLoading && icon}
      </div>

      <span>{isLoading ? loadingText ?? 'Processing...' : props.children}</span>
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
  color: 'primary',
  variant: 'contained',
} as ButtonProps;

export default Button;
