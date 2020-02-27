function solve(argument) {

    let enginesTypes = {

        Small: { power: 90, volume: 1800 },
        Normal: { power: 120, volume: 2400 },
        Monster: { power: 200, volume: 3500 }
    }

    let neededEngine = Object.keys(enginesTypes).find(e => enginesTypes[e].power >= argument.power);

    let wheelSize = argument.wheelsize % 2 !== 1 ? argument.wheelsize - 1 : argument.wheelsize;

    let car = {
        model: argument.model,
        engine: enginesTypes[neededEngine],
        carriage: {
            type: argument.carriage,
            color: argument.color
        },
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    }

    return car;
}
