// Que-1 Age Verification Write a program that 
// prompts the user to enter their age (userAge). If the 
// age is 18 or older, print "Welcome, you are eligible!". 
// Otherwise, print "Sorry, you are not eligible!".

// Prompt the user to enter their age
// var userAge = prompt("Please enter your age:");

// // Convert the input to an integer
// userAge = parseInt(userAge, 10);

// // Check if the age is 18 or older
// if (userAge >= 18) {
//     console.log("Welcome, you are eligible!");
// } else {
//     console.log("Sorry, you are not eligible!");
// }


// Que-2 Temperature Alert Create a program that 
// takes a temperature (currentTemp) as input. If 
// currentTemp is above 30 degrees Celsius, print "It's 
// hot outside!". If currentTemp is between 20 and 30 
// degrees Celsius (inclusive), print "It's a pleasant 
// day!". For temperatures below 20 degrees Celsius, 
// print "It's cold outside!".


// function temperatureAlert(currentTemp) {
//     if (currentTemp > 30) {
//         console.log("It's hot outside!");
//     } else if (currentTemp >= 20 && currentTemp <= 30) {
//         console.log("It's a pleasant day!");
//     } else {
//         console.log("It's cold outside!");
//     }
// }

// function getTemperature() {
//     const currentTemp = prompt("Enter the current temperature in Celsius:");
//     temperatureAlert(currentTemp);
// }

// let temp1 = prompt("enter value")

// temp1 = parseInt(temp1)

// if(temp1>20 && temp1<30){
//     console.log("its warm outside")
// }
// else if(temp1<20){
//     console.log("its cold outside")
// }
// else{
//     console.log("be careful its hot outside") 
// }


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


// Que-4  Ticket Pricing Develop a program that prompts 
// the user to enter their age (age). Based on age, determine 
// the ticket price as follows: If age is 12 or younger, print 
// "Child ticket: $10".If age is between 13 and 64 (inclusive), 
// print "Adult ticket: $20".If age is 65 or older, print "Senior 
// ticket: $15".


// let age = prompt("Please enter your age:");

// age = Number(age);

// if (age <= 12) {
//     console.log("Child ticket: $10");
// } else if (age >= 13 && age <= 64) {
//     console.log("Adult ticket: $20");
// } else if (age >= 65) {
//     console.log("Senior ticket: $15");
// } else {
//     console.log("Invalid age entered.");
// }


// Que-5   Day of the Week Write a program that 
// assigns a day (dayOfWeek) based on a numeric input 
// (dayNumber) representing days from 1 (Monday) to 7 
// (Sunday). If dayNumber is 1, print "Monday". If 
// dayNumber is 2, print "Tuesday", and so on up to 7 for 
// "Sunday". If dayNumber is not within this range, print 
// "Invalid day number".


// let dayNumber = prompt("Please enter a day number (1-7):");

// dayNumber = Number(dayNumber);

// let dayOfWeek;

// if (dayNumber === 1) {
//     dayOfWeek = "Monday";
// } else if (dayNumber === 2) {
//     dayOfWeek = "Tuesday";
// } else if (dayNumber === 3) {
//     dayOfWeek = "Wednesday";
// } else if (dayNumber === 4) {
//     dayOfWeek = "Thursday";
// } else if (dayNumber === 5) {
//     dayOfWeek = "Friday";
// } else if (dayNumber === 6) {
//     dayOfWeek = "Saturday";
// } else if (dayNumber === 7) {
//     dayOfWeek = "Sunday";
// } else {
//     dayOfWeek = "Invalid day number";
// }


// console.log(dayOfWeek);
