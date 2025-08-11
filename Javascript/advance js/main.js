// const arr = ['rayhan', 'kamrul', 'nazim']
// const [first, ...a] = arr
// console.log(a)

// const person = {
//     name: 'leo khan',
//     age: 35,
// }
// const { name, age } = person
// console.log(name, age)


///////////////
const arr = [1, 2, 3, 4]
const clone = [...arr]
clone.push(1000)
console.log('arr', arr)
console.log('clone', clone)


const obj = {
    name: 'rayhan',
    email: 'rayhan@gmail.com',
    address: {
        dist: 'bhola',
    }
}
// const cloneObj = obj
// cloneObj.name = 'kamrul'
// console.log('obj', obj)
// console.log('clone', cloneObj)

// const cloneObj1 = obj.address
// cloneObj1.dist = 'Comilla'
// console.log('clone', cloneObj1)
// console.log(obj)

// const cloneObj2 = { ...obj }
// cloneObj2.name = 'messi'
// console.log(obj)
// console.log('clone', cloneObj2)






