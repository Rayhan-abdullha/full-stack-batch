import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors'
import seeds from '../seeds';
import mongoose from 'mongoose'
import studentRouter from './modules/student/student.route';
const app = express();

app.use(express.json());
app.use(cors())
app.use(studentRouter)

export default app;