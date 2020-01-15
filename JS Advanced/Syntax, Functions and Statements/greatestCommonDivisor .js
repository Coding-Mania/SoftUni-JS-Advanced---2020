function solve(a, b) {

    let division = 0;

    var lowerNumber = Math.min(a, b);

    for (let index = 1; index <= lowerNumber; index++) {

        if (a % index === 0 && b % index === 0) {
            division = index;
        }
    }

    return division;
}