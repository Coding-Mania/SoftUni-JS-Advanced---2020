function subtract() {


    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;

    let sum = +firstNumber - +secondNumber;

    document.querySelector('#result').innerHTML = sum;
}
