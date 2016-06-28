var number = 5;
var counter = 4;

function exponent(num, count) {
	if (count >= 2) {
		var product = num * num;
		while (count > 2) {
			product = product * num;
			count--;
		}
		return product;
	}
	else {
		return num;
	}
}

console.log(exponent(number, counter));
