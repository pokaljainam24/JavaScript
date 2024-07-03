// Day-03

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// Declare variables and assign values
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2024;

// Use the typeof operator to check data types
console.log("firstName:", typeof firstName); // string
console.log("lastName:", typeof lastName); // string
console.log("country:", typeof country); // string
console.log("city:", typeof city); // string
console.log("age:", typeof age); // number
console.log("isMarried:", typeof isMarried); // boolean
console.log("year:", typeof year); // number


// 2. Check if type of '10' is equal to 10

let a=10;
let b='10';
console.log(typeof a,b); // number 10
console.log(typeof b);   // string

// 3. Check if parseInt('9.8') is equal to 10

let x='9.8';
console.log(parseInt(x)); // 9

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3
//    2. 4 >= 3
//    3. 4 < 3
//    4. 4 <= 3
//    5. 4 == 4
//    6. 4 === 4
//    7. 4 != 4
//    8. 4 !== 4
//    9. 4 != '4'
//    10. 4 == '4'
//    11. 4 === '4'
//    12. Find the length of python and jargon and make a falsy comparison statement.

let y = 4 > 3; // true
let z = 4 >= 3; //true
let w = 4 > 3;  //true
let v = 4 <= 3; //false
let j = 4 == 4; //true
let k = 4 === 4; //true
let l = 4 != 4;  //false
let m = 4 !== 4; //false
let n = 4 != '4'; //false
let o = 4 == '4'; //true
let p = 4 === '4'; //false
let python = 'python'; //'python'
let jargon = 'jargon'; //'jargon'
console.log(y,z,w,v,j,k,l,m,n,o,p,python,jargon);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12
//    2. 4 > 3 && 10 > 12
//    3. 4 > 3 || 10 < 12
//    4. 4 > 3 || 10 > 12
//    5. !(4 > 3)
//    6. !(4 < 3)
//    7. !(false)
//    8. !(4 > 3 && 10 < 12)
//    9. !(4 > 3 && 10 > 12)
//    10. !(4 === '4')
//    11. There is no 'on' in both dragon and python
