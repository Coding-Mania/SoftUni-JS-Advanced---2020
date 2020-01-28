let manager = (function solution() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const meal = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    function process(input) {
        let [command, args, quantity] = input.split(' ');

        const commands = {
            restock: function (args, quantity) {

                ingredients[args] += +quantity;

                return 'Success';
            },
            report: function () {
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
            },
            prepare: function (args, quantity) {

                for (const e of Object.keys(meal[args])) {

                    let needed = meal[args][e] * quantity;

                    if (ingredients[e] < needed) {

                        return `Error: not enough ${e} in stock`;
                    }
                }

                for (const e of Object.keys(meal[args])) {

                    let needed = meal[args][e] * quantity;

                    ingredients[e] -= needed;

                }

                return 'Success';
            }
        }

        return commands[command](args, +quantity);
    }

    return process;

})()

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4")); 