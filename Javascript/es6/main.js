let x = 10;
x = 20;

const y = 30;
// y = 40; // Error: Assignment to constant variable

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

const arr = [1, 2, 3];
const [a, b] = arr;

const person = { name1: 'Bob', age: 25 };
const { name1, age } = person;

// Spread
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];

// Rest
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}


const name2 = 'Eve';
const age2 = 28;

const user = { name2, age2 }; // same as { name: name, age: age }


const prop = 'score';

const obj1 = {
  [prop]: 100
};
console.log(obj1)

const obj = {
  greet() {
    return 'Hello!';
  }
};
