function solve() {

    return {

        collection: [],
        size: 0,

        add: function (element) {

            this.collection.push(element)
            this.collection = this.collection.sort((a, b) => a - b);
            this.size = this.collection.length;
        },

        remove: function (index) {

            if (index > -1 && index < this.collection.length) {

              this.collection.splice(index, 1);
                this.collection = this.collection.sort((a, b) => a - b);
                this.size = this.collection.length;
            }
        },

        get: function (index) {

            if (index > -1 || index < this.collection.length) {

                return this.collection[index];
            }
        }
    }
}
