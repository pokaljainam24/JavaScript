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

// 9. Split the __string__ into an __array__ using __split()__ method

// Example string
// let text = "Hello, welcome to the world of JavaScript";
// let words = text.split(" ");
// console.log(words);

// // 10. Split the string 30 Days Of JavaScript at the space using __split()__ method

// // Example string
// let text1 = "30 Days Of JavaScript";
// let words2 = text.split(" ");
// console.log(words2);

// // 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.

// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let companiesArray = companies.split(',');
// console.log(companiesArray);

// let text = "30 Days Of JavaScript";
// let words = text.split(" ");
// console.log(words);

// let textWithLimit = "apple,orange,banana,grape";
// let fruits = textWithLimit.split(",", 3);
// console.log(fruits);

let str0 = '   30 Days Of JavaScript   ';

console.log('Original String: "' + str0 + '"');
let trimmedStr = str0.trim();
console.log('Trimmed String: "' + trimmedStr + '"');

// explanation
//  'Trimmed String: "': This part of the code is a static string that will be printed as-is.
// +: This operator concatenates the preceding string with the next part.
// trimmedStr: The variable containing the trimmed string.
// + '"': This concatenates a double-quote character to the end of the trimmed string.

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.

let str1 = "30 days of javascript!";
let newStr = str1.replace("javascript", "python");
console.log(newStr); // Output: "30 days of python"


// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// let fullName = firstName + space + lastName + space + country + space + city; // concatenation, merging two string together.
// console.log(fullName);

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.

let str2 = '30 Days Of JavaScript';
let character = str2.charAt(15);
console.log(character); // Output: "S"

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__




