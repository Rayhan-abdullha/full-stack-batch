
import express from 'express'
import { createStudent, getStudents } from './student.controller';
import { validateRequest } from '../../middleware/zodValidation';
import { createStudentZodSchema } from './student.validation';
const router = express.Router()

router.post('/students', validateRequest(createStudentZodSchema), createStudent);
router.get('/students', getStudents);

export default router;