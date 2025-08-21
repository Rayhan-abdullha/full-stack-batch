import { Request, Response } from 'express';
import * as studentService from './student.service';
import mongoose from 'mongoose';
const createStudent = async (req: Request, res: Response) => {
    try {
        const studentData = req.body;
        const student = await studentService.createStudentDB(studentData);
        if (!student) {
            return res.status(400).send({ error: 'Failed to create student' });
        }
        return res.status(201).send({ message: 'Student created successfully' });
    } catch (error) {
        return res.status(500).send({ error: 'Failed to create student' });
    }
}
const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await studentService.getStudentsDB();
        return res.status(201).send({ message: 'Student get successfully', students });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ error: error.message });
        }
        if (error instanceof mongoose.Error) {
            return res.status(500).send({ error: 'Database error occurred' });
        }
        return res.status(500).send({ error: 'Failed to create student' });
    }
}

export { createStudent, getStudents }
