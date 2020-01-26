function solve(arr, sortKind) {

    let asc = (a, b) => (a - b);
    let desc = (a, b) => (b - a);

    return arr.sort(sortKind === 'asc' ? asc : desc);
}
