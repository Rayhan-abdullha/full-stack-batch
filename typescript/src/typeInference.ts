let message = 'Hello' // this is type inference
let isActive = true
const arr = [1, 2, 3, 4, 'str']
arr.push(22)

// type inference code
function add(a = 10, b = 20) {
    return a + b
}
// console.log(add())

/////////////////////
const user = {
    name: 'messi',
    age: 38
}
// we can not do that
// user.age = '28'

/////////////////////

function printUser(input: typeof user) {
    return input.name
}
// printUser({name: 'messi', age: 39})

const nums = [1,2,3,4]
const doubleNums = nums.map(n => n * 2)
// console.log(doubleNums)