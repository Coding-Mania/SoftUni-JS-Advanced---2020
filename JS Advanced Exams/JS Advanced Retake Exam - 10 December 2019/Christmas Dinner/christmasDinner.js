class ChristmasDinner {
    _budget;
    dishes = [];
    products = [];
    guests = {};
    constructor(budget) {
        this.budget = budget;
    }

    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping([type, price]){

        let neededMoney = price;

        if (this._budget < neededMoney) {
            throw new Error('Not enough money to buy this product');
        }

        this._budget -= neededMoney;

        this.products.push(type);

        return `You have successfully bought ${type}!`
    }

    recipes(recipe){

        for (const product of recipe.productsList) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push(recipe);

        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        let recipe = null;
        for (const obj of this.dishes) {
            if (obj.recipeName === dish) {
                recipe = obj;
                break;
            }
        }

        if (!recipe) {
            throw new Error('We do not have this dish');
        }

        for (const obj in this.guests) {
            if (obj.hasOwnProperty(name)) {
                throw new Error('This guest has already been invited');
            }
        }
    
       Object.defineProperty(this.guests, name, {
        value: dish,
        writable: false,
        enumerable: true
      });

       return `You have successfully invited ${name}!`
    }

    showAttendance(){
        return Object.keys(this.guests).reduce((acc, name) => {
           let products = null;
           let recipe = this.guests[name];

           for (const obj of this.dishes) {
                if (obj.recipeName === recipe) {
                    products = obj.productsList.join(', ');
                }
           }

           acc += `${name} will eat ${recipe}, which consists of ${products}\n`;
           return acc;
        },'').trim();
    }
}
