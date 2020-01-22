function solve(input) {
    return input.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
            return acc.sort((a, b) =>
                a.length - b.length || a.localeCompare(b)
            )
        }

        return acc;
    }, []).join('\n');
}

console.log(solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
));