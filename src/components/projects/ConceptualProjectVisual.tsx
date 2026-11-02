import { cn } from "@/lib/cn";
import type { ConceptualVisual, ProjectCategory } from "@/content/projects";

type ConceptualProjectVisualProps = {
  visual: ConceptualVisual;
  category: ProjectCategory;
  className?: string;
  /** Hide title/caption overlay when parent provides adjacent captions. */
  hideCaption?: boolean;
};

const categoryTone: Record<ProjectCategory, string> = {
  residential: "bg-navy-800",
  renovation: "bg-navy-900",
  commercial: "bg-navy-950",
  interior: "bg-navy-700",
};

function KindGeometry({ kind }: { kind: ConceptualVisual["kind"] }) {
  switch (kind) {
    case "site-diagram":
      return (
        <>
          <div className="absolute inset-y-[12%] left-[10%] w-[34%] border border-white/25" />
          <div className="absolute top-[18%] right-[12%] h-[42%] w-[38%] bg-navy-950/50" />
          <div className="absolute bottom-[16%] left-[18%] h-px w-[64%] bg-white/25" />
          <div className="absolute top-[28%] left-[28%] h-[36%] w-px bg-orange-500" />
          <div className="absolute top-[28%] left-[28%] h-0.5 w-[22%] bg-orange-500" />
          <div className="absolute right-[18%] bottom-[22%] h-10 w-10 rotate-45 border border-white/30" />
        </>
      );
    case "floor-plan":
      return (
        <>
          <div className="absolute inset-[14%] border border-white/30" />
          <div className="absolute top-[14%] bottom-[50%] left-[14%] right-[48%] border-r border-b border-white/25" />
          <div className="absolute top-[50%] bottom-[14%] left-[48%] right-[14%] border-l border-t border-white/25" />
          <div className="absolute top-[14%] bottom-[14%] left-1/2 w-px bg-white/20" />
          <div className="absolute top-1/2 right-[14%] left-[14%] h-px bg-white/20" />
          <div className="absolute top-[22%] left-[22%] h-0.5 w-16 bg-orange-500" />
        </>
      );
    case "elevation":
      return (
        <>
          <div className="absolute bottom-[18%] left-[12%] right-[12%] h-px bg-white/35" />
          <div className="absolute bottom-[18%] left-[18%] h-[52%] w-[28%] bg-navy-950/45" />
          <div className="absolute bottom-[18%] left-[46%] h-[64%] w-[36%] bg-navy-800/35" />
          <div
            className="absolute bottom-[70%] left-[46%] h-0 w-0 border-b-[min(12vw,5rem)] border-l-[min(9vw,4.5rem)] border-r-[min(9vw,4.5rem)] border-b-navy-700/80 border-l-transparent border-r-transparent"
          />
          <div className="absolute bottom-[18%] left-[46%] h-[64%] w-0.5 bg-orange-500" />
          <div className="absolute top-[24%] right-[16%] h-px w-[28%] bg-white/25" />
        </>
      );
    case "section":
      return (
        <>
          <div className="absolute inset-y-[16%] left-[16%] right-[16%] border-x border-white/25" />
          <div className="absolute top-[22%] left-[16%] right-[16%] h-px bg-white/30" />
          <div className="absolute top-[42%] left-[16%] right-[40%] h-px bg-white/20" />
          <div className="absolute top-[62%] left-[16%] right-[16%] h-px bg-white/25" />
          <div className="absolute inset-y-[22%] left-[38%] w-[18%] bg-navy-950/40" />
          <div className="absolute top-[22%] bottom-[38%] left-[38%] w-0.5 bg-orange-500" />
          <div className="absolute right-[20%] bottom-[20%] h-12 w-px bg-white/30" />
        </>
      );
    case "interior-concept":
      return (
        <>
          <div className="absolute inset-y-0 left-0 w-[46%] bg-navy-950/40" />
          <div className="absolute top-[20%] right-[10%] h-[46%] w-[40%] bg-white/5" />
          <div className="absolute bottom-[18%] left-[12%] h-px w-[70%] bg-white/25" />
          <div className="absolute top-[28%] left-[18%] h-24 w-16 border border-white/20" />
          <div className="absolute top-[28%] left-[18%] h-0.5 w-16 bg-orange-500" />
          <div className="absolute right-[18%] top-[30%] h-px w-[22%] bg-white/30" />
          <div className="absolute right-[18%] top-[38%] h-px w-[16%] bg-white/20" />
        </>
      );
    case "axonometric":
      return (
        <>
          <div className="absolute top-[22%] left-[22%] h-[46%] w-[42%] border border-white/30" />
          <div className="absolute top-[14%] left-[34%] h-[46%] w-[42%] border border-white/20 bg-navy-950/30" />
          <div className="absolute top-[14%] left-[34%] h-px w-[42%] bg-orange-500" />
          <div className="absolute top-[14%] left-[34%] h-[46%] w-px bg-orange-500" />
          <div className="absolute bottom-[18%] right-[16%] h-10 w-10 border border-white/25" />
          <div className="absolute top-[58%] left-[18%] h-px w-[40%] bg-white/20" />
        </>
      );
    default:
      return (
        <>
          <div className="absolute top-0 left-0 h-full w-[38%] bg-navy-950/55" />
          <div className="absolute right-0 bottom-0 h-[42%] w-[48%] bg-navy-800/40" />
          <div className="absolute top-[18%] right-0 h-px w-[70%] bg-white/20" />
          <div className="absolute inset-y-[20%] left-[42%] w-px bg-white/20" />
          <div className="absolute top-[20%] bottom-[28%] left-[42%] w-0.5 bg-orange-500" />
        </>
      );
  }
}

export function ConceptualProjectVisual({
  visual,
  category,
  className,
  hideCaption = false,
}: ConceptualProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden",
        categoryTone[category],
        className,
      )}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-navy-950/15" />
        <KindGeometry kind={visual.kind} />
      </div>

      {hideCaption ? null : (
        <div className="absolute inset-x-0 bottom-0 bg-navy-950/75 p-4 pt-10 sm:p-5 sm:pt-12">
          <p className="font-display text-sm font-semibold text-white">
            {visual.title}
          </p>
          <p className="mt-1 max-w-prose text-xs leading-snug text-white/80">
            {visual.caption}
          </p>
        </div>
      )}
    </div>
  );
}
