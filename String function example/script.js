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

// Get the number of units from the user
let units = prompt("Enter the number of electricity units: ") ;

// Initialize the total bill
let totalBill = 0.0;

// Calculate the bill
if (units <= 50) {
  totalBill = units * 0.50;
} else if (units <= 150) {
  totalBill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
  totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
  totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

// Add a 20% surcharge to the bill
totalBill *= 1.20;

// Print the total bill
alert("The total electricity bill is: Rs. " + totalBill.toFixed(2));

