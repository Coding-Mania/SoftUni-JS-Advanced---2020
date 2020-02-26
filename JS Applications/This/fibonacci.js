function getFibonator() {

    function fib(n) {
        if (n <= 1) {
            return 1;
        }

        return fib(n - 2) + fib(n - 1);
    }

    let counter = 0;

    return () => fib(counter++);
}

let fib = getFibonator();

console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())