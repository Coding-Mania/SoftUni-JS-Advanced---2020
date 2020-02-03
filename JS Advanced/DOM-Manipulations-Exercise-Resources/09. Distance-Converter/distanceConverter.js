function attachEventsListeners() {

    let button = document.querySelector('#convert');

    button.addEventListener('click', eventHandler);

    function eventHandler(event) {
        let div = event.target.parentElement;
        let distance = +div.querySelector('#inputDistance').value;
        let inputType = div.querySelector('#inputUnits').value;

        let outDiv = event.target.parentElement.nextElementSibling;
        let outputType = outDiv.querySelector('#outputUnits').value;
        let outputArea = outDiv.querySelector('#outputDistance');


        let convertedValueInMeters = convertInMeters(distance, inputType);

        let convertedValue = convertFinalValue(convertedValueInMeters,outputType);

        outputArea.value = convertedValue;
    }

    function convertInMeters(distance, inputType) {

        if (inputType === 'km') {
            return distance * 1000;
        } else if (inputType === 'm') {
            return distance;
        } else if (inputType === 'mm') {
            return distance * 0.001;
        } else if (inputType === 'mi') {
            return distance * 1609.34;
        } else if (inputType === 'yrd') {
            return distance * 0.9144;
        } else if (inputType === 'ft') {
            return distance * 0.3048;
        } else if (inputType === 'in') {
            return distance * 0.0254;
        } else if (inputType === 'cm') {
            return distance * 0.01;
        }
    }

    function convertFinalValue(distance, outputType){

        if (outputType === 'km') {
            return distance / 1000;
        } else if (outputType === 'm') {
            return distance;
        } else if (outputType === 'mm') {
            return distance / 0.001;
        } else if (outputType === 'mi') {
            return distance / 1609.34;
        } else if (outputType === 'yrd') {
            return distance / 0.9144;
        } else if (outputType === 'ft') {
            return distance / 0.3048;
        } else if (outputType === 'in') {
            return distance / 0.0254;
        }  else if (outputType === 'cm') {
            return distance / 0.01;
        }
    }
}
