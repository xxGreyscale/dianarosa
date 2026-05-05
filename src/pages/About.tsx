import { Target, Telescope, Award, Check, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';
import { DESTINATIONS } from '../lib/constants';
import { IMAGES } from '../lib/assets';

export function About() {
  return (
    <>
      <PageHero
        title="About us"
        rightSlot={
          <div className="flex items-center pr-4">
            <Logo className="origin-right scale-[1.6]" />
          </div>
        }
      />

      {/* ─── Intro section ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid items-start gap-10 md:grid-cols-2">
          <div
            className="aspect-[4/3] w-full rounded-md bg-cover bg-center"
            style={{
              backgroundImage: `url('${IMAGES.team}')`,
            }}
            aria-hidden="true"
          />
          <div>
            <p className="mb-1 text-sm text-neutral-mid">
              Everything you need to know about
            </p>
            <h2 className="mb-5 text-2xl leading-tight md:text-3xl">
              <span className="font-bold text-brand-gold">Dianarose</span>{' '}
              <span className="font-bold text-brand-black">
                Logistic Company
              </span>
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-neutral-mid">
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
          </div>
        </div>
      </section>

      {/* ─── Mission / Vision / Core values ─── */}
      <section className="bg-surface-gray py-16 md:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <ValueCard
              icon={<Target size={26} />}
              title="Mission"
              body="Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa."
            />
            <ValueCard
              icon={<Telescope size={26} />}
              title="Vision"
              body="Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa."
            />
            <ValueCard
              icon={<Award size={26} />}
              title="Core values"
              body="Diana Rose Logistics Ltd is a leading logistics company in Tanzania,"
              bullets={[
                'Warehousing, and cross-border logistics solutions across East.',
                'Warehousing, and cross-border logistics solutions across East.',
                'Warehousing, and cross-border logistics solutions across East.',
              ]}
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/services" variant="outline" size="md">
              Explore our services
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Destinations ─── */}
      <section className="bg-gold-cta py-16 text-white md:py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Destination</h2>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/95">
              Our destination network spans key trade routes and strategic
              locations, ensuring seamless cargo movement across local,
              regional, and international markets. With strong operational
              coordination and dependable transit partnerships, we connect
              businesses to major commercial hubs efficiently and securely,
              enabling timely deliveries and consistent supply chain performance
              wherever your cargo needs to go.
            </p>
            <div className="grid max-w-md grid-cols-2 gap-x-8 gap-y-3">
              {DESTINATIONS.map(country => (
                <div key={country} className="flex items-center gap-2 text-sm">
                  <Check size={16} strokeWidth={2.5} />
                  <span>{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <AfricaMap />
          </div>
        </div>
      </section>

      {/* ─── Partner CTA ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid items-center gap-8 md:grid-cols-[auto,1fr]">
          <div className="text-brand-gold">
            <ShieldCheck size={120} strokeWidth={1.4} />
          </div>
          <div>
            <h2 className="mb-5 max-w-xl text-2xl font-bold leading-snug text-brand-black md:text-3xl">
              Partner with us for reliable and efficient cargo delivery
              solutions.
            </h2>
            <div className="flex gap-3">
              <Button to="/quote" variant="primary" size="md">
                Get a quote
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <div className="space-y-3 rounded bg-white p-7">
      <div className="flex items-center gap-3">
        <span className="text-brand-gold">{icon}</span>
        <h3 className="text-xl font-bold text-brand-gold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-neutral-mid">{body}</p>
      {bullets && (
        <ul className="space-y-2 pt-1">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-neutral-mid"
            >
              <Check
                size={16}
                strokeWidth={2.5}
                className="mt-0.5 flex-shrink-0 text-brand-gold"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AfricaMap() {
  // Stylised Africa outline with network nodes — a simplified illustration
  return (
    <svg
      width="320"
      height="380"
      viewBox="0 0 320 380"
      fill="none"
      className="text-white opacity-90"
      aria-label="Africa map showing destination network"
    >
      <path
        d="M 130 30 Q 100 40 90 70 Q 80 100 95 130 Q 80 150 75 180 Q 70 220 95 260 Q 110 300 140 330 Q 170 350 200 340 Q 230 330 245 295 Q 255 260 240 220 Q 250 190 240 160 Q 230 130 210 110 Q 200 80 175 60 Q 155 35 130 30 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Network nodes */}
      {[
        [120, 80],
        [160, 100],
        [200, 90],
        [180, 140],
        [130, 150],
        [220, 170],
        [165, 200],
        [110, 200],
        [150, 250],
        [200, 240],
        [180, 290],
        [140, 310],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="currentColor" />
          <circle
            cx={cx}
            cy={cy}
            r="8"
            stroke="currentColor"
            strokeOpacity="0.4"
            fill="none"
          />
        </g>
      ))}
      {/* Connecting lines */}
      <g stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.55">
        <line x1="120" y1="80" x2="160" y2="100" />
        <line x1="160" y1="100" x2="200" y2="90" />
        <line x1="160" y1="100" x2="180" y2="140" />
        <line x1="180" y1="140" x2="130" y2="150" />
        <line x1="180" y1="140" x2="220" y2="170" />
        <line x1="220" y1="170" x2="165" y2="200" />
        <line x1="165" y1="200" x2="110" y2="200" />
        <line x1="165" y1="200" x2="150" y2="250" />
        <line x1="150" y1="250" x2="200" y2="240" />
        <line x1="200" y1="240" x2="180" y2="290" />
        <line x1="180" y1="290" x2="140" y2="310" />
      </g>
    </svg>
  );
}
