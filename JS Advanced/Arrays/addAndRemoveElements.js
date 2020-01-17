function solve(input) {
    const arr = [];

    let initialNumber = 1;

    input.forEach(element => {
        if (element === 'add') {
            arr.push(initialNumber);
            initialNumber += 1;
        } else if (element === 'remove') {
            arr.pop();
            initialNumber += 1;
        }
    });

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}
