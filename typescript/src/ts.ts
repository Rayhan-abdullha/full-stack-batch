// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// function createUser(name: string, age: number): User {
//     return {
//         name: name,
//         age: age,
//         skills: ['js']
//     }
// }
// const user = createUser('rayhan', 28)
// console.log(user)

//////////////////////////////
// type ID = string | number
// type User = {
//     id: ID;
//     firstName: string;
//     lastName: string;
//     skills: string[];
//     address: {
//         street: string;
//         city: string;
//         country: string;
//         position: {
//             lat: number,
//             long: number
//         }
//     }
// }
// type Address = User['address']
// type Position = Address['position']
// const printAddress = (address: Address) => {
//     console.log(address)
// }

// const position = (p: Position) => {
//     return p
// }

/////////// JSON /////////////
// type UserData = {
//   id: string;
//   username: string;
//   email: string;
//   passwordHash: string;
//   profile: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender: "male" | "female" | "other";
//     dob: string;
//     bio: string;
//     social: {
//       github: string;
//       linkedin: string;
//       twitter: string | null;
//     };
//     address: {
//       street: string;
//       city: string;
//       postalCode: string;
//       country: string;
//       geo: { lat: number; lng: number };
//     };
//   };
//   roles: string[];
//   settings: {
//     theme: "dark" | "light";
//     language: string;
//     notifications: {
//       email: boolean;
//       sms: boolean;
//       push: boolean;
//     };
//     privacy: {
//       profileVisible: boolean;
//       lastSeen: boolean;
//     };
//   };
// };
// const Data = `{
//   "id": "usr_8237hd921",
//   "username": "rayhan_dev",
//   "email": "rayhan@example.com",
//   "passwordHash": "$2b$10$fj3JKS1d8fjw29AhsJd9m/abDkQW.rJpF5J8FjJQwz",
//   "profile": {
//     "firstName": "Rayhan",
//     "lastName": "Abdullah",
//     "age": 26,
//     "gender": "male",
//     "dob": "1999-03-15",
//     "bio": "Web application developer & problem solver.",
//     "social": {
//       "github": "https://github.com/rayhan",
//       "linkedin": "https://linkedin.com/in/rayhan",
//       "twitter": null
//     },
//     "address": {
//       "street": "32/A Green Road",
//       "city": "Dhaka",
//       "postalCode": "1215",
//       "country": "Bangladesh",
//       "geo": { "lat": 23.8103, "lng": 90.4125 }
//     }
//   },
//   "roles": ["user", "admin"],
//   "settings": {
//     "theme": "dark",
//     "language": "en-US",
//     "notifications": {
//       "email": true,
//       "sms": false,
//       "push": true
//     },
//     "privacy": {
//       "profileVisible": true,
//       "lastSeen": false
//     }
//   }
// }`
// // [as] use case
// const userData = JSON.parse(Data) as UserData
// // console.log(userData.email) // i used as now give suggesions

// // function
// type CB = (arg: string, arg1: string) => void
// function testCB(cb: CB) {
//     cb('test', 'test1')
// }
// // testCB((a, b) => console.log(a, b))


// type A = {
//     a: number,
//     b: string
// }
// // type B = A & {
// //     c: number
// // }
// // const a: B = {
// //     a: 3,
// //     b: 's',
// //     c: 4
// // }
// // console.log(a.a)

// ///// Union /////
// type Admin = {
//     role: 'admin',
//     fullControl: true
// }
// type Manager = {
//     role: 'manager',
// }
// type User = Admin | Manager
// function doSomthing(user: User) {
//     if (user.role === 'admin') {
//         console.log('i have full control ', user.fullControl)
//     } else {
//         console.log(user.role, 'has no full control')
//     }
// }
// doSomthing({role: 'admin', fullControl: true})
// doSomthing({role: 'manager'})

////////////////
// enum X {
//     A,
//     B,
// }
// enum Y {
//     A,
//     B,
//     C,
// }
// const xa: number = X.A; // Valid
// const ya: Y = 0; // Valid
// // console.log(xa)
// // console.log(ya)
// console.log(X.A === Y.A)


// interface X<T> {
//     a: T;
// }

// const obj: X<string> = {
//     a: 'coder'
// }
// console.log(obj)

// type X = {
//     a: string
// }
// const x: X = {
//     a: 'coder',
//     b: 'dev'
// } as X
// console.log(x)


// type X = { a: string };
// type Y = { a: string; b: string };

// let x: X;
// x = { a: 'a', b: 'b' }; // Freshness check: Invalid assignment
// var y: Y;
// y = { a: 'a', bx: 'bx' };


// const x = 'x'; // TypeScript infers the type of x as 'x', a narrower type
// let y: 'y' | 'x' = 'y';
// y = x; // Valid: The type of x is inferred as 'x'
// console.log(y)

// const v: { a: 2 | 10 } = {
//   a: 10
// }
// console.log(v)