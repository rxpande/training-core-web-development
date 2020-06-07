// create
const person = {
 f_name: '',
 l_name: '',
 fullName: function() {
  console.log(this.f_name + this.l_name);
 }
};

const me = Object.create(person);
me.f_name = 'Rahul';
me.l_name = 'Pande'
me.fullName();

// manage properties, 
Object.defineProperty(me, 'address', {
  value: 'Pune',
});
console.log(me.address);

// built-in methods
for (let [key, value] of Object.entries(me)) {
  console.log(`${key}: ${value}`);
}

// property descriptors
var pattern = {
  get() {
    return 'I always return this string, ' + 'whatever you have assigned';
  },
  set() {
    this.myname = 'this is my name string';
  }
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty); 
console.log(instance.myname);