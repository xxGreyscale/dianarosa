import truckIcon from '../../assets/icons/truck.png?url';
import trollyIcon from '../../assets/icons/trolly.png?url';
import checklistIcon from '../../assets/icons/checklist.png?url';
import destinationIcon from '../../assets/icons/destination.png?url';

const iconMap = {
  truck: truckIcon,
  package: trollyIcon,
  clipboard: checklistIcon,
  mapPin: destinationIcon,
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
  const iconSrc = iconMap[iconName];

  if (compact) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-5 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={iconSrc}
            alt=""
            className="h-9 w-9 object-contain"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-sm font-semibold text-brand-black">{title}</h3>
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded bg-surface-gray p-7 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-2 flex items-center gap-3">
        <img
          src={iconSrc}
          alt=""
          className="h-7 w-7 object-contain"
          loading="lazy"
          aria-hidden="true"
        />
        <h3 className="text-base font-bold text-brand-gold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-neutral-dark">{description}</p>
      {long && (
        <p className="text-sm leading-relaxed text-neutral-dark">{long}</p>
      )}
    </div>
  );
}
