const obj = {
    name: 'coder',
    age: 28
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
for (const key in obj) {
    console.log(obj[key])
}

const student = [
    {
    name: 'rayhan',
    age: 28,
    email: 'rayhan@gmail.com',
    isSingle: true,
    friends: ['Nazim', 'Kamrul'],
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
    }
    },
    {
    name: 'kamrul',
    age: 29,
    email: 'kamrul2@gmail.com',
    isSingle: true,
    friends: ['sohel', 'abier'],
    car: {
        brand: 'tesla',
        price: 77000000,
        made: 2024,
    }
}
]
// console.log(student)