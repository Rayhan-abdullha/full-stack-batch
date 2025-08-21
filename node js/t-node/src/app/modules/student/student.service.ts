import { Student } from "./student.interface";
import StudentModel from "./student.model";

const createStudentDB = async (studentData: Student) => {
    const result = await StudentModel.create(studentData);
    return result;
}

const getStudentsDB = async () => {
    const result = await StudentModel.find({});
    return result as Student[];
}

export { createStudentDB, getStudentsDB };