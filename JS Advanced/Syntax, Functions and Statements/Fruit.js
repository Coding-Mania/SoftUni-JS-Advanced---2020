function solve(fruit, weight, price) {
    let neededPrice = (weight * price) / 1000;
    weight = weight / 1000;

    let massege = `I need $${neededPrice.toFixed(2)} to buy ${weight.toFixed(2) } kilograms ${fruit}.`;

    console.log(massege);
}

solve('apple', 1563, 2.35);