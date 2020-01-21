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

solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]
)