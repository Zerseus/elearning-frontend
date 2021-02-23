import { CourseContent } from "./course-content.model";

export class Course {
    course_Id?: number;
    course_Title? : string;
    course_Description?: string;
    published?: boolean;
    course_Rating?: number;
    what_you_Learn?: any;
    course_Requirement?: string;
    image_Url?: string;
    courseContent?: Array<CourseContent>;
  }