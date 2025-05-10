function palindromes(string) {
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

 let result = standardized == pureString ? true : false;
console.log(result);
};

palindromes('A car, a man, a maraca.');
