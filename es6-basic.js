// Arrow Function
const fruits = ['A', 'B'];
fruits.forEach( f => console.log(f) );

// Default Parameter
function defaultValueFunction( a, b ) {
  // Setting Default value to 20
  if( 'undefined' === typeof(b) ){
    b = 20;
  }

  console.log(a, b);
}

defaultValueFunction(10);

// Spread Operator
let greet = ['Hello', 'World'];
console.log(...greet); // Us

//for..of & String Template
for( const fruit of fruits ) {
  console.log(`Hello ${fruit}`);
}

// Destructuring
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);
