function solve(array){

    let obj = {};

    for (let index = 0; index < array.length -1; index+=2) {
        const element = array[index];
        
        obj[element] = +array[index +1];
    }

    console.log(obj);
}