import { cn } from "@/lib/cn";
import {
  demoLabels,
  type DemoBadgeVariant,
} from "@/content/demo";

type ContentStatusBadgeProps = {
  variant: DemoBadgeVariant;
  className?: string;
};

const variantClassName: Record<DemoBadgeVariant, string> = {
  conceptual:
    "border-navy-800 bg-navy-800 text-white",
  simulated:
    "border-grey-300 bg-grey-100 text-navy-800",
};

export function ContentStatusBadge({
  variant,
  className,
}: ContentStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center border px-2 py-0.5 font-sans text-[0.6875rem] font-semibold tracking-wide uppercase",
        variantClassName[variant],
        className,
      )}
    >
      {demoLabels[variant]}
    </span>
  );
}
