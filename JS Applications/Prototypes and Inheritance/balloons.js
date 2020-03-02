function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)

            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)

            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }


    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }

}

let classes = solve();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;
console.log(ribbon.color)