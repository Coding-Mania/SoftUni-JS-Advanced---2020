function solve(input) {
    const cars = {};

    input.forEach(element => {
        let info = element.split(' | ');
        let obj = {};

        if (!cars.hasOwnProperty(info[0])) {
            cars[info[0]] = [];
        }

        obj[info[1]] = +info[2];
        let alreadyExist = false;

        cars[info[0]].forEach(e => {
            let prop = Object.keys(e)[0];
            if (prop === info[1]) {
                alreadyExist = true;

                return e[prop] += +info[2];
            }
        })
        
        if (!alreadyExist) {
            cars[info[0]].push(obj);
        }
    });

    for (const key in cars) {
        console.log(`${key}`);

        for (const obj of cars[key]) {
            console.log(`###${Object.keys(obj)} -> ${Object.values(obj)}`);
        }
    }
}
