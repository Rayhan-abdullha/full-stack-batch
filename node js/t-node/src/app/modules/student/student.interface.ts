
export type Student = {
    id: string,
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    email: string,
    password: string,
    gender: "male" | "female",
}