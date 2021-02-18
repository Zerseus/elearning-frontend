import { Course } from "../course/course.model";

export class Instructor {
    id?: any;
    sub?: string;
    fname?: string;
    lname?: string;
    address?: string;
    phone?: string;
    imageUrl?: string;
    course?: Array<Course>;
  }