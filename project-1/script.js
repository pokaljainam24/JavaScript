// Que-1 Javascript program to swape 2 variables.
// Que-2 Javascript program find to square.
// Que-3 Find the therd angle of a right triangle if to others angle are given.


// Que-1 Javascript program to swape 2 variables.

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5

let j = 5;
let k = 8;
j = j + k;
k = j - k;
j = j - k;

console.log(j,k); // j: 8, k: 5



// Que-2 Javascript program find to square.

let x = 24;
   
console.log(x*x); // x: 576



// Que-3 Find the therd angle of a right triangle if to others angle are given.

let total,c,bside=30,aside=90;
c=aside+bside;

total = 180-c;

console.log(total); tatal: 60

// Que-3  Grade Classifier Implement a program that 
// assigns a grade (grade) based on a numerical score (score). 
// If score is 90 or above, print "Grade A". If score is between 
// 80 and 89 (inclusive), print "Grade B". If score is between 
// 70 and 79 (inclusive), print "Grade C". If score is between 
// 60 and 69 (inclusive), print "Grade D". For scores below 60, 
// print "Grade F".

function getGrade(score) {
    if (score >= 90) {
        return "Grade A";
    } else if (score >= 80) {
        return "Grade B";
    } else if (score >= 70) {
        return "Grade C";
    } else if (score >= 60) {
        return "Grade D";
    } else {
        return "Grade F";
    }
}

let score = 60;
console.log(getGrade(score));  // Output: Grade B




//Q-4 Bill

let units = prompt("Enter the number of electricity units: ") ;

let totalBill = 0.0;

if (units <= 50) {
  totalBill = units * 0.50;
} else if (units <= 150) {
  totalBill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
  totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
  totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

totalBill *= 1.20;

alert("The total electricity bill is: Rs. " + totalBill.toFixed(2));