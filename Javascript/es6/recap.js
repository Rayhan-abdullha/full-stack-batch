// const arr = [1, 2, 3, 4, 5, 6]

// const sum = arr.reduce((acc, curr) => {
//     return acc += curr
// }, 0)
// console.log(sum)


// let person = {
//   name: 'John',
//   age: 25,
// };

// // add the ssn property
// person.ssn = '123-45-6789';

// // change the name
// person.name = 'John Doe';

// // delete the age property
// delete person.age;


// console.log(person);

let person = {
  name: 'John',
  age: 25,
};

let member = person;

member.age = 26;

console.log(person);
console.log(member);