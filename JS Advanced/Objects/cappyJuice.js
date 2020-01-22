function solve(input) {
    const obj = {};
    const botles = {};

    input.forEach(element => {
        let juice = element.split(' => ');

        if (!obj.hasOwnProperty(juice[0])) {
            obj[juice[0]] = 0;
        }

        obj[juice[0]] += +juice[1];

        if (obj[juice[0]] >= 1000) {

            let botlesCount = Math.floor(obj[juice[0]] / 1000);
            obj[juice[0]] %= 1000;

            if (!botles.hasOwnProperty(juice[0])) {
                botles[juice[0]] = 0;
            }

            botles[juice[0]] += botlesCount;
        }
    });

    for (const key in botles) {
        console.log(`${key} => ${botles[key]}`);
    }
}
