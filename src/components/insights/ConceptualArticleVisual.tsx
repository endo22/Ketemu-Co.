import { cn } from "@/lib/cn";
import type { InsightArticle } from "@/content/insights";

type ConceptualArticleVisualProps = {
  kind: InsightArticle["coverKind"];
  title: string;
  caption: string;
  className?: string;
  hideCaption?: boolean;
};

export function ConceptualArticleVisual({
  kind,
  title,
  caption,
  className,
  hideCaption = false,
}: ConceptualArticleVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden bg-navy-800",
        className,
      )}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-navy-950/20" />
        {kind === "diagram" ? (
          <>
            <div className="absolute inset-[14%] border border-white/25" />
            <div className="absolute top-[30%] left-[20%] h-px w-[60%] bg-orange-500" />
            <div className="absolute top-[30%] bottom-[22%] left-[20%] w-px bg-white/30" />
          </>
        ) : null}
        {kind === "section" ? (
          <>
            <div className="absolute inset-y-[18%] left-[18%] right-[18%] border-x border-white/25" />
            <div className="absolute top-[28%] left-[18%] right-[18%] h-px bg-white/30" />
            <div className="absolute top-[28%] bottom-[30%] left-[40%] w-0.5 bg-orange-500" />
          </>
        ) : null}
        {kind === "plan" ? (
          <>
            <div className="absolute inset-[16%] border border-white/30" />
            <div className="absolute top-1/2 left-[16%] right-[16%] h-px bg-white/20" />
            <div className="absolute top-[16%] bottom-[16%] left-1/2 w-px bg-white/20" />
            <div className="absolute top-[24%] left-[24%] h-0.5 w-14 bg-orange-500" />
          </>
        ) : null}
        {kind === "light" ? (
          <>
            <div className="absolute top-[18%] left-[20%] h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute bottom-[22%] left-[18%] right-[18%] h-px bg-white/25" />
            <div className="absolute top-[40%] right-[22%] h-16 w-0.5 bg-orange-500" />
          </>
        ) : null}
        {kind === "material" ? (
          <>
            <div className="absolute top-0 left-0 h-full w-1/3 bg-navy-950/50" />
            <div className="absolute top-0 left-1/3 h-full w-1/3 bg-navy-700/40" />
            <div className="absolute bottom-[20%] left-[12%] h-0.5 w-[40%] bg-orange-500" />
          </>
        ) : null}
        {kind === "process" ? (
          <>
            <div className="absolute top-[35%] left-[12%] right-[12%] h-px bg-white/30" />
            <div className="absolute top-[28%] left-[18%] h-8 w-8 border border-white/30" />
            <div className="absolute top-[28%] left-[46%] h-8 w-8 border border-white/30" />
            <div className="absolute top-[28%] right-[18%] h-8 w-8 border border-orange-500" />
          </>
        ) : null}
      </div>

      {hideCaption ? null : (
        <div className="absolute inset-x-0 bottom-0 bg-navy-950/75 p-4 pt-10 sm:p-5">
          <p className="font-display text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 max-w-prose text-xs leading-snug text-white/80">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
