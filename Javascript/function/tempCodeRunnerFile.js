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