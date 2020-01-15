function solve(arr) {

    let [x1, y1, x2, y2] = arr;

    distance(x1, y1, 0, 0);
    distance(x2, y2, 0, 0);
    distance(x1, y1, x2, y2);

    function distance(x1, y1, x2, y2) {

        let c = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
        let c2 = Math.sqrt(c);

        if (Number.isInteger(c2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}