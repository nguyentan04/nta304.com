import React from 'react';
import cn from 'classnames';
import CircleLoader from 'react-spinners/CircleLoader';
import ClipLoader from 'react-spinners/ClipLoader';

type SpinnerProps = {
  isLoading?: boolean;
  isFullScreen?: boolean;
  theme?: 'CircleLoader' | 'ClipLoader';
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Spinner: React.FC<SpinnerProps> = ({
  isLoading = true,
  isFullScreen,
  theme = 'ClipLoader',
  size = 80,
  children,
  className,
  ...rest
}) => {
  const spinnerContainerClass = cn({
    'w-full h-full': true,
    'min-h-full': isLoading && isFullScreen,
  });

  const overlayClass = cn({
    'fixed left-0 top-0 w-full z-40 bg-black opacity-30 transition-all duration-500': true,
    'h-screen': isFullScreen,
    'opacity-0': !isLoading,
    'h-0': !isLoading,
  });

  const renderSpinner = () => {
    switch (theme) {
      case 'CircleLoader':
        return <CircleLoader color="#FF853E" size={size} />;
      case 'ClipLoader':
        return <ClipLoader color="#FF853E" size={size} />;
      default:
        return null;
    }
  };

  if (!children) {
    return isLoading ? renderSpinner() : null;
  }

  return (
    <div className={cn(spinnerContainerClass, className)} {...rest}>
      {<div className={overlayClass} />}
      {isLoading && (
        <div className="fixed left-[50%] top-[50%] z-[9999] h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2">
          {renderSpinner()}
        </div>
      )}
      {children}
    </div>
  );
};

export default Spinner;
