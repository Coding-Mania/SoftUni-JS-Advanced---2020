function solve() {

    let button = document.getElementsByTagName('button')[0];

    let optionList = document.querySelector('#selectMenuTo');

    optionList.innerHTML = `<option selected value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>`;

    button.addEventListener('click', process);

    function process() {

        const functions = {
            binary: (number) => (number.toString(2)),
            hexadecimal: (number) => number.toString(16).toUpperCase()
        }

        let number = document.getElementById('input').value;

        let convertedType = optionList.value;

        let convertedNumber = functions[convertedType](+number);

        document.getElementById('result').value = convertedNumber;
    }
}
