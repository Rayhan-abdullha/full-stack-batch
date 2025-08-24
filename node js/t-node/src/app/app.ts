import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors'
import seeds from '../seeds';
import mongoose from 'mongoose'
import studentRouter from './modules/student/student.route';
import errorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFoundError';
const app = express();

app.use(express.json());
app.use(cors())
app.use(studentRouter)
app.use(notFound)
app.use(errorHandler);

export default app;