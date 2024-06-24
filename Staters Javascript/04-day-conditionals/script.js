// # 📔 Day 4

// ## Conditionals

// Conditional statements are used for  make decisions based on different conditions.
// By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

// - Conditional execution: a block of one or more statements will be executed if a certain expression is true
// - Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover _if_, _else_ , _else if_ statements. The comparison and logical operators we learned in the previous sections will be useful in here.

// Conditions can be implementing using the following ways:

// - if
// - if else
// - if else if else
// - switch
// - ternary operator

// ### Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

// const age = prompt("Enter your age: ");
// let yearsLeft = 18 - age;
// if (age >= 18){
//     console.log("you are old enough to drive.");
// }else{
//     console.log('you are left with years to drive.');
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```

// let myAge = 30;
// let yourAge = prompt("Enter your age: ");
// if (myAge > yourAge){
//     console.log('I am older than you.');
// }else if (myAge < yourAge){
//     console.log('you are older than me.');
// }else {
//     console.log('we are the same age');
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
//       let a = 4
//       let b = 3
//     ```

//     ```sh
//       4 is greater than 3
//     ``

// let a = 4;
// let b = 3;

// if(a<b){
//     console.log('a is grater than b');
// }else{
//     console.log('a is less than b');
// }

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number.
//     ```

// const num = prompt("Enter a number: "); // open dialog box and enter the number

// if (num % 2 === 0) //The condition num % 2 === 0 checks whether the remainder of dividing num by 2 is 0.{ // chech the number is even or odd 
//     console.log('num is even number');
// }else{
//     console.log('num is odd number.');
// }




// ### Exercises: Level 2

// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

// const score = prompt("Enter the student's score: ");

// if (score < 0 || score > 100) {
//   alert("Invalid score. Please enter a score between 0 and 100.");
// } else if (score >= 80) {
//   alert(`Grade: A`);
// } else if (score >= 70) {
//   alert(`Grade: B`);
// } else if (score >= 60) {
//   alert(`Grade: C`);
// } else if (score >= 50) {
//   alert(`Grade: D`);
// } else {
//   alert(`Grade: F`);
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

// const month = prompt("Enter the month: ").toLowerCase();

// if (month === "september" || month === "october" || month === "november") {
//     alert("The season is Autumn.");
// } else if (month === "december" || month === "january" || month === "february") {
//     alert("The season is Winter.");
// } else if (month === "march" || month === "april" || month === "may") {
//     alert("The season is Spring.");
// } else if (month === "june" || month === "july" || month === "august") {
//     alert("The season is Summer.");
// } else {
//     alert("Invalid month. Please enter a valid month.");
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
//   ```

// const day = prompt("What is the day today? ").toLowerCase();

// if (day === "saturday" || day === "sunday") {
//     alert(`${day} is a weekend.`);
// } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
//     alert(`${day} is a working day.`);
// } else {
//     alert("Invalid day. Please enter a valid day of the week.");
// }





// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```

// const month = prompt("Enter the month (e.g. January, February, etc.): ").toLowerCase();
// const year = prompt("Enter the year: ");

// let daysInMonth;

// if (month === "february") {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         daysInMonth = 29; // leap year
//     } else {
//         daysInMonth = 28;
//     }
// } else if (month === "april" || month === "june" || month === "september" || month === "november") {
//     daysInMonth = 30;
// } else if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
//     daysInMonth = 31;
// } else {
//     alert("Invalid month. Please enter a valid month.");
// }

// alert(`There are ${daysInMonth} days in ${month} ${year}.`);


// 2. Write a program which tells the number of days in a month, now consider leap year.

// const month = prompt("Enter the month (e.g. January, February, etc.): ");
// const year = parseInt(prompt("Enter the year: "));

// if (month === "February") {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         alert(`There are 29 days in month/year.`);
//     } else {
//         alert(`There are 28 days in month/year.`);
//     }
// } else if (month === "April" || month === "June" || month === "September" || month === "November") {
//     alert(`There are 30 days in month/year.`);
// } else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December"){
//     alert(`There are 31 days in month/year.`);
// } else {
//     alert("Invalid month");
// }
