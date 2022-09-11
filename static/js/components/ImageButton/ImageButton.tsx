import React from 'react';
import cn from 'classnames';

export type ImageButtonVariant = 'primary' | 'secondary' | 'neutral' | 'nav-logo' | 'plain';

export type ImageButtonProps = {
  variant?: ImageButtonVariant;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ImageButton = ({
  variant,
  disabled,
  isLoading,
  children,
  className,
  onClick,
  leftIcon,
  text,
  ...rest
}: ImageButtonProps) => {
  const btnClass = cn({
    'btn justify-center text-base-content btn-ghost bg-contain bg-center bg-no-repeat hover:bg-transparent border-0 !rounded-none !shadow-none !outline-none':
      true,
    '!justify-start': leftIcon,
    'w-[155px] h-[35px] font-medium': true,
    'bg-primary-btn': variant === 'primary',
    'bg-secondary-btn': variant === 'secondary',
    'bg-neutral-btn': variant === 'neutral',
    'bg-nav-logo': variant === 'nav-logo',
    'w-[200px] h-[73px]': variant === 'nav-logo',
    'grayscale !bg-transparent': disabled,
    loading: isLoading,
  });
  return (
    <button className={cn(btnClass, className)} disabled={disabled} onClick={onClick} {...rest}>
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {text && <span className="font-bold text-white">{text}</span>}
      </>
      {children}
    </button>
  );
};

export default ImageButton;
