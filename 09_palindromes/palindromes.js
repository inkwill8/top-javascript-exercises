const palindromes = function (string) {
	const pureString = string.

	let filtered = string.split('').filter(char => char.replace(/[!#$%&()*+,-./:;<=>?@[\\\]^_{|}~]/g, ''));
console.log(filtered);
	let newString = filtered.reverse().join('');
console.log(newString);

// return	string == newString ? true : false;
	let result = pureString == newString ? true : false;
console.log(result);
};

 palindromes('racecar!');

// Do not edit below this line
// module.exports = palindromes;
