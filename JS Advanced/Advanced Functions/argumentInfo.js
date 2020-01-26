function solve(...args) {

    let typesCount = {};

    for (const iterator of args) {
        console.log(`${typeof iterator}: ${iterator}`);

        if (!typesCount[typeof iterator]) {
            typesCount[typeof iterator] = 0;
        }

        typesCount[typeof iterator]++;
    }

   Object.keys(typesCount).sort((a, b) => (typesCount[b] -typesCount[a])).forEach(element => {
        console.log(`${element} = ${typesCount[element]}`);
    })
}

solve('cat', 42,44, function () { console.log('Hello world!'); });