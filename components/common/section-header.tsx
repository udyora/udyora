interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-6 lg:mb-12 flex flex-col gap-3 sm:gap-4 lg:gap-6 lg:flex-row lg:justify-between ${className}`}
    >
      <div className="flex items-center max-lg:text-center max-lg:justify-center gap-4 h-fit">
        <div className="h-px w-10 bg-beige-100" />
        <div className="flex items-center gap-4">
          <h2 className="font-fraunces text-3xl lg:text-4xl text-beige-100">
            {title}
          </h2>
          <div className="h-px w-10 bg-beige-100" />
        </div>
      </div>

      {description && (
        <p className="max-w-xl text-lg max-lg:text-center max-lg:mx-auto text-subtitle">
          {description}
        </p>
      )}
    </div>
  );
}
