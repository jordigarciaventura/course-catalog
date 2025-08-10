import { CategoryBadge } from "@/components/CourseCatalog/CourseGrid/CategoryBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { asset } from "@/config";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { formatCourseDate, humanizeDuration } from "@/lib/date";
import { cn } from "@/lib/utils";
import type { Course } from "@/types";
import { CalendarIcon, Clock } from "lucide-react";

interface Props {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<Props> = ({ course, className }) => {
  const currentLanguage = useCurrentLanguage();

  const title = course.title[currentLanguage];
  const description = course.description[currentLanguage];
  const duration = humanizeDuration(course.duration, currentLanguage);
  const date = course.date;
  const category = course.category;

  // Format the date using the localized date utility
  const formattedDate = formatCourseDate(date, currentLanguage);

  return (
    <Card
      className={cn(
        "flex h-full w-full flex-col gap-4 rounded-xl p-4 shadow-md",
        className,
      )}
    >
      <CardHeader className="relative p-0">
        <div className="absolute top-8 left-0 flex size-19 flex-shrink-0 items-center justify-center rounded-full border bg-gray-100 p-3 dark:bg-gray-800">
          <span
            className="flex h-full w-full items-center justify-center text-2xl [&>svg]:h-full [&>svg]:w-full"
            aria-hidden="true"
          >
            <img
              src={asset(course.iconUrl)}
              className="h-full w-full dark:[filter:drop-shadow(0_0_1px_white)_drop-shadow(0_0_1px_white)]"
              alt=""
            />
          </span>
        </div>

        <div className="text-muted-foreground flex flex-col items-end gap-3 text-sm">
          <CategoryBadge courseCategory={category} />
          <div className="flex flex-col items-end gap-2 pr-2">
            <time className="flex items-center gap-2" dateTime={date}>
              <span>{formattedDate}</span>
              <CalendarIcon className="size-4" aria-hidden="true" />
            </time>
            <div className="flex items-center gap-2">
              <span>{duration}</span>
              <Clock className="size-4" aria-hidden="true" />
            </div>
          </div>
        </div>

        <CardTitle className="mt-6 text-lg leading-tight font-semibold text-balance">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-0 pb-8">
        <CardDescription className="text-muted-foreground text-balanced text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
