// print only name using prompt with basic calculation in js.

let name = prompt("Enter your name: ");
alert(`Hello...${name}...!`);

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let operator = prompt("Enter the operator (+, -, *, /, %):");
let result = 0;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        console.log("Invalid operator");
        break;
}

alert(result.toFixed(2));
