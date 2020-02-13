function solve() {
	const splitRegex = /\d{1,8}/g;
	const regex = /[a-z ]/i;

	let input = document.getElementById('input').value;
	let result = document.getElementById('resultOutput');

	let num = input
				.split('')
				.reduce((acc, n) => acc + +n, 0);

	while (num > 9) {
		num = num.toString()
		.split('')
		.reduce((acc, n) => acc + +n, 0);
	}

	let newStr = input.slice(num, input.length - num);

	let splittedValues = newStr.match(splitRegex);

	var letters = splittedValues
					.map((d) => parseInt(d, 2))
					.map((c) => String.fromCharCode(c))
					.filter(x => x.match(regex))
					.join('');

	result.innerHTML = letters;
}

solve();