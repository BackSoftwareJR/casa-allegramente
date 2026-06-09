import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost-light';

const variants: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'ghost-light': 'btn-ghost-light',
};

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsRouter = BaseProps & {
  to: string;
};

type ButtonAsButton = BaseProps & {
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function ButtonLink({ href, external, variant = 'primary', className, children }: ButtonAsLink) {
  const classes = cn(variants[variant], className);
  if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={classes}
        target={external || href.startsWith('http') ? '_blank' : undefined}
        rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}

export function ButtonRouter({ to, variant = 'primary', className, children }: ButtonAsRouter) {
  return (
    <Link to={to} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({ variant = 'primary', className, children, onClick, type = 'button' }: ButtonAsButton) {
  return (
    <button type={type} onClick={onClick} className={cn(variants[variant], className)}>
      {children}
    </button>
  );
}
