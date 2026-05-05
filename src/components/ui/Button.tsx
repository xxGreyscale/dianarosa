import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'outline-light';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends
    BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: never;
}

interface ButtonAsLink extends BaseProps {
  to: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-black text-white hover:bg-neutral-dark active:scale-[0.98]',
  outline:
    'bg-white text-brand-black border border-neutral-light hover:border-brand-black hover:bg-surface-gray active:scale-[0.98]',
  ghost:
    'bg-transparent text-neutral-dark hover:bg-surface-gray active:scale-[0.98]',
  'outline-light':
    'bg-transparent text-white border border-white hover:bg-white hover:text-brand-black active:scale-[0.98]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center font-medium rounded transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '' } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  // It's a button
  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    ...rest
  } = props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
