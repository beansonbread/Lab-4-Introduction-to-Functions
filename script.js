//declaring and invoking functions
function greet(name = 'friend') {
    return `hello ${name}`;
}

console.log(greet());
console.log(greet('john'));

//working with parameters and returning values
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2,3));

//function scope
let x = 12;

function changeValue() {
    let x = 15;
    console.log(x);
}

changeValue()
console.log(x);

//closures
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let counter = outerFunction();
console.log(counter());
console.log(counter());