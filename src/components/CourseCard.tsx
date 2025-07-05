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
        <Card className="w-full overflow-hidden py-0 rounded-sm">
            <div className="flex h-full w-full p-2">
                <div className="size-18 aspect-square rounded-full overflow-clip">
                    {course.icon}
                </div>
                <div className="w-full">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl">
                                    {title}
                                </CardTitle>
                                <CategoryBadge
                                    courseCategory={category}
                                    currentLanguage={currentLanguage}
                                />
                                <CardDescription className="mt-1">
                                    {description}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <Clock />
                                <span>Duration: {duration}h</span>
                            </div>
                            <div className="flex items-center">
                                <CalendarIcon />
                                <span>Date: {date}</span>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};
