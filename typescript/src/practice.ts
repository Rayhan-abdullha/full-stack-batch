// interface Obj {
//     [sym: symbol]: number
// }

// const a = Symbol('a')
// const obj: Obj = {}
// obj[a] = 123
// console.log(obj[a])

/////////
// const arr: Array<number> = [
//     3
// ]
// console.log(arr)

// const arr: readonly string[] = ['q', '3']
// console.log(arr)
// arr.forEach(item => {
//     if (typeof item === 'number') {
//         return item * 10
//     }
// })
// console.log('after iteration')
// console.log(arr)


// const arr: ReadonlyArray<string> = ['a']

// types //
// type X = {
//     a: number;
//     b?: number
// }
// const x = ({ a, b = 10 }: X) => a + b;
// console.log(x({a: 3, b: 4}))


// readonly
// interface A {
//     readonly a: number
// }
// type X = {
//     readonly x: number
// }
// type J = Readonly<{
//     a: number,
//     b: number
//     c: string
// }>
// const obj: J = {
//     a: 1,
//     b: 2,
//     c: 'coder'
// }
// obj.a = 10
// console.log(obj)

// type K = {
//     readonly [index: number]: string;
// };
// const arr: K = ['hello']
// console.log(arr)
// const obj1: K = {
//     3: 'c'
// }
// console.log(obj1)

// type T = {
//     [index: number | string]: string | number
// }
// const O: T = {
//     a: 'coder',
//     1: 1
// }
// console.log(O['a'])

// Extending Types ///
// interface X {
//     a: string;
// }
// interface Y extends X {
//     b: string;
// }
// // const a: Y = {}
// interface A {
//     a: string;
// }
// interface B {
//     b: string;
// }
// interface Y extends A, B {
//     y: string;
// }
// const C: Y = { a: '1', b: '2', y: '3'}
// // console.log(C.a)

// type X = 'a' | 'b'
// const o: {a: 'a'} = {
//     a: 'a'
// }

// const fn = (x: X) => `X = ${x}`

// console.log(fn(o.a))

// let a: string | undefined

// if (typeof a === 'string') {
//     console.log('a is string')
// } else {
//     console.log('a is a diff type')
// }


// Enums //

// enum Color {
//     Red = '#ff0000',
//     Green = '#00ff00',
//     Blue = '#0000ff',
// }
// const enum Language {
//     English = 'EN',
//     Spanish = English 
// }
// console.log(Language.Spanish);