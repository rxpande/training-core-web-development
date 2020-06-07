/**
 * ES2015 Intermediate 
 * (Object keys/values, calculated props, getter/setter, Symbol, Set, Map, WeakSet, WeakMap)
 */

const pattern = {
    name: 'abc',
    get() {
        return this.name
    },
    set( value ) {
        this.myname = value;
    }
};

const obj = new Object(pattern);
console.log(obj);