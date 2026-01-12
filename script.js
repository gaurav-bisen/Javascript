const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Cannot divide by zero" : a / b;

function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(10, 5, add));      // 15
console.log(calculator(10, 5, subtract)); // 5
console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, divide));   // 2
