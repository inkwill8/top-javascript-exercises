const add = function(a,b) {
	let sum = a + b;
	return sum;
};

const subtract = function(a,b) {
	let sum = a - b;
	return sum;
};

const sum = function(numbers) {
	let result = 0;
	for (let i = 0; i < numbers.length; i++) {
		result += numbers[i];
}
	return result;


};

const multiply = function(numbers) {
	let result = 1;
	for (let i = 0; i < numbers.length; i++) {
		result *= numbers[i];
}
	return result;

};

const power = function(base, exp) {
	let result = 0;
	result = base ** exp;
	
	return result;
};

const factorial = function() {
	
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
