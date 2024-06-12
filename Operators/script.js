// Types of JavaScript Operators:

// 1.Arithmetic Operators
// 2.Assignment Operators
// 3.Comparison Operators
// 4.String Operators
// 5.Logical Operators
// 6.Bitwise Operators
// 7.Ternary Operators
// 8.Type Operators

// 1.Arithmetic Operators

        // +  --> Addition
        // -  --> Subtraction
        // *  --> Multiplication
        // ** --> Exponentiation (ES2016)
        // /  --> Division
        // %  --> Modulus (Division Remainder)
        // ++ --> Increment
        // -- --> Decrement

// 2.Assignment Operators

        // =	--> x = y	x = y
        // +=	--> x += y	x = x + y
        // -=	--> x -= y	x = x - y
        // *=	--> x *= y	x = x * y
        // /=	--> x /= y	x = x / y
        // %=	--> x %= y	x = x % y
        // **=	--> x **= y	x = x ** y

// 3.Comparison Operators

        // ==	--> equal to
        // ===	--> equal value and equal type
        // !=	--> not equal
        // !==	--> not equal value or not equal type
        // >	--> greater than
        // <	--> less than
        // >=	--> greater than or equal to
        // <=	--> less than or equal to
        // ?	--> ternary operator

// 4.Logical Operators

        // &&	--> logical and
        // ||	--> logical or
        // !	--> logical not

// 5.Bitwise Operators
                                                                                
        // &	--> AND	                    5 & 1	    0101 & 0001	    0001	 1
        // |	--> OR	                    5 | 1	    0101 | 0001	    0101	 5
        // ~	--> NOT	                    ~ 5	        ~0101	        1010	 10
        // ^	--> XOR	                    5 ^ 1	    0101 ^ 0001	    0100	 4
        // <<	--> left shift	            5 << 1	    0101 << 1	    1010	 10
        // >>	--> right shift	            5 >> 1	    0101 >> 1	    0010	 2
        // >>>	--> unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	 2


// ------------------------------------------------------------------------------------------------------------------------------------


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

// //----1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark); //27.309968138370508
// const BMIJohn = massJohn / (heightJohn * heightJohn); //24.194608809993426
// console.log(BMIMark, BMIJohn);

// //----2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// if(BMIMark>BMIJohn){
//     console.log(`Mark's BMI --> ${BMIMark} is Higher than John's BMI-->${Math.floor(BMIJohn)}.`);
// }
// else 
// {
//     console.log(`John's BMI -->${Math.floor(BMIJohn)} is Higher than Mark's BMI ${BMIMark}`);
// }

//-----ANS: Mark's BMI --> 27.309968138370508 is Higher than John's BMI-->24.194608809993426.

// -------------------------------------------------------------------

//---- &&(logical and)

// let x=4;
// console.log((x<5)&&(x>3));
// console.log((x<5)&&(x>8));

// //---- ||(logical OR)

// let y=4;
// console.log((y>5)||(y>3));
// console.log((y>4)||(y<0));

