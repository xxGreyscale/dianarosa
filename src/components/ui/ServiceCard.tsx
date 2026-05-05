import { Truck, Package, ClipboardCheck, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  package: Package,
  clipboard: ClipboardCheck,
  mapPin: MapPin,
};

interface ServiceCardProps {
  title: string;
  iconName: keyof typeof iconMap;
  description: string;
  long?: string;
  /** Compact layout (Home page grid) vs full layout (Services page) */
  compact?: boolean;
}

export function ServiceCard({
  title,
  iconName,
  description,
  long,
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[iconName];

  if (compact) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-5 text-center">
        <div className="text-brand-gold">
          <Icon size={36} strokeWidth={1.75} />
        </div>
        <h3 className="text-sm font-semibold text-brand-black">{title}</h3>
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded bg-surface-gray p-7">
      <div className="mb-2 flex items-center gap-3">
        <Icon size={28} className="text-brand-gold" strokeWidth={1.75} />
        <h3 className="text-base font-bold text-brand-gold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-neutral-dark">{description}</p>
      {long && (
        <p className="text-sm leading-relaxed text-neutral-dark">{long}</p>
      )}
    </div>
  );
}
