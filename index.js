// Import stylesheets
import './style.css';

import './variables.js';
import './expression.js';
import './object.js';
import './array.js';
import './function.js';
import './es6-basic.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Done : [Basic] Core JavaScript</h1>
<ul>

  <li>
    [variables.js]: Variables, Values, Types (number, string, boolean, object, null, undefined)
  </li>
  <li>
     [expression.js]: Expressions, Operators, Statements (literals, conditions, loops)
  </>
  <li>[object.js]: Objects (create, manage properties, built-in methods, hash data structure, property descriptors)</li>
  <li>
    [array.js]: Arrays (create, indexes, length, modification, built-in methods: sorting, filtering, search, iterating)
  </li>
  <li>
    [function.js]: Functions (create, invoke)
  </li>
  <li>
    [es6-basic.js]: ES2015 Basics (const, let, arrow functions, default parameters, spread operator, destruction, string templates, for..of loop)</li>

</ul>`;