
/**
 * Expressions
 * Any unit of code that can be evaluated to a value is an expression.
 * https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74
 */

// Arithmetic Expressions:

10; // Here 10 is an expression that is evaluated to the numeric value 10 by the JS interpreter
10+13; // This is another expression that is evaluated to produce the numeric value 23


// String Expressions:
'hello';
'hello' + 'world'; // evaluates to the string 'hello world'

// Assignment Expressions:
average = 55;

//Logical Expressions:
10 > 9;   // evaluates to boolean value true
10 < 20;  // evaluates to boolean value false
true;     //evaluates to boolean value true
20===20 && 40===30; // evaluates to true or false based on the values of a and b

/**
 * Statement
 * A statement is an instruction to perform a specific action. 
 * Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. 
 * JavaScript programs are actually a sequence of statements.
 */

// Declaration Statements:
// In the following example, var total is the statement and total = 0 is an assignment expression
var total = 0;

// Conditional Statements:
if (true) {

} else {

} 
   
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));
console.log(getFee(false));

