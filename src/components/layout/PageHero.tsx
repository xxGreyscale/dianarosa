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
  textWidth = 'md:max-w-[100%]',
}: PageHeroProps) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container-page relative">
        <div className="grid items-center gap-8 pt-8 md:grid-cols-[auto,1fr] md:pt-12">
          {/* Text column */}
          <div className={`${textWidth} relative z-10`}>
            <h1 className="hero-enter-1 mb-4 text-4xl font-bold leading-[1.1] text-brand-gold md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="hero-enter-2 max-w-xl text-base leading-relaxed text-white/85 md:text-[15px]">
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
