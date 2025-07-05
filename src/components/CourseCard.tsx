import { CalendarIcon, Clock } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Language, Course } from "@/types";
import { CategoryBadge } from "@/components/CategoryBadge";

interface Props {
    course: Course;
    currentLanguage: Language;
}

export const CourseCard: React.FC<Props> = ({ course, currentLanguage }) => {
    const title = course.title[currentLanguage];
    const description = course.description[currentLanguage];
    const duration = course.duration;
    const date = course.date;
    const category = course.category;

    return (
        <Card className="w-full max-w-sm rounded-xl shadow-md p-4">
            <CardHeader className="p-0">
                <CategoryBadge
                    courseCategory={category}
                    currentLanguage={currentLanguage}
                />

                <div className="flex gap-4 items-center pt-4 pb-2">
                    <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 size-16 flex items-center justify-center flex-shrink-0">
                        <span
                            className="size-12 [&>svg]:w-full [&>svg]:h-full"
                            aria-hidden="true"
                        >
                            {course.icon}
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

            <CardContent className="p-0">
                <CardDescription className="text-sm text-muted-foreground">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};
