const fibonacci = function(index) {
	// first off, if the index is 0 or 1 then the outcome is themselves
	// need a function that takes a number and adds the values of the 2 preceding numbers and reassigns that value back
	// we're keeping track of two things: the COUNTER (index) and the VALUE (sum at index)
	let number = parseInt(index);

        if (number === 1 || number === 0) {
        return number;
}	else if (number < 0) {
	return "OOPS";
}
        return fibonacci(number - 1) + fibonacci(number - 2);
};
// console.log(generator(10));

// Do not edit below this line
module.exports = fibonacci;
