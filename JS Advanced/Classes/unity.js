class Rat {
    rats = [];

    constructor(name) {
        this.name = name;
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        return this.name + '\n' + Object.keys(this.rats).map(r => `##${r.name}`).join('\n');
    }
}
