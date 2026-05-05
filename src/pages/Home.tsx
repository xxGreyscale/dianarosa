import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SERVICES, STATS, WHY_CHOOSE_US } from '../lib/constants';
import { IMAGES } from '../lib/assets';

export function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-brand-black text-white">
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
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-bold leading-[1.1] md:text-5xl">
              Reliable Cargo Movement
              <br />
              Across East Africa
            </h1>
            <p className="mb-8 max-w-md leading-relaxed text-white/85">
              From the Port of Dar es Salaam to major regional corridors, we
              deliver secure, timely, and cost-effective cargo solutions for
              importers, exporters, and corporate clients.
            </p>
            <Button to="/services" variant="outline-light" size="md">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Our Services grid ─── */}
      <section className="relative z-10 -mt-10 bg-white py-16 md:-mt-14 md:py-20">
        <div className="container-page">
          <div className="rounded-xl bg-surface-gray px-6 py-10 md:px-12 md:py-12">
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

            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
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
          </div>
        </div>
      </section>

      {/* ─── About us split ─── */}
      <section className="bg-gold-cta text-white">
        <div className="container-page grid items-center gap-8 py-16 md:grid-cols-2 md:py-20">
          {/* Truck image side */}
          <div className="flex justify-center md:justify-start">
            <div
              className="aspect-[4/3] w-full max-w-[480px] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${IMAGES.truck}')`,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">About us</h2>
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
          </div>
        </div>
      </section>

      {/* ─── Why Choose ─── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        {/* Decorative network dots background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
        >
          <NetworkPattern />
        </div>

        <div className="container-page relative">
          <h2 className="mb-12 text-3xl font-bold leading-tight text-brand-black md:text-4xl">
            Why Choose
            <br />
            Diana Rose Logistics?
          </h2>

          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {STATS.map(stat => (
              <div key={stat.label}>
                <div className="mb-1 text-4xl font-bold text-brand-black md:text-5xl">
                  {stat.value}
                </div>
                <p className="text-sm leading-tight text-neutral-mid">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {WHY_CHOOSE_US.map(reason => (
              <div key={reason} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-black">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-sm font-semibold text-brand-black">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trusted Cross-Border Logistics Partner ─── */}
      <section className="bg-gradient-to-r from-brand-black to-neutral-dark text-white">
        <div className="container-page grid min-h-[280px] items-stretch gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center py-12 md:py-16">
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
          </div>

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
          <div className="rounded-xl bg-white px-6 py-10 md:px-12 md:py-14">
            <h2 className="mb-10 text-center text-2xl font-bold text-brand-black md:text-3xl">
              Our Happy Clients
            </h2>
            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
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
          </div>
        </div>
      </section>

      {/* ─── Are ready to delivery your cargo ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
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
          </div>
          <div className="hidden justify-end md:flex">
            <div
              className="aspect-[4/3] w-full max-w-[480px] bg-contain bg-bottom bg-no-repeat"
              style={{
                backgroundImage: `url('${IMAGES.womanHeadset}')`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function NetworkPattern() {
  // Decorative dots and connecting lines, placed lightly across the section
  const dots = Array.from({ length: 24 }).map((_, i) => ({
    cx: (i * 67) % 1200,
    cy: ((i * 113) % 400) + 20,
  }));
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      className="text-neutral-light"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r="3"
          fill="currentColor"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}
