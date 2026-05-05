import { Button } from '../components/ui/Button';

export function DataProtection() {
  return (
    <article className="bg-white py-12 md:py-16">
      <div className="container-page max-w-4xl">
        <h1 className="mb-12 text-4xl font-bold text-brand-black md:text-5xl">
          Data Protection Policy
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-mid">
          <Section title="1. Information We Collect">
            <p>
              We only collect the information necessary to serve you. This
              includes:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Personal Details: Name, email address, and phone number.</li>
              <li>
                Project Details: Any specifications or files you upload for a
                quote.
              </li>
              <li>
                Technical Data: Basic cookies to ensure our website functions
                correctly.
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Data">
            <p>Your data is used strictly to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide accurate price quotes and answer your inquiries.</li>
              <li>Process orders and deliver services.</li>
              <li>
                Improve our website experience. We do not sell or rent your
                personal information to third parties.
              </li>
            </ul>
          </Section>

          <Section title="3. Data Storage &amp; Security">
            <p>
              We use industry-standard security measures to protect your
              information from unauthorized access. We retain your data only as
              long as necessary to fulfill the purposes outlined above or to
              comply with legal obligations.
            </p>
          </Section>

          <Section title="4. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Request a copy of the data we hold about you.</li>
              <li>Ask us to correct or delete your personal information.</li>
              <li>Withdraw your consent for marketing at any time.</li>
            </ul>
          </Section>

          <Section title="5. Contact Us">
            <p>
              For any questions regarding your data or to exercise your rights,
              please contact us at [Insert Email Address].
            </p>
          </Section>

          <div className="pt-2">
            <Button to="/contact" variant="outline" size="md">
              Contact us
            </Button>
          </div>
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
