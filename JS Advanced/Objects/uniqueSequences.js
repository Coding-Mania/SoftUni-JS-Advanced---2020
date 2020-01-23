function solve(input) {
    const regex = /-?[0-9]\d*(\.\d+)?/gm;
    const uniqueArrays = [];

    let result = input.reduce((acc, arr) => {
        let [...array] = arr.match(regex).map(Number);

        array.sort((a, b) => b - a);

        if (!acc.includes(`[${array.toString()}]`)) {
            acc.push(`[${array.toString()}]`);
            uniqueArrays.push(array);
        }

        return acc;
      
    }, [])

    uniqueArrays.sort((a, b) =>  a.length - b.length );

     uniqueArrays.forEach(e => {
         console.log(`[${e.join(', ')}]`);
     })
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
    '[6, 8, 3, 1, 7, 9,-7, 0]']
)