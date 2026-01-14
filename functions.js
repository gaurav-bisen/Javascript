//arrow function
const add = (a,b) => {
    return a + b;
}
const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return b===0 ? "Cannot divide with 0" : a / b;
}

// console.log(divide(0,6));

//callback
const operation = (a, b, func) => {
    return func(a, b);
}

console.log(operation(12, 0, divide));