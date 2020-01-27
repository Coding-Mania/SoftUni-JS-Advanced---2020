(function solution() {

    let number = 0;

    function add(n) {

        number += n;
        return add;

    }

    add.toString = function () {
        return number;
    };

    return add;

})();
