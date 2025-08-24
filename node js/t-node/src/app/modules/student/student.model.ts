import { Schema, model, connect } from 'mongoose'
import { Student } from './student.interface'

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: {type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
   
}, { timestamps: true})
const StudentModel = model<Student>('Student', studentSchema);
export default StudentModel