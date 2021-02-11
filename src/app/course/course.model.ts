import { CourseContent } from "./course-content.model";

export class Course {
    id?: any;
    course_Title? : string;
    course_Description?: string;
    published?: boolean;
    course_Rating?: number;
    What_you_Learn?: string;
    Course_Requirement?: string;
    image_Url?: string;
    courseContent?: Array<CourseContent>;
  }