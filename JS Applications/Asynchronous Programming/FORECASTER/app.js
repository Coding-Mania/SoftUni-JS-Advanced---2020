function attachEvents() {
    const locationsURL = 'https://judgetests.firebaseio.com/locations.json';
    const btn = document.querySelector('#submit');

    function createHTMLElement(type, classList, content) {
        let element = document.createElement(type);

        if (classList) {
            element.classList = [...classList];
        }

        if (content) {
            element.textContent = content;
        }

        return element;
    }

    function showWeatherInfo(dayData, upcomingData) {
        const symbols = {
            'S': '☀',
            'P': '⛅',
            'O': '☁',
            'R': '☂',
            'd': '°'
        }

        let infoDiv = document.querySelector('#current');

        let forecastSpan = createHTMLElement('span', ['condition symbol'], symbols[dayData.forecast.condition[0]]);
        let span = createHTMLElement('span', ['condition']);
        let spanLocation = createHTMLElement('span', ['forecast-data'], dayData.name);
        let spanDegree = createHTMLElement('span', ['forecast-data'], `${dayData.forecast.low + symbols['d']}/${dayData.forecast.high + symbols['d']}`);
        let spanWeather = createHTMLElement('span', ['forecast-data'], dayData.forecast.condition);

        span.appendChild(spanLocation);
        span.appendChild(spanDegree);
        span.appendChild(spanWeather);

        infoDiv.appendChild(forecastSpan);
        infoDiv.appendChild(span);

        let upcomingDiv = document.querySelector('#upcoming');

        upcomingData.forecast.forEach(e => {

            let upcomingSpan = createHTMLElement('span', ['upcoming']);
            let symbolSpan = createHTMLElement('span', ['symbol'], symbols[e.condition[0]]);
            let spanDegree = createHTMLElement('span', ['forecast-data'], `${e.low + symbols['d']}/${e.high + symbols['d']}`);
            let spanWeather = createHTMLElement('span', ['forecast-data'], e.condition);

            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(spanDegree);
            upcomingSpan.appendChild(spanWeather);
    
            upcomingDiv.appendChild(upcomingSpan);
        })


        document.querySelector('#forecast').style.display = 'block';
    }

    async function getData(URL) {
        let response = await fetch(URL);
        let data = await response.json();

        return data;
    }

    async function eventHandler() {

        if (document.querySelector('#error')) {
            document.querySelector('#error').outerHTML = '';
        }

        let locationInput = document.querySelector('#location');

        try {
            let data = await getData(locationsURL);

            let location = data.find(o => o.name === locationInput.value);
            locationInput.value = '';

            let dayData = await getData(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`);

            let upcomingData = await getData(`https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`);

            showWeatherInfo(dayData, upcomingData);
        } catch (error) {
            let mainDiv = document.querySelector('#content');
            let errorDiv = document.createElement('div');
            errorDiv.setAttribute('id', 'error')
            errorDiv.className = 'label';
            errorDiv.innerText = 'There is no data with this location'
            mainDiv.prepend(errorDiv);
        }
    }

    btn.addEventListener('click', eventHandler);
}

attachEvents();