import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  rightSlot?: ReactNode;
  children?: ReactNode;
  /** Sets the maximum width of the text column (default 50%) */
  textWidth?: string;
}

export function PageHero({
  title,
  description,
  rightSlot,
  children,
  textWidth = 'max-w-2xl',
}: PageHeroProps) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container-page relative">
        <div className="grid items-center gap-6 pb-10 pt-8 md:grid-cols-[auto,1fr] md:gap-8 md:pb-12 md:pt-12">
          {/* Text column */}
          <div className={`${textWidth} relative z-10`}>
            <h1 className="hero-enter-1 mb-4 text-3xl font-bold leading-[1.1] text-brand-gold sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="hero-enter-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-[15px]">
                {description}
              </p>
            )}
            {children}
          </div>

          {/* Right image / illustration */}
          {rightSlot && (
            <div className="relative hidden items-center justify-end md:flex">
              {rightSlot}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
