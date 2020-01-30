function solve() {

    let key = document.querySelector('.keys');
    let view = document.querySelector('#expressionOutput');
    let outputView = document.querySelector('#resultOutput');
    let clearButton = document.querySelector('.clear');

    key.addEventListener('click', eventHandler);
    clearButton.addEventListener('click', clearScreen);

    function eventHandler(event){

        console.log(event.target.value);
        if(event.target.value !== '='){

            view.innerHTML += event.target.value;
        }
        else{
            
        }    
    }

    function clearScreen(){
        view.innerHTML ='';
        outputView.innerHTML = '';
    }
}