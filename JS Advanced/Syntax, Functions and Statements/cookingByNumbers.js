function solve(arr){

    let number = +arr.shift();
    
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        switch(element){
            case 'chop':
              number =  aggregate(number, chop);
            break;
            case 'dice':
              number =  aggregate(number, dice);
             break;
            case 'spice':
                 number =  aggregate(number, spice);
            break;
            case 'bake':
                number =  aggregate(number, bake);
            break;
            case 'fillet':
                number =  aggregate(number, fillet);
             break;
        }

        console.log(number);
    }  
    
    function aggregate(number, func){
        return func(number);
    }
    function chop(number){
        return number / 2;
    }
    
    function dice(number){
        return Math.sqrt(number);
    }
    
    function spice(number){
        return number + 1;
    }
    
    function bake(number){
        return number * 3;
    }
    
    function fillet(number){
        return (number - (number * 0.2));
    }   
}