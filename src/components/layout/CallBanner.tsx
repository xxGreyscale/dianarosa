import { IMAGES } from '../../lib/assets';

interface CallBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CallBanner({
  title = 'Need a quick answer?',
  description = 'We are ready to receive your call.',
  ctaLabel = 'Give us a call',
  ctaHref = `tel:+255742779277`,
}: CallBannerProps) {
  return (
    <section className="relative overflow-visible bg-gold-cta">
      <div className="container-page relative py-12 md:py-14">
        <div className="grid items-center gap-6 md:grid-cols-2">
          {/* Text + CTA */}
          <div className="relative z-10">
            <h2 className="mb-2 text-3xl font-bold leading-tight text-white md:text-[34px]">
              {title}
            </h2>
            <p className="mb-5 text-lg text-white/95">{description}</p>
            <a
              href={ctaHref}
              className="inline-flex h-11 items-center justify-center rounded border border-white bg-transparent px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gold-cta"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Person cutout (image to be added) */}
          <div className="relative hidden h-full items-end justify-center md:flex">
            <div
              className="aspect-[4/5] w-full max-w-[420px] bg-contain bg-bottom bg-no-repeat"
              style={{
                backgroundImage: `url('${IMAGES.manPhone}')`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
