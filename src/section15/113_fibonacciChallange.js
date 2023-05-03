function fibonacciGenerator(n) {
	let output = [];
	let sum = 0;
	let sumNumber = 1;
	let functionNumber = -1;

	for (var i = 0; i < n; i++) {
		sum = functionNumber + sumNumber;

		output.push(sum);

		fNum = sumNumber;

		sumNumber = sum;
	}

	return output;
}
