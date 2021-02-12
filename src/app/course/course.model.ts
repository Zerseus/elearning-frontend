import { CourseContent } from "./coursecontent.model";

export class Course {
    id?: number;
    course_requirement?: string;
    what_you_learn?: string;
    title?: string;
    description?: string;
    rating?: DoubleRange;
    published?: boolean;
    image_url?: string;
    instructor_id?: number;
    courseContent?: CourseContent;
  }