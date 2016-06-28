var myArray = [2, 3, 4, 5, 6, 7];

var odds = [];
var evens = [];

function oddsAndEvens(arr) {
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			evens.push(arr[i]);
		}
		else if (arr[i] % 2 !== isNaN) {
			odds.push(arr[i]);
		}
		else {

		}
	}
	return evens;
}

console.log(oddsAndEvens(myArray));
