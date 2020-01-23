function solve(input) {

    let result = input.reduce((acc, args) => {
        if (args.includes('->')) {
            let [name, technique, skill] = args.split(' -> ');

            if (!acc[name]) {
                acc[name] = { [technique]: +skill };
                Object.defineProperty(acc[name], 'totalSkill', { value: +skill, enumerable: false, writable: true })
                return acc;
            }

            if (!acc[name][technique]) {
                acc[name][technique] = +skill;
                acc[name].totalSkill += +skill;
                return acc;
            }

            if (acc[name][technique] < +skill) {
                acc[name][technique] += +skill;
                acc[name].totalSkill += +skill;
                return acc;
            }

            return acc;

        } else if (args.includes('vs')) {
            let [firtsName, secondName] = args.split(' vs ');

            if (acc[firtsName] && acc[secondName]) {

                for (const technique in acc[firtsName]) {

                    if (acc[firtsName][technique] && acc[secondName][technique]) {
                        let losingplayer = acc[firtsName].totalSkill < acc[secondName].totalSkill ? firtsName : secondName;

                        delete acc[losingplayer];
                        return acc;
                    }
                }
            }
        }

        return acc;

    }, {})

    let sorted = Object.keys(result).sort((a, b) => {
        return result[b].totalSkill - result[a].totalSkill || a.localeCompare(b);
    })

    sorted.forEach(e => {
        console.log(`${e}: ${result[e].totalSkill} skill`);

        let sortedtechnique = Object.keys(result[e]).sort((a, b) => {
            return result[e][b] - result[e][a] || a.localeCompare(b);
        })

        sortedtechnique.forEach(t => {
            console.log(`- ${t} <!> ${result[e][t]}`);
        })
    })
}
