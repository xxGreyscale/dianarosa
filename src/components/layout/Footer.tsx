import { Link } from 'react-router-dom';

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { Logo } from '../ui/Logo';
import { SITE, FOOTER_LINKS, OFFICES } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo + copyright */}
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-white/60">{SITE.copyright}</p>
          </div>

          {/* Head office */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">{OFFICES.head.title}</h3>
            <address className="space-y-1 text-sm not-italic leading-relaxed text-white/80">
              {OFFICES.head.addressLines.map(line => (
                <div key={line}>{line}</div>
              ))}
              <div className="pt-1">
                Phone:{' '}
                <a
                  href={`tel:${SITE.phones[0]}`}
                  className="hover:text-brand-gold-light"
                >
                  {SITE.phones[0]}
                </a>{' '}
                /{' '}
                <a
                  href={`tel:${SITE.phones[1]}`}
                  className="hover:text-brand-gold-light"
                >
                  {SITE.phones[1]}
                </a>
              </div>
              <div>
                Mobile:{' '}
                <a
                  href={`tel:${SITE.mobile.replace(/\s/g, '')}`}
                  className="hover:text-brand-gold-light"
                >
                  {SITE.mobile}
                </a>
              </div>
              <div>
                Email:{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-brand-gold-light"
                >
                  {SITE.email}
                </a>
              </div>
            </address>
          </div>

          {/* Useful links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Useful links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {FOOTER_LINKS.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-brand-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 pt-2">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 transition-colors hover:text-brand-gold-light"
              >
                <FacebookIcon size={22} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 transition-colors hover:text-brand-gold-light"
              >
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
