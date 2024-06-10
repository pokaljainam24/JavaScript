// let x = 5;
// console.log(x != 6) // true
// console.log(x != 5) // false
// let y = 4;
// console.log(x !== y) // true


// console.log(1 !== 1);
// // Expected output: false

// console.log('hello' !== 'hello');
// // Expected output: false

// console.log('1' !== 1);
// // Expected output: true

// console.log(0 !== false);
// // Expected output: true


// x !== y;

// !(x === y); // x is not define

//-----------------------operator(!==)

// const object1 = {
//     key: "value",
//   };
  
//   const object2 = {
//     key: "value",
//   };
  
//   console.log(object1 !== object2); // true
//   console.log(object1 !== object1); // false


//-----------------------operator(===)

// const object1 = {
//     key: "value",
//   };
  
//   const object2 = {
//     key: "value",
//   };
  
//   console.log(object1 === object2); // false
//   console.log(object1 === object1); // true
  

//------------------------Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula------------------\\

//TOPIC//----BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

//----1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark); //27.309968138370508
// const BMIJohn = massJohn / (heightJohn * heightJohn); //24.194608809993426
// console.log(BMIMark, BMIJohn);

//----2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// if(BMIMark>BMIJohn){
//     console.log(`Mark's BMI --> ${BMIMark} is Higher than John's BMI-->${BMIJohn}.`);
// }
// else 
// {
//     console.log(`John's BMI -->${BMIJohn} is Higher than Mark's BMI ${BMIMark}`);
// }

//ANS:Mark's BMI --> 27.309968138370508 is Higher than John's BMI-->24.194608809993426.