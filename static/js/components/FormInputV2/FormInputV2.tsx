import * as React from 'react';
import cn from 'classnames';
import Cleave from 'cleave.js/react';

type FormInputProps = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  inputSize?: 'large' | 'medium' | 'small' | 'extra-small';
  isBordered?: boolean;
  isGhost?: boolean;
  containerClassName?: string;
  addonElement?: React.ReactElement;
  cleaveOptions?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInputV2: React.FC<FormInputProps> = ({
  label,
  variant,
  inputSize,
  isBordered,
  isGhost,
  containerClassName,
  addonElement,
  className,
  cleaveOptions,
  onChange,
  ...rest
}) => {
  const inputClass = cn({
    'input rounded-[4px]': true,
    'input-primary': variant === 'primary',
    'input-secondary': variant === 'secondary',
    'input-accent': variant === 'accent',
    'input-info': variant === 'info',
    'input-success': variant === 'success',
    'input-warning': variant === 'warning',
    'input-error': variant === 'error',
    'input-lg': inputSize === 'large',
    'input-md': inputSize === 'medium',
    'input-sm': inputSize === 'small',
    'input-xs': inputSize === 'extra-small',
    'input-ghost': isGhost,
    'input-bordered': isBordered,
    'w-full pr-16': addonElement !== undefined,
  });

  const handleOnChange = (e) => {
    onChange && onChange(e.target.rawValue);
  };

  const renderInput = () => {
    const inputElement = (
      <Cleave className={cn(inputClass, className)} options={cleaveOptions} onChange={handleOnChange} {...rest} />
    );
    if (!addonElement) {
      return inputElement;
    }

    return (
      <div className="relative">
        {inputElement}
        {addonElement && addonElement}
      </div>
    );
  };

  return (
    <div className={cn('form-control', containerClassName)}>
      {label && (
        <label className="label">
          <span className="text-sm lg:text-base">{label}</span>
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default FormInputV2;
