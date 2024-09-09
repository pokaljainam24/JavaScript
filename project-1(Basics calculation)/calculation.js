// print only name using prompt with basic calculation in js.

// let name = prompt("Enter your name: ");
// alert(`Hello...${name}...!`);

// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));

// let operator = prompt("Enter the operator (+, -, *, /, %):");
// let result = 0;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     case "%":
//         result = num1 % num2;
//         break;
//     default:
//         alert("Invalid operator");
//         break;
// }

// alert(result.toFixed(2));


// Type-2

let name1 = prompt("Enter your name: ");
alert(`Hello...${name1}...!`);

let num3 = parseFloat(prompt("Enter the first number:"));
let num4 = parseFloat(prompt("Enter the second number:"));

let operators = prompt("Enter the operator (+, -, *, /, %):");
let results = 0;

if (operators === "+") {
    results = num3 + num4;
} else if (operators === "-") {
    results = num3 - num4;
} else if (operators === "*") {
    results = num3 * num4;
} else if (operators === "/") {
    results = num3 / num4;
} else if (operators === "%") {
    results = num3 % num4;
} else { 
    alert("Invalid operator");
}

alert(results.toFixed(2));