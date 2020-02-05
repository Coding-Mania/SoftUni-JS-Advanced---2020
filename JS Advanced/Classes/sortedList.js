class List {
    array = [];
    size = 0;

    add(number) {
        this.array.push(number);
        this.array.sort((a, b) => a - b);
        this.size = this.array.length;
    }
    remove(index) {
        if (index > -1 && index < this.array.length) {
            this.array.splice(index, 1);
            this.array.sort((a, b) => a - b);
            this.size = this.array.length;
        }
    }
    get(index) {
        if (index > -1 && index < this.array.length) {
            return this.array[index];
        }
    }
}
