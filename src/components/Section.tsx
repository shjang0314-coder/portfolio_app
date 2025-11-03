interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[var(--section-padding)] ${className}`}
    >
      <div className="mx-auto max-w-[var(--container-max-width)] px-6">
        {title && (
          <div className="mb-16 text-center">
            {subtitle && (
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


