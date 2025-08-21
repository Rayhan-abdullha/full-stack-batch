const printLen = <T extends { length: number }>(value: T): void => {
    console.log(value.length);
};

printLen('Hello'); // 5
printLen([1, 2, 3]); // 3
printLen({ length: 10 }); // 10
// printLen(123); // Invalid

function process<T>(value: T): void {
    if (typeof value === 'string') {
        // Value is narrowed down to type 'string'
        console.log(value.length);
    } else if (typeof value === 'number') {
        // Value is narrowed down to type 'number'
        console.log(value.toFixed(2));
    }
}

// process('hello'); // 5
// process(3.14159); // 3.14

////////////////////
function id<T>(x: T): T{
    return x
}
const aId = id('ipcdd')
const bId = id(1234)

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = first([1, 2, 3]);   // number | undefined
const s = first(["a", "b"]);  // string | undefined

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}
console.log(pair(3, 4))