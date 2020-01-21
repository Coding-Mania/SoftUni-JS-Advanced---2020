function solve(input) {

    const store = {};

    input.sort((a, b) => a.localeCompare(b));

    input.forEach(element => {
        let info = element.split(' : ');
        let obj = {};
        if (!store.hasOwnProperty(info[0][0])) {
            store[info[0][0]] = [];
        }
        obj[info[0]] = +info[1];

        store[info[0][0]].push(obj);
    });

    for (const key in store) {
        console.log(`${key}`);

        for (const obj of store[key]) {
            console.log(` ${Object.keys(obj)}: ${Object.values(obj)}`);
        }
    }
}
