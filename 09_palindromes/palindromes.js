const palindromes = function (string) {
console.log(string);
	let noPunc = string.replace(/[!#$%&()*+,-./:;<=>?@[\\\]^_{|}~]/g, '');
console.log(noPunc);
	let noSpaces = noPunc.replaceAll(' ', '');
console.log(noSpaces);
	let standardized = noSpaces.toLowerCase();
console.log(standardized);
	let split = standardized.split('');
console.log(split);
	let arrayString = split.reverse();
console.log(arrayString);
	let pureString = arrayString.join('');
console.log(pureString);

 return	standardized == pureString ? true : false;
};


// Do not edit below this line
module.exports = palindromes;
