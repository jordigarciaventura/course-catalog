import { CalendarIcon, Clock } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Course } from "@/types";
import { CategoryBadge } from "@/components/CourseCatalog/CourseGrid/CategoryBadge";
import { cn } from "@/lib/utils";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { formatCourseDate } from "@/lib/date";

interface Props {
    course: Course;
    className?: string;
}

export const CourseCard: React.FC<Props> = ({ course, className }) => {
    const currentLanguage = useCurrentLanguage();

    const title = course.title[currentLanguage];
    const description = course.description[currentLanguage];
    const duration = course.duration;
    const date = course.date;
    const category = course.category;

    // Format the date using the localized date utility
    const formattedDate = formatCourseDate(date, currentLanguage);

    return (
        <Card
            className={cn(
                "w-full rounded-xl shadow-md p-4 flex flex-col h-full gap-4",
                className
            )}
        >
            <CardHeader className="p-0 relative">
                <div className="absolute top-4 size-19 left-0 rounded-full bg-gray-100 dark:bg-gray-800 border p-3 flex items-center justify-center flex-shrink-0">
                    <span
                        className="flex w-full h-full [&>svg]:w-full [&>svg]:h-full text-2xl items-center justify-center"
                        aria-hidden="true"
                    >
                        <img
                            src={course.iconUrl}
                            className="w-full h-full dark:[filter:drop-shadow(0_0_1px_white)_drop-shadow(0_0_1px_white)]"
                        />
                    </span>
                </div>

                <div className="flex flex-col items-end gap-3 text-sm text-muted-foreground">
                    <CategoryBadge courseCategory={category} />
                    <div className="pr-2 flex items-end flex-col gap-2">
                        <time
                            className="flex items-center gap-2"
                            dateTime={date}
                        >
                            <span>{formattedDate}</span>
                            <CalendarIcon
                                className="size-4"
                                aria-hidden="true"
                            />
                        </time>
                        <div className="flex items-center gap-2">
                            <span>{duration}h</span>
                            <Clock className="size-4" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                <CardTitle className="text-lg font-semibold leading-tight mt-4">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0 flex-1">
                <CardDescription className="text-sm text-muted-foreground">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};
