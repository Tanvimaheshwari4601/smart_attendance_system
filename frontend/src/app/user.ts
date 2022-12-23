export class User {
  id: number;
  name: string;
  emailid: string;
  role: string;
  password: string;
  rollno?: string;
  department?: string;
  year?: string;
  sem?: string;
  departmentLabel? : string;
  yearLabel? : string;
  semLabel? : string;
}

export class Lecture {
  id: number;
  subject: string;
  date: Date;
  status: string;
  studentId : number;
}
