function solve(arr) {

    return arr.reduce((acc, element) => {

        let lastElement = acc[acc.length - 1] === undefined ? 0 : acc[acc.length - 1];

        if (element >= lastElement) {
            acc.push(element);
        }

        return acc;

    }, []).join('\n');
}
