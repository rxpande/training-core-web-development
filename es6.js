/**
 * ES2015 Intermediate 
 * ,Symbol, Set, Map, WeakSet, WeakMap)
 */

//getter/setter
const person = {
  lang : "",
  firstName: "John",
  lastName : "Doe",
  get language() {
    return this.lang;
  },
  set language(lang) {
    this.lang = lang;
  }
};

console.log(person);
person.language = 'en';
console.log(person);

//Object keys/values, 
const data = {key: 'value'};
for (let [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
}

//calculated props
function objectify (key, value) {
  let obj = {}
  obj[key] = value
  return obj
}

console.log( objectify('name', 'Tyler') ); // { name: 'Tyler' }