
// function add(a: number, b: number) {
//     return a + b
// }

// console.log(add(3, 3))

enum Employees {
    DEVELOPER = "DEVELOPER",
    MANAGER = "MANAGER",
    HR = "HR"
}
const employees: {
    id: number;
    name: string;
    role: Employees
}[] = []

employees.push({id: 1, name: 'rayhan', role: Employees.DEVELOPER})
employees.push({id: 2, name: 'nazim', role: Employees.MANAGER})
employees.push({ id: 3, name: 'kamrul', role: Employees.HR })

function findById(id: number): {
    id: number,
    name: string,
    role: Employees
} {
    const user = employees.find(item => item.id === id)
    if (!user) throw new Error('User is not found')
    return user
}
// console.log(findById(3))
// console.log(findById(2))