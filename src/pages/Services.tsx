import { PageHero } from '../components/layout/PageHero';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../lib/constants';
import { IMAGES } from '../lib/assets';

export function Services() {
  const featured = SERVICES[0];
  const rest = SERVICES.slice(1);

  return (
    <>
      <PageHero
        title="Our services"
        description="Dianarose Logistics is a trusted logistics company committed to delivering efficiency, reliability, and professionalism in every operation. Built on strong industry expertise and a customer-focused approach, we prioritize precision, transparency, and accountability at every stage of our engagement."
        rightSlot={
          <div
            className="aspect-[4/3] w-full max-w-[456px] bg-contain bg-right bg-no-repeat"
            style={{
              backgroundImage: `url('${IMAGES.truck}')`,
            }}
            aria-hidden="true"
          />
        }
      />

      {/* ─── Featured: Cargo transportation ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid items-start gap-10 md:grid-cols-2">
          <div className="relative">
            <div
              className="aspect-square w-full rounded-md bg-cover bg-center"
              style={{
                backgroundImage: `url('${IMAGES.driver}')`,
              }}
              aria-hidden="true"
            />
            {/* 100+ stat overlay */}
            <div className="absolute right-3 top-3 min-w-[124px] rounded-lg bg-white p-3 text-center shadow-md md:-top-4 md:right-[-2rem] md:min-w-[140px] md:p-4">
              <div className="text-3xl font-bold leading-none text-brand-black">
                100+
              </div>
              <p className="mt-1 text-xs text-neutral-mid">
                trucks and trailers
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-3xl font-bold text-brand-black md:text-4xl">
              {featured.title}
            </h2>
            <div className="mb-7 space-y-4 text-sm leading-relaxed text-neutral-mid">
              <p>{featured.description}</p>
              <p>{featured.long}</p>
            </div>
            <Button to="/quote" variant="primary" size="md">
              Get a quote
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Other services grid ─── */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {rest.map(svc => (
              <ServiceCard
                key={svc.id}
                title={svc.title}
                iconName={svc.icon}
                description={svc.description}
                long={svc.long}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Have an enquiry CTA ─── */}
      <section className="border-t border-neutral-light/50 bg-white pt-12 md:pt-16">
        <div className="container-page grid items-center gap-4 md:grid-cols-[1fr,1.5fr]">
          <img
            src={IMAGES.manThinking}
            alt=""
            className="mx-auto w-full max-w-[240px] object-contain md:ml-auto md:mr-0 md:max-w-[280px]"
            aria-hidden="true"
          />
          <div>
            <h2 className="mb-3 text-3xl font-bold text-brand-black md:text-4xl">
              Have an enquiry?
            </h2>
            <p className="mb-6 max-w-md text-base text-neutral-mid">
              Contact our team today for prompt and professional assistance.
            </p>
            <Button to="/contact" variant="outline" size="md">
              Give us a call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
