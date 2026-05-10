import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { PageHero } from '../components/layout/PageHero';
import { CallBanner } from '../components/layout/CallBanner';
import { Input, Select, Textarea } from '../components/ui/FormField';
import { Button } from '../components/ui/Button';
import {
  quoteSchema,
  SERVICE_OPTIONS,
  CARGO_TYPE_OPTIONS,
  type QuoteFormData,
} from '../lib/schemas';
import { ILLUSTRATIONS } from '../lib/assets';

export function GetQuote() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      email: '',
      serviceType: '',
      cargoType: '',
      cargoDetails: '',
      notRobot: false,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    await new Promise(r => setTimeout(r, 800));
    console.log('Quote form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        title="Request a quotation"
        description="By submitting this request, you confirm that your details are accurate and understand that changes may affect the final price. This quote is free, carries no obligation, and is valid for 30 days. We will use your info only for this estimate and aim to respond within 3 days."
        rightSlot={
          <img
            src={ILLUSTRATIONS.quoteDoc}
            alt="Quotation document"
            width={280}
            height={280}
            className="w-full max-w-[280px]"
          />
        }
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-brand-black md:text-3xl">
            Enter details
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
              label="Service type"
              placeholder="Select a service"
              options={SERVICE_OPTIONS}
              {...register('serviceType')}
              error={errors.serviceType?.message}
            />

            <Select
              label="Type of cargo"
              placeholder="Select cargo type"
              options={CARGO_TYPE_OPTIONS}
              {...register('cargoType')}
              error={errors.cargoType?.message}
            />

            <Textarea
              label="Cargo details"
              rows={5}
              {...register('cargoDetails')}
              error={errors.cargoDetails?.message}
            />

            <div className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
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
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </Button>
            </div>

            {errors.notRobot && (
              <p className="pt-1 text-xs text-red-600">
                {errors.notRobot.message}
              </p>
            )}

            {submitted && (
              <div className="rounded border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                Thank you! Your quote request has been received. We'll be in
                touch within 3 days.
              </div>
            )}
          </form>
        </div>
      </section>

      <CallBanner />
    </>
  );
}
