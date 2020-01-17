function solve(arr) {
    return arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }).join('\n');
}
