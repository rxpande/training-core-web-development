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

function Archiver() {
  var archive = [];
  var temperature = null;

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!');
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]