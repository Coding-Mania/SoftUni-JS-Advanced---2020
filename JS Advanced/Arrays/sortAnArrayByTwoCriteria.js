function solve(arr) {
    const sortedArr = arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    return sortedArr.join('\n');
}
