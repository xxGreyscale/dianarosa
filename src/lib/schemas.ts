import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide at least 10 characters'),
  notRobot: z
    .boolean()
    .refine(v => v === true, 'Please confirm you are not a robot'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  serviceType: z.string().min(1, 'Please select a service type'),
  cargoType: z.string().min(1, 'Please select a cargo type'),
  cargoDetails: z.string().min(10, 'Please provide at least 10 characters'),
  notRobot: z
    .boolean()
    .refine(v => v === true, 'Please confirm you are not a robot'),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

export const SERVICE_OPTIONS = [
  { value: 'cargo-transportation', label: 'Cargo transportation' },
  { value: 'moving-services', label: 'Moving services' },
  { value: 'cargo-permits', label: 'Cargo permits' },
  { value: 'cargo-tracking', label: 'Cargo tracking' },
];

export const CARGO_TYPE_OPTIONS = [
  { value: 'general', label: 'General cargo' },
  { value: 'containerised', label: 'Containerised' },
  { value: 'bulk', label: 'Bulk' },
  { value: 'mining', label: 'Mining materials' },
  { value: 'hazardous', label: 'Hazardous goods' },
  { value: 'other', label: 'Other' },
];
