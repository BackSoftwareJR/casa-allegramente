type ManifestoFlourishProps = {
  className?: string;
  variant?: 'left' | 'divider' | 'quote';
};

export function ManifestoFlourish({ className = '', variant = 'left' }: ManifestoFlourishProps) {
  if (variant === 'divider') {
    return (
      <svg
        viewBox="0 0 240 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          d="M0 8c20-6 40 6 60 0s40-6 60 0 40 6 60 0 40-6 60 0"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="120" cy="8" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }

  if (variant === 'quote') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          d="M24 4c-8 12-12 20-12 28 0 6 4 10 10 10 5 0 9-4 9-9 0-4-3-7-7-7-2 0-4 1-5 2 1-6 4-12 8-18"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
        <path
          d="M8 20c-2 4-3 8-3 12 0 4 3 7 7 7"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 56 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M28 4c-6 8-10 18-10 28 0 8 4 14 10 18M28 4c6 10 10 22 10 34 0 10-4 18-10 24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M18 50c-4 2-8 6-8 12 0 6 5 10 12 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M38 46c4 3 8 8 8 14 0 5-4 9-10 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
