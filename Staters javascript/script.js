// 1. Declare a variable named challenge and assign it to an initial value.

let challenge = "Initial value";

console.log(challenge);

// 2. Print the string on the browser console using __console.log()__

let Name = "Jainam pokal";
console.log(Name);

// 3. Print the __length__ of the string on the browser console using _console.log()_

let age = "Initial value";
console.log(challenge.length);

// 4. Change all the string characters to capital letters using __toUpperCase()__ method

let challenge2 = "American Country";
let upperCaseChallenge = challenge2.toUpperCase();
console.log(upperCaseChallenge);

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method

let name1 = "CANADA COUNTRY"
let lowerCase = name1.toLowerCase()
console.log(lowerCase);

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method

let challenge3 = "Initial value";
let firstWord = challenge.substring(8); // "Initial"
console.log(firstWord);

// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.

let originalString = "30 Days Of JavaScript";
let slicedString = originalString.slice(5);
console.log(slicedString);

// 8. Check if the string contains a word __Script__ using __includes()__ method

const str = "Your string goes here";
const word = "Script";

if (str.includes(word)) {
  console.log("The string contains the word 'Script'.");
} else {
  console.log("The string does not contain the word 'Script'.");
}



