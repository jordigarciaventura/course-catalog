import { CalendarIcon, Clock } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Course } from "@/types";
import { CategoryBadge } from "@/components/CategoryBadge";
import { cn } from "@/lib/utils";
import { useCurrentLanguage } from "@/hooks/useLanguage";

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

    return (
        <Card
            className={cn(
                "w-full rounded-xl shadow-md p-4 flex flex-col",
                className
            )}
        >
            <CardHeader className="p-0">
                <CategoryBadge courseCategory={category} />

                <div className="flex gap-4 items-center pt-4 pb-2">
                    <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3 size-16 flex items-center justify-center flex-shrink-0">
                        <span
                            className="flex size-12 [&>svg]:w-full [&>svg]:h-full text-2xl items-center justify-center"
                            aria-hidden="true"
                        >
                            <img
                                src={course.iconUrl}
                                className="w-full h-full"
                            />
                        </span>
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight">
                        {title}
                    </CardTitle>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time className="flex items-center" dateTime={date}>
                        <CalendarIcon
                            className="size-4 mr-2"
                            aria-hidden="true"
                        />
                        <span>{date}</span>
                    </time>
                    <div className="flex items-center">
                        <Clock className="size-4 mr-2" aria-hidden="true" />
                        <span>{duration}h</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-0 flex-1">
                <CardDescription className="text-sm text-muted-foreground">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};
