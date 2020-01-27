let manager = (function solution() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const meal = {
        Apple: {
            carbohydrate: 1,
            flavour: 2
        },
        Lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        Burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        Eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        Turkey: {
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10
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
            prepare: function(args, quantity){
                return 'Error: not enough carbohydrate in stock'
            }
        }

        return commands[command](args, quantity);
    }

    return process;
})()

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));  
