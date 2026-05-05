export function CookiePolicy() {
  return (
    <article className="bg-white py-12 md:py-16">
      <div className="container-page max-w-4xl">
        <h1 className="mb-12 text-4xl font-bold text-brand-black md:text-5xl">
          Cookies Policy
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-mid">
          <Section title="1. What Are Cookies?">
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help the site recognize you, remember your
              preferences, and ensure everything runs smoothly.
            </p>
          </Section>

          <Section title="2. How We Use Cookies">
            <p>
              We use cookies to improve your experience in the following ways:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Essential Cookies: Necessary for the website to function (e.g.,
                keeping your quote request data intact as you move between
                pages).
              </li>
              <li>
                Performance Cookies: Help us understand how visitors use our
                site so we can fix bugs and improve layout.
              </li>
              <li>
                Functional Cookies: Remember your settings, such as your
                language preference or login details.
              </li>
            </ul>
          </Section>

          <Section title="3. Third-Party Cookies">
            <p>
              We may use third-party services (like Google Analytics) to help us
              analyze web traffic. These providers may set their own cookies to
              track your interaction with our site.
            </p>
          </Section>

          <Section title="4. Your Choices">
            <p>
              You can choose to accept or decline cookies. Most web browsers
              automatically accept them, but you can usually modify your browser
              settings to decline cookies if you prefer.
            </p>
            <p>
              <strong className="text-brand-black">Note:</strong> Disabling
              cookies may prevent you from taking full advantage of the website
              or successfully submitting a quotation request.
            </p>
          </Section>

          <Section title="5. Managing Cookies">
            <p>
              To learn how to manage cookies on your specific browser, visit
              your browser's "Help" section or go to{' '}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold underline hover:text-brand-gold-light"
              >
                AboutCookies.org
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold text-brand-black">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
