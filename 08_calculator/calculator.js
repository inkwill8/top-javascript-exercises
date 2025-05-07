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

const factorial = function(number) {
// we need a condition to always return 1 if we are factorializing 0 or 1
		
	let result = number;
	if ( number === 0 || number === 1 ) 
		return 1; 

	while ( number > 1 ) {
	number--;
	result *= number;
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
