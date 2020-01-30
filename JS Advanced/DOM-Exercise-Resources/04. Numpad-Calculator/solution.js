function solve() {

    let key = document.querySelector('.keys');
    let view = document.querySelector('#expressionOutput');
    let outputView = document.querySelector('#resultOutput');
    let clearButton = document.querySelector('.clear');

    key.addEventListener('click', eventHandler);
    clearButton.addEventListener('click', clearScreen);

    let operators = ['+', '-', '*', '/'];

    let calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    function eventHandler(event) {

        if (event.target.value !== '=') {

            if (operators.includes(event.target.value)) {
                view.innerHTML += ` ${event.target.value} `;
            } else {

                view.innerHTML += event.target.value;
            }
        } else {
            let [leftOperand, operator, rightOperand] = view.innerHTML.split(' ');

            if (rightOperand.length < 1) {
                outputView.innerHTML = 'NaN';
                return;
            }

            let result = calc[operator](+leftOperand, +rightOperand);

            outputView.innerHTML = result;
        }
    }

    function clearScreen() {
        view.innerHTML = '';
        outputView.innerHTML = '';
    }
}
