import { cn } from "@/lib/cn";
import type { ConceptualVisual, ProjectCategory } from "@/content/projects";

type ConceptualProjectVisualProps = {
  visual: ConceptualVisual;
  category: ProjectCategory;
  className?: string;
};

const categoryTone: Record<ProjectCategory, string> = {
  residential: "bg-navy-800",
  renovation: "bg-navy-900",
  commercial: "bg-navy-950",
  interior: "bg-navy-700",
};

export function ConceptualProjectVisual({
  visual,
  category,
  className,
}: ConceptualProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden",
        categoryTone[category],
        className,
      )}
    >
      {/* Editorial geometry — conceptual, not photography */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 h-full w-[38%] bg-navy-950/55" />
        <div className="absolute right-0 bottom-0 h-[42%] w-[48%] bg-navy-800/40" />
        <div className="absolute top-[18%] right-0 h-px w-[70%] bg-white/20" />
        <div className="absolute top-[42%] left-[22%] h-px w-[65%] bg-white/15" />
        <div className="absolute inset-y-[20%] left-[42%] w-px bg-white/20" />
        <div className="absolute top-[20%] bottom-[28%] left-[42%] w-0.5 bg-orange-500" />
        <div className="absolute right-[12%] bottom-[16%] h-14 w-14 border border-white/25" />
        <div className="absolute right-[12%] bottom-[16%] h-0.5 w-14 bg-orange-500" />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-navy-950/75 p-4 pt-10 sm:p-5 sm:pt-12">
        <p className="font-display text-sm font-semibold text-white">
          {visual.title}
        </p>
        <p className="mt-1 max-w-prose text-xs leading-snug text-white/80">
          {visual.caption}
        </p>
      </div>
    </div>
  );
}
