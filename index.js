// Import stylesheets
import './style.css';

import './object.js';
import './array.js';
import './function.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>
<ul>

  <li>
    Variables, Values, Types (number, string, boolean, object, null, undefined)
  </li>
  <li>
     Expressions, Operators, Statements (literals, conditions, loops)
  </>
  <li>Objects (create, manage properties, built-in methods, hash data structure, property descriptors)</li>
  <li>
    [array.js]: Arrays (create, indexes, length, modification, built-in methods: sorting, filtering, search, iterating)
  </li>
  <li>
    [function.js]: Functions (create, invoke)
  </li>
  <li>
    ES2015 Basics (const, let, arrow functions, default parameters, spread operator, destruction, string templates, for..of loop)</li>

</ul>`;