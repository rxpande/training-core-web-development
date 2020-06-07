// create
const person = {
 f_name: '',
 l_name: '',
 fullName: () => {
   return this.f_name + this.l_name;
 }
};

const me = Object.create(person);
me.f_name = 'Rahul';
me.l_name = 'Pande'
const fullName = me.fullName();

console.log(fullName);

// manage properties, 
// built-in methods, 
// hash data structure, 
// property descriptors