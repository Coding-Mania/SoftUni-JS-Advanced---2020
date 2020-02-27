(function solve() {

    String.prototype.ensureStart = function (str) {

        if (!this.startsWith(str)) {
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {

        if (!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {

        if (this.toString() === '') {
            return true
        }

        return false;
    }

    String.prototype.truncate = function (n) {

        if (this.length <= n) {

            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length > n) {

            let splittedString = this.split(' ');


            if (splittedString.length === 1) {
                return splittedString.slice(0, splittedString[0].length - 3) + '...';
            }

            let string = '';

            for (const word of splittedString) {
                
                if (string.length + word.length + 3 <= n) {
                    string += word + ' '; 
                }
                else{
                    break;
                }
            }

            return string.trim(' ')+ '...';
        }

     
        let newString = this.slice(0, n - 3) + '...';

        return newString;
    }

    String.format = function (string, ...params) {

        for (let i = 0; i < params.length; i++) {

            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }

}())

var testString = 'the quick brown fox jumps over the lazy dog';
console.log(testString.length)

console.log(testString.truncate(6));
console.log(testString.truncate(43));
console.log(''.isEmpty());