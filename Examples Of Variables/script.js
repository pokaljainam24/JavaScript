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
// // console.log(a); // value assing
// {
//     var a = 2;
// }      
// console.log(a); // value assing overlap