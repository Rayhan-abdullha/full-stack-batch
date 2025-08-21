
import express from 'express'
import { createStudent, getStudents } from './student.controller';
const router = express.Router()

router.post('/students', createStudent);
router.get('/students', getStudents);

export default router;