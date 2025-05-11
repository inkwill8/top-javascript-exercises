function generator(n) {
	if (n < 2) {
	return n;
}
	return generator(n - 1) + generator(n - 2);
};
console.log(generator(10));
