import { CourseFilters } from "@/components/CourseCatalog/CourseFilterPanel/CourseFilters";
import { useElementHeight } from "@/hooks/useElementHeight";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function CourseFilterPanel() {
  const scrollState = useScrollDirection({
    threshold: 100,
  });

  const [panelRef, panelHeight] = useElementHeight<HTMLDivElement>();

  const topPosition = scrollState.isVisible ? "0" : `-${panelHeight}px`;

  return (
    <div
      ref={panelRef}
      className="bg-background/98 border-border sticky left-0 z-50 w-full border-b text-black shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 ease-in-out dark:text-white"
      style={{ top: topPosition }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-4">
        <CourseFilters />
      </div>
    </div>
  );
}
