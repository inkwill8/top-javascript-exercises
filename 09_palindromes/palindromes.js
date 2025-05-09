const palindromes = function (string) {
	let newString = string.split('').reverse().join('');

return	string == newString ? true : false;
};

// palindromes('rose');

// Do not edit below this line
module.exports = palindromes;
