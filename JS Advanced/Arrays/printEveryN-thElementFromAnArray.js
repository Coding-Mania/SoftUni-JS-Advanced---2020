function solve(arr) {
    let step = +arr.pop();

    for (let i = 0; i < arr.length; i+= step) {
        const element = arr[i];
        
        console.log(element);
    }
}
