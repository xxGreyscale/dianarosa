import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container-page mx-auto max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">
          Error 404
        </p>
        <h1 className="mb-5 text-5xl font-bold text-brand-black md:text-6xl">
          Page not found
        </h1>
        <p className="mb-8 text-base text-neutral-mid">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-3">
          <Button to="/" variant="primary" size="md">
            Back to home
          </Button>
          <Button to="/contact" variant="outline" size="md">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
