function solve(input) {
    let system = input.reduce((acc, info) => {

        let [systemName, componentName, subcomponentName] = info.split(' | ');

        if (!acc[systemName]) {
            acc[systemName] = { [componentName]: [subcomponentName] };
            return acc;
        }

        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [subcomponentName];
            return acc;
        }

        acc[systemName][componentName].push(subcomponentName);

        return acc;
    }, {})

    let sortedSystem = Object.keys(system).sort((a, b) => {
        return Object.keys(system[b]).length - Object.keys(system[a]).length
            || a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    })

    for (const systemName of sortedSystem) {

        console.log(systemName);


        for (const componentName of Object.keys(system[systemName]).sort((a, b) => Object.keys(system[systemName][b]).length - Object.keys(system[systemName][a]).length)) {

            console.log(`|||${componentName}`);
            system[systemName][componentName].forEach(element => {
                console.log(`||||||${element}`);
            });
        }
    }
}
