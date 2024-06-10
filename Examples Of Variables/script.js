//--------------Task 1: Variable Hoisting

// console.log(a); //undefine
// var a = 10;
// console.log(a); //ans-10


// console.log(b); //cannot access 'b' before initialization
// let b = 20; becase this is block scope
// console.log(b); //ans-20 can be access 'b' after initialization


// console.log(c); //cannot access 'c' before initialization
// const c = 30; becase this is block scope
// console.log(c); ////ans-20 can be access 'c' after initialization


//---------------Task 2: Block Scope with let and const

// {
//     var x = 10; // var is global scope, can be access the outside of function
//     let y = 20; console.log(y); // let and cont are local scop, can access be inside the function
//     const z = 30; console.log(z);
// }
// console.log(x);
// console.log(y); // cannot acceess the outside function throw the ReferenceError: y is not defined
// console.log(z); // cannot acceess the outside function throw the ReferenceError: z is not defined

     
//---------------Task 3: Redeclaring Variables

// console.log(a) // undefine
// var a = 1; // value assing
// console.log(a)
// var a = 2; // value assing
// console.log(a)

// let b = 3; // SyntaxError: Identifier 'b' has already been declared
// let b = 4; 

// const c = 5; // SyntaxError: Identifier 'b' has already been declared
// const c = 6;


//---------------Task 4: Temporal Dead Zone

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;
// console.log(x); // Can be  access 'x' after initialization


//---------------Task 5: Variable Scope in Global Context

// console.log(a); // undefine
// var a = 1;
// console.log(a); // value assing
// {
//     var a = 2;
// }      
// console.log(a); // value assing overlap

//----------------Task 6: Operator Precedence

// console.log(result1); //ReferenceError: Cannot access 'result1' before initialization
// let result1 = 10 + 5 * 2;
// let result2 = (10 + 5) * 2;
// let result3 = 10 / 2 * 5;
// let result4 = 10 * (2 + 5) - 3;


// console.log(result1); //ans - 20, explanation - * has a greater precedence than + 
// console.log(result2); //ans - 30, explanation - () has a greater precedence than *
// console.log(result3); //ans - 25, explanation - / has a greater precedence than *
// console.log(result4); //ans - 67, explanation - (), *, - is order of operator precedence

//----------------Task 7: Comparison Operators

// console.log(5 == '5'); //true // equality operator converts '5' to 5, in technical terms such process is called coercion
// console.log(5 === '5'); //false // Strict equality operator does not convert '5' to 5
// console.log(null == undefined); //true // equality operator converts both null and undefined as equal
// console.log(null === undefined); //false // Strict equality operator does not convert null and undefined as same
// console.log(NaN == NaN); //false // nan is not equal to anything, not even itself. it is not possible to convert the two values as equal
// console.log(NaN === NaN); //false // NaN is not equal to anything

