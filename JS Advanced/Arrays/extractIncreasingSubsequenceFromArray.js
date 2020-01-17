function solve(arr) {
    const subsequence = [];

    let biggestNumber = arr.shift();
    subsequence.push(biggestNumber);

    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];

        if (element >= biggestNumber) {
            biggestNumber = element;
            subsequence.push(biggestNumber);
        }
    }

    return subsequence.join('\n');
}