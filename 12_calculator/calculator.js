const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const sum = function(numbers) {
    return numbers.reduce((sum,number) => result + number,0);
};

const multiply = function(numbers) {
    return numbers.reduce((result,number) => result * number);
};

const power = function(num,power) {
    return Math.pow(num,power);
};

const factorial = function(num) {
	let result = 1;

    for (let i = num; i > 0 ; i--) {
        result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
