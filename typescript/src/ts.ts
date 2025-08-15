type MathOperation = (a: number, b: number) => number

const add: MathOperation = (a, b) => {
  return a + b
}
console.log(add(3, 4))