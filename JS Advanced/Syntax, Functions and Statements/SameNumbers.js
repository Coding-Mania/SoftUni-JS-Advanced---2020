function solve(number) {

    let numberAsString = number.toString();
    let isSame = true;
    let sum = +numberAsString[0];

    for (let index = 1; index < numberAsString.length; index++) {

        if (numberAsString[index] !== numberAsString[index - 1]) {
            isSame = false;
        }

        sum += +numberAsString[index];
    }

    console.log(isSame);
    console.log(sum);
}