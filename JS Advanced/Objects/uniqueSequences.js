function solve(input) {
    const regex = /-?[0-9]\d*(\.\d+)?/gm;
    const uniqueArrays = [];

    let result = input.reduce((acc, arr) => {
        let [...array] = arr.match(regex).map(Number);

        array.sort((a, b) => b - a);

        if (!acc.includes(`[${array.toString()}]`)) {
            acc.push(`[${array.toString()}]`);
            uniqueArrays.push(array);
        }

        return acc;

    }, [])

    uniqueArrays.sort((a, b) => a.length - b.length);

    uniqueArrays.forEach(e => {
        console.log(`[${e.join(', ')}]`);
    })
}
