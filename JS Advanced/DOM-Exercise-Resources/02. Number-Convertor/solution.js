function solve() {

    let button = document.getElementsByTagName('button')[0];

    let optionList = document.querySelector('#selectMenuTo');

    optionList.innerHTML = `<option selected value="binary">Binary</option>
    <option value="hexadeicmal">Hexadeicmal</option>`;

    button.addEventListener('click', process);

    function process() {

        const functions = {
            binary: function (number) {
                return number.toString(2);
            },
            hexadeicmal: function (number) {
                return number.toString(16).toUpperCase();
            }
        }

        let number = document.getElementById('input').value;

        let convertedType = optionList.value;

        let convertedNumber = functions[convertedType](+number);

        document.getElementById('result').value = convertedNumber;
    }
}
