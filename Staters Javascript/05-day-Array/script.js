// # 📔 Day 5

// ## Array

// An array is a collection of elements of the same data type stored in contiguous memory Location.

// In JavaScript, arrays are zero-indexed, meaning the first element is at index 0.

// Arrays can be used to store a collection of data, and they provide a way to access and
// manipulate the data using an index or key.

let a = ['a,b,c,d,e'];
let b = [1, 2, 3, 4, 5];
let c = [true, false, true, false];
console.log(typeof a,b,c);

// Output: a=object b=number c=boolean

const frind = 'Jainam';
const frind1 = 'Vraj';
const frind2 = 'Romil';

const frinds = ['Jainam', 'Vraj', 'Romil'];
console.log(frinds);

const years = new Array(2000, 2003, 2004, 2005);

console.log(frinds[0]);
console.log(frinds[2]);

console.log(frinds.length);
console.log(frinds[frinds.length - 1]);

frinds[1] = 'Chirru';
frinds[2] = 'Kritu';
console.log(frinds);