function solve(...args) {

    let typesCount = {};

    for (const iterator of args) {

        if (typeof iterator === 'object') {
            console.log(`${typeof iterator}:`);

            if (Array.isArray(iterator)) {

                if (!typesCount['object']) {
                    typesCount['object'] = 0;
                }

                typesCount['object']++;

            } else {

                Object.keys(iterator).forEach(e => {
                    if (!typesCount[typeof e]) {
                        typesCount[typeof e] = 0;
                    }

                    typesCount[typeof e]++;
                });
            }
        } else {
            console.log(`${typeof iterator}: ${iterator}`);
            if (!typesCount[typeof iterator]) {
                typesCount[typeof iterator] = 0;
            }

            typesCount[typeof iterator]++;
        }
    }

    Object.keys(typesCount).sort((a, b) => (typesCount[b] - typesCount[a])).forEach(element => {
        console.log(`${element} = ${typesCount[element]}`);
    })
}
