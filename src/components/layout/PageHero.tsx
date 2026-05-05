import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  rightSlot?: ReactNode;
  /** Sets the maximum width of the text column (default 50%) */
  textWidth?: string;
}

export function PageHero({
  title,
  description,
  rightSlot,
  textWidth = 'md:max-w-[55%]',
}: PageHeroProps) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container-page relative py-14 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text column */}
          <div className={`${textWidth} relative z-10`}>
            <h1 className="mb-4 text-4xl font-bold leading-[1.1] text-brand-gold md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-[15px]">
                {description}
              </p>
            )}
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
