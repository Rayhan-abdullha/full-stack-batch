import {Schema, model, connect} from 'mongoose'
export type Student = {
    id: string,
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    gender: "male" | "female",
    email: string
}