let solution = (function () {

    function add(vec1, vec2) {
        let x = vec1[0];
        let y = vec1[1];
        let x2 = vec2[0];
        let y2 = vec2[1];

        let result = [x + x2, y + y2];

        return result;
    }

    function multiply(vec1, scalar) {
        let result = [vec1[0] * scalar, vec1[1] * scalar];

        return result;
    }

    function length(vec1) {

        let result = Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));

        return result;
    }

    function dot(vec1, vec2) {
        let x = vec1[0];
        let y = vec1[1];
        let x2 = vec2[0];
        let y2 = vec2[1];

        let result = (x * x2) + (y * y2);

        return result;
    }

    function cross(vec1, vec2){
        let x = vec1[0];
        let y = vec1[1];
        let x2 = vec2[0];
        let y2 = vec2[1];

        let result = x * y2 - y * x2;

        return result;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

})()

console.log(solution.dot([2, 3], [2, -1]));