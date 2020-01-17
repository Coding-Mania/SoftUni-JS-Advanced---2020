function solve(arr) {
    let amountOfRotation = +arr.pop();

    if (amountOfRotation >= arr.length) {
        amountOfRotation = amountOfRotation % arr.length;
      
    }

    for (let i = 0; i < amountOfRotation; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}
