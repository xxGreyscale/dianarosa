import { Target, Telescope, Award, Check, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { DESTINATIONS } from '../lib/constants';
import { IMAGES } from '../lib/assets';

export function About() {
  return (
    <>
      <PageHero
        title="About us"
        rightSlot={
          <div className="flex items-center py-4 pr-4 md:py-8">
            <img
              src={IMAGES.logoPrimary}
              alt="Dianarose Logistics"
              className="w-full max-w-[340px] object-contain opacity-30"
            />
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
            <div className="flex flex-col gap-3 sm:flex-row">
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
    <div className="space-y-3 rounded bg-white p-5 md:p-7">
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
  const points = [
    [112, 72],
    [140, 66],
    [172, 76],
    [204, 96],
    [222, 126],
    [184, 132],
    [152, 142],
    [114, 150],
    [106, 188],
    [136, 198],
    [170, 194],
    [198, 188],
    [190, 226],
    [160, 240],
    [136, 272],
    [166, 296],
    [188, 322],
    [174, 350],
  ] as const;

  const routes = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [10, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [16, 17],
    [6, 10],
    [9, 13],
  ] as const;

  return (
    <svg
      width="320"
      height="380"
      viewBox="0 0 320 380"
      fill="none"
      className="w-full max-w-[320px] text-white"
      aria-label="Africa map showing destination network"
    >
      <path
        d="M130 18C112 22 97 36 88 56C79 77 81 98 77 119C72 145 75 167 88 189C101 211 95 238 109 266C123 293 145 336 171 354C191 368 210 362 220 344C229 328 238 304 243 284C247 265 241 244 235 223C229 199 236 174 230 152C224 129 213 111 196 95C183 83 173 69 166 52C160 36 148 24 130 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M236 284C246 294 250 308 247 322C243 336 232 345 223 339C215 333 214 318 220 305C225 297 231 290 236 284Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      <g stroke="white" strokeWidth="0.9" strokeOpacity="0.42">
        {routes.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={points[from][0]}
            y1={points[from][1]}
            x2={points[to][0]}
            y2={points[to][1]}
          />
        ))}
      </g>

      {points.map(([cx, cy], index) => (
        <g key={index} className="group cursor-pointer">
          <circle
            cx={cx}
            cy={cy}
            r="4"
            className="origin-center fill-white transition-all duration-200 [transform-box:fill-box] group-hover:scale-150 group-hover:fill-[#111111]"
          />
          <circle
            cx={cx}
            cy={cy}
            r="10"
            className="fill-none stroke-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </g>
      ))}
    </svg>
  );
}
