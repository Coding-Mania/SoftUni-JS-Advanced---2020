function solve(arr) {
    let amountOfRotation = +arr.pop();

    amountOfRotation %= arr.length;

    for (let i = 0; i < amountOfRotation; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}
