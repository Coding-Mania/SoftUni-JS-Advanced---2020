function attachEvents() {
    let loadBtn = document.querySelector('.load');
    let addBtn = document.querySelector('.add');
    let catchesDiv = document.querySelector('#catches');

    async function loadCatches() {
        let response = await fetch('https://fisher-game.firebaseio.com/catches.json');
        let data = await response.json();

        createShowForm(data);
    }

    function addCatches() {
        let addForm = document.querySelector('#addForm');

        let newCatch = getCatch(addForm);

        fetch('https://fisher-game.firebaseio.com/catches.json', {
            method: 'POST',
            body: JSON.stringify(newCatch)
        })
            .then(loadCatches())
    }

    function createShowForm(obj) {
        catchesDiv.innerHTML = '';

        Object.keys(obj).forEach(key => {
            let id = key;
            let divCatch = createHTMLElement('div', ['catch'], [{ name: 'data-id', value: id }]);

            let labelAngler = createHTMLElement('label', undefined, undefined, 'Angler');
            let inputAngler = createHTMLElement('input', ['angler'], [{ name: 'type', value: 'text' }, { name: 'value', value: obj[key].angler }]);

            let labelWeight = createHTMLElement('label', undefined, undefined, 'Weight');
            let inputWeight = createHTMLElement('input', ['weight'], [{ name: 'type', value: 'number' }, { name: 'value', value: obj[key].weight }]);

            let labelSpecies = createHTMLElement('label', undefined, undefined, 'Species');
            let inputSpecies = createHTMLElement('input', ['species'], [{ name: 'type', value: 'text' }, { name: 'value', value: obj[key].species }]);

            let labelLocation = createHTMLElement('label', undefined, undefined, 'Location');
            let inputLocation = createHTMLElement('input', ['location'], [{ name: 'type', value: 'text' }, { name: 'value', value: obj[key].location }]);

            let labelBait = createHTMLElement('label', undefined, undefined, 'Bait');
            let inputBait = createHTMLElement('input', ['bait'], [{ name: 'type', value: 'text' }, { name: 'value', value: obj[key].bait }]);

            let labelCaptureTime = createHTMLElement('label', undefined, undefined, 'Capture Time');
            let inputCaptureTime = createHTMLElement('input', ['captureTime'], [{ name: 'type', value: 'number' }, { name: 'value', value: obj[key].captureTime }]);

            let updateBtn = createHTMLElement('button', ['update'], undefined, 'Update');
            let deleteBtn = createHTMLElement('button', ['delete'], undefined, 'Delete');

            updateBtn.addEventListener('click', updateEvent);
            deleteBtn.addEventListener('click', deleteEvent);

            divCatch.appendChild(labelAngler);
            divCatch.appendChild(inputAngler);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(labelWeight);
            divCatch.appendChild(inputWeight);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(labelSpecies);
            divCatch.appendChild(inputSpecies);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(labelLocation);
            divCatch.appendChild(inputLocation);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(labelBait);
            divCatch.appendChild(inputBait);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(labelCaptureTime);
            divCatch.appendChild(inputCaptureTime);
            divCatch.appendChild(document.createElement('hr'));
            divCatch.appendChild(updateBtn);
            divCatch.appendChild(deleteBtn);

            catchesDiv.appendChild(divCatch);
        })
    }

    async function updateEvent() {
        let id = this.parentNode.getAttribute("data-id");

        let newCatch = getCatch(this.parentNode);

        await fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(newCatch)
        })

        loadCatches();
    }

    async function deleteEvent() {
        let id = this.parentNode.getAttribute("data-id");

        await fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'DELETE'
        })

        loadCatches();
    }

    function getCatch(form) {

        let anglerInput = form.querySelector(`.angler`);
        let weightInput = form.querySelector(`.weight`);
        let speciesInput = form.querySelector(`.species`);
        let locationInput = form.querySelector(`.location`);
        let baitInput = form.querySelector(`.bait`);
        let captureTimeInput = form.querySelector(`.captureTime`);

        let angler = anglerInput.value;
        let weight = weightInput.value;
        let species = speciesInput.value;
        let location = locationInput.value;
        let bait = baitInput.value;
        let captureTime = captureTimeInput.value;

        if (angler && weight && species && location && bait && captureTime) {

            let newCatch = {
                "angler": angler,
                "weight": weight,
                "species": species,
                "location": location,
                "bait": bait,
                "captureTime": captureTime
            }

            return newCatch;
        }
    }

    function createHTMLElement(type, classList, attributes, content) {
        let element = document.createElement(type);

        if (classList) {
            element.classList = [...classList];
        }

        if (attributes) {
            attributes.forEach(attribute => {
                element.setAttribute(attribute.name, attribute.value)
            });
        }

        if (content) {
            element.textContent = content;
        }

        return element;
    }

    loadBtn.addEventListener('click', loadCatches);
    addBtn.addEventListener('click', addCatches);
}

attachEvents();