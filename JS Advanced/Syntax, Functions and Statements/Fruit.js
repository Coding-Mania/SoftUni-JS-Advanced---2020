function solve(fruit, weight, price) {
    let needetPrice = (weight * price) / 1000;
    weight = weight / 1000;

    let massege = `I need $${needetPrice.toFixed(2)} to buy ${weight.toFixed(2) } kilograms ${fruit}.`;

    console.log(massege);
}

solve('apple', 1563, 2.35);