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


let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstName + space + lastName + space + country + space + city; // concatenation, merging two string together.
console.log(fullName);

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.

let str2 = '30 Days Of JavaScript';
let character = str2.charAt(15);
console.log(character); // Output: "S"

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__

let str3 = '30 Days Of JavaScript';
let index = 11; // Index of 'J'
let charCode = str3.charCodeAt(index);
console.log('Character code of "J":', charCode); // Output: Character code of "J": 74

// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript

let str4 = '30 Days Of JavaScript';
let position = str4.indexOf('a');
console.log(position); // Output: Position of "a": 4

// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.

let string = '30 Days Of JavaScript';
let lastPosition = string.lastIndexOf('a');
console.log('Last position of "a":', lastPosition); // Output: Last position of "a": 14

// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let position1 = sentence.indexOf('because');
console.log('Position of "because":', position1); // Output: Position of "because": 31

// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let string1 = '30 Days Of JavaScript';
let lastPosition3 = string1.lastIndexOf('a');
console.log('Last position of "a":', lastPosition3);

// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let string2 = '30 Days Of JavaScript';
let lastPosition4 = string2.search('a');
console.log('Last position of "a":', lastPosition4);

// 20. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true

let name12345 = '30 Days Of JavaScript';
console.log(name12345.startsWith('30 D'));

// 21. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true

let character1 = '30 Days Of JavaScript';
console.log(character1.endsWith('JavaScript'));

// 22. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript

let str8 = '30 Days Of JavaScript';
let matches = str8.match(/a/g);
console.log('All occurrences of "a":', matches); // Output: All occurrences of "a": [ 'a', 'a' ]

// 23. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let part1 = '30 Days of';
let part2 = ' JavaScript';
let mergedString = part1.concat(part2);
console.log('Merged String:', mergedString); // Output: Merged String: 30 Days of JavaScript

// 24. Use __repeat()__ method to print 30 Days Of JavaScript 2 times

let str9 = '30 Days Of JavaScript';
let repeatedString = str9.repeat(2);
console.log(repeatedString);

// <!--       _
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~-->


// ### Exercise: Level 2

// 1. Using console.log() print out the following statement:

//     ```sh
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     ```

console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another");

// 2. Using console.log() print out the following quote by Mother Teresa:

//     ```sh
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
//     ```

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" - Mother Teresa");

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = '10';
let num = parseInt(number);

console.log(typeof num);  // outputs: "number"
console.log(num === 10);  // outputs: true

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num1 = parseFloat('9.8');
num = Math.ceil(num);

console.log(num);  // outputs: 10

// Key points:

// Math.ceil() always rounds up to the nearest integer.
// If the input number is already an integer, Math.ceil() returns the same number.
// Math.ceil() works with both positive and negative numbers.


// 5. Check if 'on' is found in both python and jargon

let pythonWord = "python";
let jargonWord = "jargon";

if (pythonWord.includes('on') && jargonWord.includes('on')) {
  console.log("Yes, 'on' is found in both words."); // Yes, 'on' is found in both words.
} else {
  console.log("No, 'on' is not found in both words.");
}

