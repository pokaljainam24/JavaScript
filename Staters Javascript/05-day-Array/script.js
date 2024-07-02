// // # 📔 Day 5

// // ## Array

// // An array is a collection of elements of the same data type stored in contiguous memory Location.

// // In JavaScript, arrays are zero-indexed, meaning the first element is at index 0.

// // Arrays can be used to store a collection of data, and they provide a way to access and
// // manipulate the data using an index or key.

// let a = ['a,b,c,d,e'];
// let b = [1, 2, 3, 4, 5];
// let c = [true, false, true, false];
// console.log(typeof a, b, c);

// // Output: a=object b=number c=boolean

// const frind = 'Jainam';
// const frind1 = 'Vraj';
// const frind2 = 'Romil';

// const frinds = ['Jainam', 'Vraj', 'Romil'];
// console.log(frinds);

// const years = new Array(2000, 2003, 2004, 2005);

// console.log(frinds[0]);
// console.log(frinds[2]);

// console.log(frinds.length);
// console.log(frinds[frinds.length - 1]);

// frinds[1] = 'Chirru';
// frinds[2] = 'Kritu';
// console.log(frinds);

// // ### Creating an array using split

// let Name = 'jainampokal';
// let charInjainampokal = Name.split('');
// console.log(charInjainampokal);

// let companyname = 'facebook, google, microsoft, apple,  ibm, amazon';
// let company = companyname.split(', ');
// console.log(company);

// let fruit = ['banana', 'orange', 'mango', 'lemon']
// let index = fruit.indexOf('banana')

// if (index === -1) {
//     console.log('does not exist in the array')
// } else {
//     console.log('exist in the array')
// }


// // const str = "hello";
// // const chars = str.split("");
// // console.log(chars);


// // check the posotion on fruit name

// // const Names = ['banana', 'orange', 'mango', 'lemon']
// // const lifo = Names.lastIndexOf('lemon')
// // console.log(lifo);

// //* Reverse
// // const Names = ['banana', 'orange', 'mango', 'lemon']
// // const arr = Names.reverse();
// // console.log(arr);

// //* SLice
// // const Names = ['banana', 'orange', 'mango', 'lemon']
// // const arr = Names.slice(2);
// // console.log(arr);

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9)); // 7,8,9

// //* Split
// // const str = "jainampokal";
// // const l = str.split("");
// // console.log(l);



// // #### Concatenating array using concat

// const firstlist = [1, 2, 3, 4, 5];
// const secondlist = [6, 7, 8, 9, 10];
// const thirdlist = firstlist.concat(secondlist).slice(0).reverse();
// console.log(thirdlist);


// // #### Adding item to an array using push

// const arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr); // [1,2,3,4,5,6]

// // ### Array of arrays

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]



//  ### Exercise: Level 1 ###  //

// 1. Declare an _empty_ array;

const arr = [];
console.log(arr); // [[]]

// 2. Declare an array with more than 5 number of elements

const Name = [1, 2, 3, 4, 5];
console.log(Name); // [1,2,3,4,5]

// 3. Find the length of your array

const Array = ["JinamPokal"];
console.log(Array.length); //1

// 4. Get the first item, the middle item and the last item of the array

const Array1 = ["jainam", "rahul", "chirag", "vraj", "kritu"];
console.log(Array1[0]);
console.log(Array1[2]);
console.log(Array1[4]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5

const _mixedDataTypes_ = [1, "jainam", true, 2];
console.log(_mixedDataTypes_.length); //4

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

// 7. Print the array using _console.log()_

console.log(itCompanies); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 8. Print the number of companies in the array

console.log(itCompanies.length); // 7

// 9. Print the first company, middle and last company

const companyname = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(companyname[0]);
console.log(companyname[3]);
console.log(companyname[6]);

// 10. Print out each company

console.log(companyname[0]);

// 11. Change each company name  to uppercase one by one and print them out

const company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
for (let i = 0; i < company.length; i++) {
    console.log(company[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const names = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(names.join(", ")); // Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_

const CompaniesName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(CompaniesName.includes("facebook"));

// 14. Filter out companies which have more than one 'o' without the filter method

const CompaniesName1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const filter = CompaniesName1.filter((company) => company.includes("o"));
console.log(filter);

// 15. Sort the array using _sort()_ method

const sortedCompanies = CompaniesName1.sort();  // Copy the array and sort
console.log("Sorted:", sortedCompanies);

// 16. Reverse the array using _reverse()_ method

const reversecompanies = CompaniesName1.reverse();
console.log("Reverse:", reversecompanies); // (7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

// 17. Slice out the first 3 companies from the array.

const slicecompanies = CompaniesName1.slice(3);
console.log("Slice:", slicecompanies); // (4) ['Google', 'Facebook', 'Apple', 'Amazon']

// 18. Slice out the last 3 companies from the array

const slicecompanies1 = CompaniesName1.slice(-3);
console.log("Slice:", slicecompanies1); // (3) ['Facebook', 'Apple', 'Amazon']

// 19. Slice out the middle IT company or companies from the array

const ComName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const slicecompanies2 = ComName.slice(3, 4);
console.log("Slice:", slicecompanies2); // ['Apple']

// 20. Remove the first IT company from the array

const companiesWithoutFirst = CompaniesName1;
companiesWithoutFirst.shift();
console.log("Without first company:", companiesWithoutFirst);

CompaniesName1.splice(1, 1);
console.log("Without second company:", CompaniesName1);

// 21. Remove the last IT company from the array

const companiesWithoutLast = [...CompaniesName1];
companiesWithoutLast.pop();
console.log("Without last company:", companiesWithoutLast);

// 22. Remove all IT companies

const emptyArray = [];
console.log("All companies removed:", emptyArray);


// ### Exercise: Level 2 ###

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// countries.js

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra"];

console.log("Countries array:", countries);

// web_techs.js

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"];

console.log("Web Techs array:", webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

const sampleString = "Hello! This is a sample string, with some punctuations. We'll count the number of words!";
const cleanString = sampleString.replace(/[^\w\s]/g, '').toLowerCase();
const wordsArray = cleanString.split(/\s+/);
const numberOfWords = wordsArray.length;

console.log("Cleaned string:", cleanString);
console.log("Words array:", wordsArray);
console.log("Number of words:", numberOfWords);

// 3. In the following shopping cart add, remove, edit items

//     ```js
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of you shopping cart if it has not been already added
//    - remove 'Honey' if you are allergic to honey
//    - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic to honey
const allergicToHoney = true;
if (allergicToHoney && shoppingCart.includes('Honey')) {
    const index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log("Updated shopping cart:", shoppingCart);


// ### Exercise: Level 3 ###

// 1. The following is an array of 10 students ages:

//     ```js
//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     ```

//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
    medianAge = ages[mid];
}

// Find the average age
const sumAges = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sumAges / ages.length;

// Find the range of ages
const rangeAges = maxAge - minAge;

// Compare (min - average) and (max - average)
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Range of ages:", rangeAges);
console.log("Difference (min - average):", diffMinAverage);
console.log("Difference (max - average):", diffMaxAverage);


// function division(a, b) {
//     if (a !== 0 && b !== 0) {
//         console.log("division is :" + (a / b));

//         function add() {
//             return a + b;
//         }
//     }
//     console.log("Addition is : " + add(5, 5));
// }

// division(12, 2);

let arr3 = [100,2,5,30,24,42,20,10000,500]
let arr4 = arr3.sort().map(String);
console.log(arr4);

// let arr1 = [3,4,92,32,12,42,1,0]
// let arr2 = arr1.sort().map(String)
// console.log(arr2)

let arr1 = [3,4,92,32,12,42,10000,0]
let arr2 = arr1.sort();
console.log(arr2)

const names6 = ["amazone","google","facebook","oracle"]
const names7 = names6.sort()
console.log(names7)