import { Schema, model, connect } from 'mongoose'
import { Student } from './student.interface'

const studentSchema = new Schema<Student>({
    id: { type: String },
    email: { type: String, unique: true, required: true },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    name: {
        firstName: {type: String, required: true},
        middleName: {type: String},
        lastName: {type: String, required: true},
    }
})
const StudentModel = model<Student>('Student', studentSchema);
export default StudentModel