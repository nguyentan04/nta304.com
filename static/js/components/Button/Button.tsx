import * as React from 'react';
import cn from 'classnames';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'large' | 'medium' | 'small' | 'extra-small';
  isGhost?: boolean;
  isOutline?: boolean;
  isLink?: boolean;
  isWide?: boolean;
  isBlock?: boolean;
  isCircle?: boolean;
  isSquare?: boolean;
  isRounded?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  isGhost,
  isOutline,
  isLink,
  isWide,
  isBlock,
  isCircle,
  isSquare,
  isRounded,
  isActive,
  isDisabled,
  isLoading,
  children,
  className,
  ...rest
}) => {
  const btnClass = cn({
    'btn-primary min-w-[200px]': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-accent': variant === 'accent',
    'btn-info': variant === 'info',
    'btn-success': variant === 'success',
    'btn-warning': variant === 'warning',
    'btn-error': variant === 'error',
    'btn-lg': size === 'large',
    'btn-md': size === 'medium',
    'btn-sm': size === 'small',
    'btn-xs': size === 'extra-small',
    'btn-ghost': isGhost,
    'btn-outline': isOutline,
    'btn-link': isLink,
    'btn-wide': isWide,
    'btn-block': isBlock,
    'btn-circle': isCircle,
    'btn-square': isSquare,
    'rounded-btn': isRounded,
    'btn-active': isActive,
    'btn-disabled bg-gray-500 border-gray-600 text-gray-200': isDisabled,
    'pointer-events-none': isLoading,
  });

  return (
    <button className={cn('btn px-5 lg:py-3 lg:text-base', btnClass, className)} {...rest}>
      {isLoading && <AiOutlineLoading3Quarters size={18} className="mr-2 inline-block animate-spin align-middle" />}
      {children}
    </button>
  );
};

export default Button;
