export const SITE = {
  name: 'Dianarose Logistics',
  shortName: 'Dianarose',
  tagline: 'Reliable Cargo Movement Across East Africa',
  email: 'info@dianaroselogistics.com',
  phones: ['+255784857114', '+255766483591'],
  mobile: '+255 742 779277',
  copyright: '©2026, Dianarose Logistic Company Limited',
  social: {
    facebook: 'https://facebook.com/dianaroselogistics',
    instagram: 'https://instagram.com/dianaroselogistics',
  },
} as const;

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Our services' },
  { to: '/contact', label: 'Contact us' },
] as const;

export const FOOTER_LINKS = [
  { to: '/data-protection', label: 'Data protection policy' },
  { to: '/cookie-policy', label: 'Cookie policy' },
] as const;

export const OFFICES = {
  head: {
    title: 'Head office',
    company: 'Dianarose Logistics Limited',
    addressLines: [
      'Mbezi Luis, Dar es Salaam',
      'Po Box 31800, Dar es Salaam, Tanzania.',
    ],
  },
  drc: {
    title: 'DRC office',
    addressLines: [
      '18 AVE MANIENA, Batiment MWALIMU 3eme',
      'Niveau, Local 29',
      'Democratic Republic of Congo',
    ],
  },
} as const;

export const SERVICES = [
  {
    id: 'cargo-transportation',
    title: 'Cargo transportation',
    icon: 'truck' as const,
    description:
      'Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa.',
    long: 'Strategically operating through the Port of Dar es Salaam, we provide secure, timely, and cost-effective cargo transportation for importers, exporters, manufacturers, mining companies, NGOs, and commercial enterprises.',
  },
  {
    id: 'moving-services',
    title: 'Moving services',
    icon: 'package' as const,
    description:
      'Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa.',
    long: 'Strategically operating through the Port of Dar es Salaam, we provide secure, timely, and cost-effective cargo transportation for importers, exporters, manufacturers, mining companies, NGOs, and commercial enterprises.',
  },
  {
    id: 'cargo-permits',
    title: 'Cargo permits',
    icon: 'clipboard' as const,
    description:
      'Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa.',
    long: 'Strategically operating through the Port of Dar es Salaam, we provide secure, timely, and cost-effective cargo transportation for importers, exporters, manufacturers, mining companies, NGOs, and commercial enterprises.',
  },
  {
    id: 'cargo-tracking',
    title: 'Cargo tracking',
    icon: 'mapPin' as const,
    description:
      'Diana Rose Logistics Ltd is a leading logistics company in Tanzania, headquartered in Dar es Salaam, delivering reliable freight transport, warehousing, and cross-border logistics solutions across East, Central, and Southern Africa.',
    long: 'Strategically operating through the Port of Dar es Salaam, we provide secure, timely, and cost-effective cargo transportation for importers, exporters, manufacturers, mining companies, NGOs, and commercial enterprises.',
  },
] as const;

export const STATS = [
  { value: '100+', label: 'modern trucks and trailers' },
  { value: '3000+', label: 'tons carrying capacity' },
  { value: '14+', label: 'destination countries' },
  { value: '50+', label: 'years combined industry experience' },
] as const;

export const WHY_CHOOSE_US = [
  'Proven cross-border expertise',
  'Scalable fleet through subcontract partnerships',
  'Strong regional transport network',
] as const;

export const DESTINATIONS = [
  'Tanzania',
  'Kenya',
  'Uganda',
  'Rwanda',
  'Burundi',
  'DRC',
  'Zambia',
  'Malawi',
  'Mozambique',
  'South Africa',
  'Zimbabwe',
  'Botswana',
] as const;
