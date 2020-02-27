(function solve() {

    Array.prototype.last = function () {

        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {

        let newArr = new Array(this.length);
        newArr = this.slice(n);
        return newArr;
    }

    Array.prototype.take = function (n) {

        let newArr = new Array(this.length);
        newArr = this.slice(0,n);
        return newArr;
    }

    Array.prototype.sum = function () {

        return this.reduce((acc, c) => acc += c)
    }

    Array.prototype.average = function (){

        return this.sum() / this.length;
    }
}())
