/*************************0***************************/ 
// const a = 0;

// if (a){
//     console.log('A is Defined');
// } else {   
//     console.log('A is Undefined');
// }
/****************************************************/ 


/*************************1***************************/ 
// let x = "0";
// let y = false;

// if (x==y){
//     console.log("x and y equal");
// } else {
//     console.log("x and y Not equal");
// }
/*****************************************************/ 


/**************************2**************************/ 
// const birthYear = 1998;

// if (birthYear>=2000){
//     let century = 21;
// } else {
//     let century = 20;
// }

// console.log(century);
/*****************************************************/ 


/**************************3**************************/ 
// let x = 0;
// let y = "0"; // true
// let z = false;


// if (!(x || y) && !z) {
//     console.log("!(x || y) and !z are both true");
// } else {
//     console.log("!(x || y) and !z are not both true");
// }
/*****************************************************/ 

// if("0"){
//     console.log("hello world");
// }

/**************************4**************************/ 
// let x = 0;
// let y = "0";
// let z = false;
// let w = null;

// if (x + y === z || x - y === w) {
//     console.log("Either x + y === z or x - y === w is true");
// } else {
//     console.log("Neither x + y === z nor x - y === w is true");
// }
/*****************************************************/ 


/**************************5**************************/ 
// let x = 0;
// let y = "0";
// let z = false;
// let w = null;

// if ((x && y) || (z && w)) {
//     console.log("(x && y) or (z && w) is true");
// } else {
//     console.log("(x && y) and (z && w) are both false");
// }
// /*****************************************************/ 


// /**************************6**************************/ 
// let a = 1;
// let b = true;
// let c = "1";

// if (a + b === c) {
//     console.log("a + b === c");
// } else {
//     console.log("a + b !== c");
// }
/*****************************************************/ 

// for(i=0; i<=10; i++){
//     console.log(i);
// }

// for(i=10; i>=0; i--){
//     console.log(i);
// }


// for (i=1; i<=5; i++){
//     str = '';
//     for(j=1; j<=i; j++){
//         str += ' * ';
//     }
//     console.log(str);
//     for(j=0; j<=i; j++){
//         str += ' * ';
//     }
//     console.log(str);
// }

// for(j=1; j<=5; j++){
//     str = '';
//     for(i=1; i<=j; i++){
//         str += ' 1';
//         str += ' 2';
//     }
//     console.log(str);
// }

// for (i=5; i>=1; i--){
//     str = '';
//     for(j=1; j<=i; j++){
//         str += ' * ';
//     }
//     console.log(str);
// }

// for (i=1; i<=5; i--){
//     str = '';
//     for(j=5; j>=1; j--){
//         if(j>i){
//             str += '  ';
//         }else{
//             str += ' *';
//         }
//     }
//     console.log(str);
// }


// Do while loop

// let num;
// do {
//   num = parseInt(prompt("Enter a number: "));
//   if (num % 2 === 0) {
//     console.log("You entered an even number.");
//   } else {
//     console.log("You entered an odd number.");
//   }
// } while (num !== -1);

/* Factorial Number */
let num = 6; // 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 // change this to calculate the factorial of a different number
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

console.log(`The factorial of ${num} is ${factorial}`);

// Here's the step-by-step calculation:

// Start with the number 6.
// Multiply 6 by the next smallest integer, which is 5: 6 × 5 = 30
// Multiply 30 by the next smallest integer, which is 4: 30 × 4 = 120
// Multiply 120 by the next smallest integer, which is 3: 120 × 3 = 360
// Multiply 360 by the next smallest integer, which is 2: 360 × 2 = 720
// Finally, multiply 720 by the next smallest integer, which is 1: 720 × 1 = 720




/* count 1to5 using do while */
// let count = 1;

// do{
//   console.log(count);
//   count++;
// }while(count<=5);



// const fruit = [];
// let i = 0;
// while (i < fruit.length) {
//   console.log(fruit[i]);
//   i++;
// }

/* Sum of even number */

// let number = 1;
// let sum = 0;
// while (number <= 20) {
//   if (number % 2 === 0) {
//     sum += number;
//     console.log(number);
//   }
//   number++;
// }
// console.log("sum of even number:" + sum);

//******************************************//Switch Case//*******************************************************//

const day = prompt("Enter The Day: ");

switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tusday':
    console.log('Today is Tusday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  case 'Thursday':
    console.log('Today is Thursday');
    break;
  case 'Friday':
    console.log('Today is Friday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Today is Weekend');
    break;
  default:
    console.log('Invalid day');
}


