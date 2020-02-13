function solve() {
	const splitRegex = /\d{1,8}/g;

	let input = document.getElementById('input');
	let inputValue = input.value;
	let result = document.getElementById('resultOutput');

		let num = inputValue.split('').reduce((acc, n) => acc + +n, 0);

		while (num > 9) {
			num = num.toString().split('').reduce((acc, n) => acc + +n, 0);
		}

		let newStr = inputValue.slice(num, inputValue.length - num);

		let splittedValues = newStr.match(splitRegex);

		var letters = splittedValues.map((d) => parseInt(d, 2)).map((c) => String.fromCharCode(c)).join('');

		result.innerHTML = letters;
}

solve();