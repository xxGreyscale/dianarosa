import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { PageHero } from '../components/layout/PageHero';
import { CallBanner } from '../components/layout/CallBanner';
import { Input, Select, Textarea } from '../components/ui/FormField';
import { Button } from '../components/ui/Button';
import {
  contactSchema,
  SERVICE_OPTIONS,
  type ContactFormData,
} from '../lib/schemas';
import { OFFICES } from '../lib/constants';
import { IMAGES } from '../lib/assets';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: '', service: '', message: '', notRobot: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate async submit
    await new Promise(r => setTimeout(r, 800));
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        title="Contact us"
        rightSlot={
          <div>
            <img
              src={IMAGES.womanHeadset}
              alt=""
              className="object-bottom-right h-full w-full object-contain"
            />
          </div>
        }
      >
        <div className="mt-7 grid gap-6 text-white md:grid-cols-2 md:gap-8">
          {[OFFICES.head, OFFICES.drc].map(office => (
            <div key={office.title}>
              <h3 className="mb-2 font-semibold text-white">{office.title}</h3>
              <address className="space-y-0.5 text-sm not-italic leading-relaxed text-white/90">
                {'company' in office && office.company && (
                  <div>{office.company}</div>
                )}
                {office.addressLines.map(line => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Form */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-brand-black md:text-3xl">
            Write to us direct
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="E-mail"
              type="email"
              autoComplete="email"
              {...register('email')}
              error={errors.email?.message}
            />

            <Select
              label="Service"
              placeholder="Select a service"
              options={SERVICE_OPTIONS}
              {...register('service')}
              error={errors.service?.message}
            />

            <Textarea
              label="Your message"
              rows={6}
              {...register('message')}
              error={errors.message?.message}
            />

            <div className="flex items-center justify-between pt-3">
              <label className="flex cursor-pointer select-none items-center gap-2">
                <input
                  type="checkbox"
                  {...register('notRobot')}
                  className="h-4 w-4 rounded border border-neutral-light accent-brand-black"
                />
                <span className="text-sm font-semibold text-brand-black">
                  I'm not a robot
                </span>
              </label>
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send'}
              </Button>
            </div>

            {errors.notRobot && (
              <p className="pt-1 text-xs text-red-600">
                {errors.notRobot.message}
              </p>
            )}

            {submitted && (
              <div className="rounded border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                Thank you for your message! We'll get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </section>

      <CallBanner />
    </>
  );
}
