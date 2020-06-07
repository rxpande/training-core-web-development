// create //  length
let fruits = ['Apple', 'Banana']
console.log(fruits.length)

// indexes
console.log(fruits[1]);

// modification
fruits[0] = 'fig';
console.log(fruits);

/**
 * built-in methods
 */

// sorting
const fruits = fruits.sort();
console.log(fruits);

// search
const fruit = fruits.filter( fruit => fruit === 'fig');
console.log(fruit);

// iterating
fruits.forEach( fruit =>  console.log(fruit));

