import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../lib/constants';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-sm' : 'border-b border-neutral-light/50'
      }`}
    >
      <div className="container-page flex h-navbar items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Dianarose Logistics — home">
          <Logo />
        </Link>

        {/* Desktop nav — pill-shaped container */}
        <nav className="hidden items-center rounded-full bg-surface-gray p-1.5 lg:flex">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-white font-semibold text-brand-black shadow-sm'
                    : 'text-neutral-mid hover:text-brand-black'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button to="/quote" variant="primary" size="md">
            Get a quote
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="-mr-2 p-2 text-brand-black lg:hidden"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-neutral-light bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 text-base transition-colors ${
                    isActive
                      ? 'bg-surface-gray font-semibold text-brand-black'
                      : 'text-neutral-dark hover:bg-surface-gray'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 border-t border-neutral-light pt-3">
              <Button
                to="/quote"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get a quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
