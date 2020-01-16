function solve(arr) {

    let number = +arr.shift();

    for (let index = 0; index < arr.length; index++) {

        const element = arr[index];

        switch (element) {
            case 'chop':
                number = chop(number);
                break;
            case 'dice':
                number = dice(number);
                break;
            case 'spice':
                number = spice(number);
                break;
            case 'bake':
                number = bake(number);
                break;
            case 'fillet':
                number = fillet(number);
                break;
        }

        console.log(number);
    }

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return (number - (number * 0.2));
    }
}