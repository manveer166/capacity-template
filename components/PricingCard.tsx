interface PricingCardProps {
  title: string;
  price: string;
  credits: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export default function PricingCard({
  title,
  price,
  credits,
  features,
  ctaLabel,
  featured = false,
}: PricingCardProps) {
  const cardClasses = [
    'rounded-2xl',
    'p-6',
    'flex',
    'flex-col',
    'shadow-lg',
    featured ? 'border-2 border-white' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const buttonClasses = [
    'mt-auto',
    'font-medium',
    'px-4',
    'py-2',
    'rounded-lg',
    'transition-colors',
    'duration-200',
    featured
      ? 'bg-white text-neutral-900 hover:bg-neutral-100'
      : 'bg-neutral-900 text-white hover:bg-neutral-800',
  ].join(' ');
  return (
    <div className={cardClasses}>
      <h3 className="text-2xl font-semibold mb-1 text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">{credits}</p>
      <div className="mb-2">
        <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {price}
        </span>
        <span className="text-base font-medium text-neutral-700 dark:text-neutral-300">/month</span>
      </div>
      <button className={buttonClasses}>{ctaLabel}</button>
      <ul className="mt-4 space-y-2 text-sm text-neutral-900 dark:text-neutral-100">
        {features.map((feat) => (
          <li key={feat} className="flex items-center">
            <span className="mr-2">✔</span>
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}