interface LogoProps {
  variant?: 'color' | 'white';
  className?: string;
}

export function Logo({ variant = 'color', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  const triangleStart = isWhite ? '#ffffff' : '#B8860B';
  const triangleEnd = isWhite ? '#ffffff' : '#8B6508';
  const textColor = isWhite ? '#ffffff' : '#111111';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Mountain / arrow icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`logo-grad-${variant}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={triangleStart} />
            <stop offset="100%" stopColor={triangleEnd} />
          </linearGradient>
        </defs>
        {/* Left dark face */}
        <path d="M20 4 L4 32 L20 32 Z" fill={isWhite ? '#ffffff' : '#1a1a1a'} />
        {/* Right gold face */}
        <path d="M20 4 L36 32 L20 32 Z" fill={`url(#logo-grad-${variant})`} />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className="text-[15px] font-bold tracking-wider"
          style={{ color: textColor }}
        >
          DIANAROSE
        </span>
        <span
          className="mt-0.5 text-[10px] font-medium tracking-[0.3em]"
          style={{ color: textColor }}
        >
          LOGISTICS
        </span>
      </div>
    </div>
  );
}
