function add(a, b) {
    return a + b;
}

let sum = add
function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

// console.log(result);

// ///
let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
    y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);


function cmToIn(length) {
    return length / 2.54;
}

function inToCm(length) {
    return length * 2.54;
}

let show = function() {
    console.log('Anonymous function');
};

show();

(() => setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000)
)()