function solve() {
	const splitRegex = /\d{1,8}/g;

	let input = document.getElementById('input').value;
	let button = document.getElementsByClassName('resultButton')[0];
	let result = document.getElementById('resultOutput');

	button.addEventListener('click', () => {
		let num = input.split('').reduce((acc, n) => acc + +n, 0);

		while (num > 9) {
			num = num.toString().split('').reduce((acc, n) => acc + +n, 0);
		}

		let newStr = input.slice(num, input.length - num);

		let splittedValues = newStr.match(splitRegex);

		var letters = splittedValues.map((d) => parseInt(d, 2)).map((c) => String.fromCharCode(c)).join('');

		result.innerHTML = letters;
	})
}

solve();