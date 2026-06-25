type ComplianceBannerProps = {
  compact?: boolean;
};

export function ComplianceBanner({ compact = false }: ComplianceBannerProps) {
  return (
    <aside
      className={`border-y border-cyanmark/20 bg-cyanmark/10 text-marine ${
        compact ? 'px-4 py-3 text-sm' : 'px-4 py-4 text-sm sm:text-base'
      }`}
    >
      <div className="mx-auto max-w-7xl leading-6">
        Products are intended for laboratory research use only. Not for human consumption.
        Statements on this site have not been evaluated by the U.S. Food and Drug Administration.
      </div>
    </aside>
  );
}
