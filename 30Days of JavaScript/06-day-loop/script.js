// # 📔 Day 6 # //

// ### for Loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['India','Usa','Canada','Uk'];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

// Adding all elements in the array

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Creating a new array based on the existing array

const numbers1 = [1, 2, 3, 8, 9];
const numbers2 = [];
for (let i = 0; i < numbers1.length; i++) {
  numbers2.push(numbers1[i] ** 4);
}
console.log(numbers2);

// ### for of loop

// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// ### Exercises: Level 1

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

let i = 0;
for (i = 0; i <= 10; i++) {
  console.log(i);
}
// while loop
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

i = 10;
for (i = 10; i >= 0; i--) {
  console.log(i);
}
//while loop
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
// do while loop
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0)

// 3. Iterate 0 to n using for loop

// n is a variable which stores a number
let n = 10;
for (i = 0; i <= n; i++) {
  console.log(i);
}

// 4. Write a loop that makes the following pattern using console.log():

for (i = 1; i <= 7; i++) {
  console.log('# '.repeat(i));
}

// 5. Use loop to print the following pattern:

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern

//    ```sh
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000

for (let i = 0; i <= 10; i++) {
  console.log(`${i} = ${i * i} = ${i * i * i}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("Only Even Number: " + i);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log("Only Odd Number: " + i);
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log("Prime Number: " + i);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

//     ```sh
//     The sum of all numbers from 0 to 100 is 5050.
//     ```

let n1 = 100;

for (let i = 0; i <= 100; i++) {
  sum = n1 * (n1 + 1) / 2;
}

console.log("The sum of all numbers from 0 to 100 is:", sum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//     ```sh
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//     ```

let sum1 = 0;
let sum2 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum1 += i;
  } else {
    sum2 += i;
  }
}
console.log("The sum of all evens from 0 to 100 is:", sum1);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//     ```sh
//       [2550, 2500]
//     ```


let sum3 = 0;
let sum4 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  } else {
    sum4 += i;
  }
}
console.log([sum3, sum4]);

// 13. Develop a small script which generate array of 5 random numbers

let number = []
for (let i = 0; i < 5; i++) {
  number.push(Math.floor(Math.random() * i));
}
console.log(number);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let number1 = []
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100);
  if (number1.includes(random)) {
    i--;
  } else {
    number1.push(random);
  }
}

console.log(number1);

// 15. Develop a small script which generate a six characters random id:

//     ```sh
//     5j2khz
//     ```

let randomId = Math.random().toString(36).substring(2, 8);
console.log(randomId);




// ### Exercises: Level 2 ### //

// 1. Develop a small script which generate any number of characters random id:

//     ```sh
//       fe3jo1gl124g
//     ```

//     ```sh
//       xkqci4utda1lmbelpkm03rba
//     ```

const characters = 'fe3jo1gl124g';
const characters1 = 'xkqci4utda1lmbelpkm03rba';

let id = '';
let id2 = '';
for (let i = 0; i < 10; i++) {
  id += characters[Math.floor(Math.random() * characters.length)];
}
for (let i = 0; i < 20; i++) {
  id2 += characters1[Math.floor(Math.random() * characters1.length)];
}
console.log(id);
console.log(id2);

// 2. Write a script which generates a random hexadecimal number.

//     ```sh
//     '#ee33df'
//     ```

let hex = '#';
for (let i = 0; i < 6; i++) {
  hex += Math.floor(Math.random() * 16).toString(16);
}
console.log(hex);

// 3. Write a script which generates a random rgb color number.

//     ```sh
//     rgb(240,180,80)
//     ```

let rgb = 'rgb';
for (let i = 0; i < 3; i++) {

  rgb += Math.floor(Math.random() * 256) + ', ';
}
console.log(rgb.slice(0, -2));

// 4. Using the above countries array, create the following new array.

//     ```sh
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//     ```

let arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let arr2 = [];
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i].toLocaleLowerCase());
}
console.log(arr2);

// 5. Using the above countries array, create an array for countries length'.

//     ```sh
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//     ```

let arr3 = [];
for (let i = 0; i < arr.length; i++) {
  arr3.push(arr[i].length);
}
console.log(arr3);

// 6. Use the countries array to create the following array of arrays:

//     ```sh
//       [
//       ['Albania', 'ALB', 7],
//       ['Bolivia', 'BOL', 7],
//       ['Canada', 'CAN', 6],
//       ['Denmark', 'DEN', 7],
//       ['Ethiopia', 'ETH', 8],
//       ['Finland', 'FIN', 7],
//       ['Germany', 'GER', 7],
//       ['Hungary', 'HUN', 7],
//       ['Ireland', 'IRE', 7],
//       ['Iceland', 'ICE', 7],
//       ['Japan', 'JAP', 5],
//       ['Kenya', 'KEN', 5]
//     ]
//     ```


let arr4 = [];
for (let i = 0; i < arr.length; i++) {
  arr4.push([arr[i], arr[i].substring(0, 3).toUpperCase(), arr[i].length]);
}
console.log(arr4);

// // 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// //     ```sh
// //     ['Finland','Ireland', 'Iceland']
// //     ```

// let countries1 = ["Thai", "Finland", "Switzer", "New Zealand", "Iceland", "Ireland", "Scot", "Pol"];
// let countriesWithLand = countries1.filter(country => country.includes('land'));
// if (countriesWithLand.length > 0) {
//   console.log('countriesWithLand');
// }else{
//   console.log("All these countries are without land");
// }

const countries1 = ["Thai", "Finland", "Switzer", "New Zealand", "Iceland", "Ireland", "Scot", "Pol"];
const countriesWithLand = countries1.filter(country => country.includes('land'));
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these countries are without land");
}

// 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ```sh
//     ['Albania', 'Bolivia','Ethiopia']
//     ```

let countries2 = ['Albania', 'Bolivia','Ethiopia','India','Canada'];
let countriesStartWitha = countries2.filter(country => country.startsWith('A'));
if (countriesStartWitha.length > 0) {
  console.log(countriesStartWitha);
}else{
  console.log('witout ai countries');
}

// 4. Using the above countries array, find the country containing the biggest number of characters.

//       ```sh
//       Ethiopia
//       ```

let countries3 = ['Albania', 'Bolivia','Ethiopia','India','Canada'];
let max = 0;
let maxCountry = '';
for (let i = 0; i < countries3.length; i++) {
  if (countries3[i].length > max) {
    max = countries3[i].length;
    maxCountry = countries3[i];
  }
}
console.log(maxCountry);

