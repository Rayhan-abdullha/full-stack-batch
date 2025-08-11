// setTimeout(() => {
//     console.log("set timeout")
// }, 0);
//////////////////////////////////
// const button = document.querySelector('button')
// button.addEventListener('click', e => {
//     console.log('clicked')
// })
// console.log('outside')
// let sum = 0
// for (let i = 0; i < 10000000; i++) {
//     sum += i
// }
// console.log(sum)

//////////////////////////////
// function print(arr, cb) {
//     cb(arr)
// }

// print([2, 3], (arr) => {
//        button.addEventListener('click', () => {
//     console.log('clicked')
// })
//     })

////////////////////////////////

// const arr = [33, 2, 55, 30, 1, 7]
// function filter(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log('inside for loop')
//         if (fn(element)) {
//             console.log(element)
//         }
//     }
// }
// filter(arr, (value) => {
//     console.log('inside callback')
//     return value % 2 === 0
// })


///////////////////
function callback(fn, fn1, fn2, fn3, fn4) {
    fn1(() => {
        fn3(() => {
            fn4(() => {
                
            })
        })
    })

}

callback(
  (next) => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    console.log(sum);
    next();
  },
  (next) => {
    console.log('Just simple');
    next();
  },
  (next) => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    console.log(sum);
    next();
  },
  (next) => {
    console.log('simple2');
  },
  () => {
    console.log('simple3');
  }
);
