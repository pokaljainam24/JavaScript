// 1-Print odd numbers from 1 to 15.

let number1 = 1;
let sum1 = 0;
while (number1 <= 15) {
  if (number1 % 2 === 0) {
    sum1 += number1;
    console.log(number1);
  }
  number1++;
}
console.log("sum of odd number:" + sum1);

// 2- program to find sum of first and last digit of a number. Using while loop

let number = 12345;
let rightnumber = number;
let firstDigit;
let lastDigit = number % 10;

while (number >= 10) {
  number = (number - number%10)/10;
}

firstDigit = number;
let sum2 = firstDigit + lastDigit;

console.log("rightnumber: " +rightnumber);
console.log("firstDigit: " +firstDigit);
console.log("lastDigit: " +lastDigit);
console.log("sum2 of first and last digit: " + sum2);

// 3- program to count number of digits in a number. Using while loop.

let num = 12345;
let count = 0;
let n = num;
while (num > 0) {
    num = Math.floor(num / 10); // we use Math.floor() to get the integer part of the division.
    count++;
}
console.log("Number of digits: " + count);

// 4- Program to Print the Fibonacci Sequence.

const N = 10; 
let fn1 = 0, fn2 = 1, nextFibonacci;

for (let i = 0; i < N; i++) {
  if (i === 0) {
    console.log(fn1);
  } else if (i === 1) {
    console.log(fn2);
  } else {
    nextFibonacci = fn1 + fn2;
    fn1 = fn2;
    fn2 = nextFibonacci;
    console.log(nextFibonacci);
  }
}

// Type-2

let a = 15;
let num1=0, num2=1, sum;
count=1;
while(count<=a){
  console.log(num1);
  sum=num1+num2;
  num1=num2;
  num2=sum;
  count++;
}
console.log(sum);

// 5- JavaScript Program to Find the Palindrome Number or not.

const number2 = prompt('Enter the number of terms: '); 
const str = number2.toString();
const reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(number2 + ' is a palindrome.');
} else {
    console.log(number2 + ' is not a palindrome.');
}