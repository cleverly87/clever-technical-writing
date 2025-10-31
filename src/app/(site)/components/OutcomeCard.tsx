interface OutcomeCardProps {
  label: string;
  metric?: string;
  blurb: string;
}

/**
 * OutcomeCard - Clean metric card component for showcasing business outcomes
 * Professional layout with clear visual hierarchy
 */
export default function OutcomeCard({ label, metric, blurb }: OutcomeCardProps) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-200 hover:bg-neutral-900">
      {/* Header Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-100 mb-2">{label}</h3>
        {metric && (
          <div className="text-2xl font-bold text-neutral-300">{metric}</div>
        )}
      </div>
      
      {/* Separator */}
      <div className="w-full h-px bg-neutral-800 mb-4"></div>
      
      {/* Description */}
      <p className="text-sm text-neutral-400 leading-relaxed">{blurb}</p>
    </div>
  );
}