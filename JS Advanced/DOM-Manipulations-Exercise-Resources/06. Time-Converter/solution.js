function attachEventsListeners() {

    let main = document.querySelector('main');

    main.addEventListener('click', eventHandler);

    function eventHandler(event) {
        if (event.target.type === 'button') {
            let input = event.target.previousElementSibling;
            let type = input.id;
            let value = +input.value;

            convertTime(type,value);
        }
    }

    function convertTime(inputType, inputValue) {
        if (inputType === 'days') {
            let hours = inputValue * 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;

            setValues(inputValue, hours, minutes, seconds);
        } else if (inputType === 'hours') {
            let days = inputValue / 24;
            return convertTime('days', days);
        } else if (inputType === 'minutes') {
            let hours = inputValue / 60;
            return convertTime('hours', hours);
        } else if (inputType === 'seconds') {
            let minutes = inputValue / 60;
            return convertTime('minutes', minutes);
        }
    }

    function setValues(days, hours, minutes, seconds) {
        let divs = main.querySelectorAll('main div input:nth-child(2)');

       divs[0].value = days;
       divs[1].value = hours;
       divs[2].value = minutes;
       divs[3].value = seconds;
    }
}
