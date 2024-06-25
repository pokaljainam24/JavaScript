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

