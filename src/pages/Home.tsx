import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { AnimateIn } from '../components/ui/AnimateIn';
import { CountUpStat } from '../components/ui/CountUpStat';
import { SERVICES, STATS, WHY_CHOOSE_US } from '../lib/constants';
import { IMAGES, ILLUSTRATIONS } from '../lib/assets';
import { useScrollClipPath } from '../hooks/useScrollClipPath';
import { useScrollTruckMotion } from '../hooks/useScrollTruckMotion';

export function Home() {
  const { ref: aboutSectionRef, clipPath } = useScrollClipPath({
    scrollDownStart: 'polygon(0 0%, 100% 0, 100% 100%, 0 100%)',
    scrollDownEnd: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
    scrollUpStart: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
    scrollUpEnd: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
  });
  const { ref: truckRef, style: truckStyle } = useScrollTruckMotion();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[82vh] overflow-hidden bg-brand-black text-white">
        {/* Image placeholder — port background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('${IMAGES.heroPort}')`,
          }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-transparent"
          aria-hidden="true"
        />
        <div className="container-page relative flex min-h-[82vh] items-center pb-16 md:pb-20">
          <div className="max-w-2xl">
            <h1 className="hero-enter-1 mb-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
              Reliable Cargo Movement
              <br />
              Across East Africa
            </h1>
            <p className="hero-enter-2 mb-8 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              From the Port of Dar es Salaam to major regional corridors, we
              deliver secure, timely, and cost-effective cargo solutions for
              importers, exporters, and corporate clients.
            </p>
            <div className="hero-enter-3 inline-block">
              <Button to="/services" variant="outline-light" size="md">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Services grid ─── */}
      <section className="relative z-10 pb-16 md:pb-20">
        <div className="container-page">
          <AnimateIn
            className="md:-mt-18 -mt-8 rounded-xl bg-surface-gray px-4 py-8 sm:-mt-10 sm:px-6 sm:py-10 md:px-12 md:py-12"
            threshold={0.05}
          >
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-brand-black md:text-3xl">
                Our Services
              </h2>
              <p className="text-sm leading-relaxed text-neutral-mid">
                Our experienced logistics team manages road freight, transit
                cargo, warehousing, and last-mile distribution with precision
                and accountability — ensuring your goods reach their destination
                safely and on schedule.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(svc => (
                <ServiceCard
                  key={svc.id}
                  title={svc.title}
                  iconName={svc.icon}
                  description=""
                  compact
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button to="/services" variant="outline" size="md">
                Learn more
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── About us split ─── */}
      <section className="relative z-20 overflow-visible text-white">
        <div
          ref={aboutSectionRef}
          className="about-split-bg-scroll absolute inset-0 bg-gold-cta"
          style={{ clipPath }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-4 py-4 sm:gap-6 md:grid-cols-[1.6fr,1fr] md:py-8">
          {/* Truck image side */}
          <div
            ref={truckRef}
            style={truckStyle}
            className="truck-reveal-slow relative z-30 aspect-video w-full max-w-none md:-ml-[max(24px,calc((100vw-1200px)/2+24px))] md:aspect-[4/3]"
          >
            <img
              src={IMAGES.bigTruck}
              alt=""
              className="object-bottom-left z-40 h-full w-auto min-w-full object-contain md:absolute md:-top-4 md:-top-8 md:left-0 md:max-w-none md:object-cover"
            />
          </div>

          {/* Text */}
          <AnimateIn
            animation="fade-right"
            delay={200}
            className="relative z-30 py-0 pb-12 md:pb-16 md:pt-12"
          >
            <h2 className="my-5 text-3xl font-bold md:text-4xl">About us</h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/95">
              <p>
                Diana Rose Logistics Ltd is a leading logistics company in
                Tanzania, headquartered in Dar es Salaam, delivering reliable
                freight transport, warehousing, and cross-border logistics
                solutions across East, Central, and Southern Africa.
              </p>
              <p>
                Strategically operating through the Port of Dar es Salaam, we
                provide secure, timely, and cost-effective cargo transportation
                for importers, exporters, manufacturers, mining companies, NGOs,
                and commercial enterprises.
              </p>
              <p>
                With a modern fleet of trucks and trailers, experienced
                logistics professionals, and strong regional transport networks
                connecting Kenya, Uganda, Rwanda, Burundi, DRC, Zambia, and
                beyond, Diana Rose Logistics ensures seamless cargo movement and
                efficient supply chain management tailored to your business
                needs.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex h-10 items-center gap-2 rounded border border-white bg-transparent px-5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gold-cta"
              >
                Learn more
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Why Choose ─── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        {/* Decorative globe background */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-bottom bg-repeat opacity-10"
          style={{
            backgroundImage: `url('${ILLUSTRATIONS.globBg}')`,
          }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <AnimateIn>
            <h2 className="my-20 text-3xl font-bold leading-tight text-brand-black md:text-4xl">
              Why Choose
              <br />
              Diana Rose Logistics?
            </h2>
          </AnimateIn>

          <div className="mb-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
            {STATS.map((stat, i) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 120}
              />
            ))}
          </div>

          <div className="mb-24 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {WHY_CHOOSE_US.map((reason, i) => (
              <AnimateIn
                key={reason}
                delay={i * 100}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-black">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-sm font-semibold text-brand-black">
                  {reason}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trusted Cross-Border Logistics Partner ─── */}
      <section className="bg-gradient-to-r from-brand-black to-neutral-dark text-white">
        <div className="container-page grid min-h-[280px] items-stretch gap-0 md:grid-cols-2">
          <AnimateIn
            animation="fade-right"
            className="flex flex-col justify-center py-12 md:py-16"
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
              Your Trusted Cross-Border
              <br />
              Logistics Partner
            </h2>
            <div>
              <Button to="/quote" variant="outline-light" size="md">
                Get a quote
              </Button>
            </div>
          </AnimateIn>

          <div
            className="hidden bg-cover bg-center md:block"
            style={{
              backgroundImage: `url('${IMAGES.workers}')`,
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ─── Our Happy Clients ─── */}
      <section className="bg-surface-gray py-16 md:py-20">
        <div className="container-page">
          <AnimateIn className="rounded-xl bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14">
            <h2 className="mb-10 text-center text-2xl font-bold text-brand-black md:text-3xl">
              Our Happy Clients
            </h2>
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
              {[
                'Impala',
                'Freight Forwarders Tanzania',
                'Katanga',
                'Congo Free',
              ].map(name => (
                <div
                  key={name}
                  className="flex h-16 items-center justify-center opacity-70 grayscale"
                >
                  <span className="text-base font-bold tracking-wide text-neutral-mid">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            {/* Carousel dots placeholder */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1 w-8 rounded-full bg-brand-black" />
              <div className="h-1 w-2 rounded-full bg-neutral-light" />
              <div className="h-1 w-2 rounded-full bg-neutral-light" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Are ready to delivery your cargo ─── */}
      <section className="bg-white py-16 md:py-0 md:pt-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <AnimateIn animation="fade-right">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-brand-black md:text-4xl">
              Are ready to delivery
              <br />
              your cargo
            </h2>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-neutral-mid">
              Diana Rose Logistics Ltd is a leading logistics company in
              Tanzania, headquartered in Dar es Salaam, delivering reliable
              freight transport, warehousing, and cross-border logistics
              solutions across East, Central, and Southern Africa.
            </p>
            <div className="flex gap-3">
              <Button to="/quote" variant="primary" size="md">
                Get a quote
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Contact us
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn
            animation="fade-left"
            delay={150}
            className="hidden justify-end md:flex"
          >
            <div
              className="aspect-[4/3] h-[94%] w-full max-w-none bg-cover bg-bottom bg-no-repeat"
              style={{
                backgroundImage: `url('${IMAGES.womanHeadset}')`,
              }}
              aria-hidden="true"
            />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
