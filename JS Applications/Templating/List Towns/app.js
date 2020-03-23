(function solve() {
    const loadBtn = document.querySelector('#btnLoadTowns');
    const rootDiv = document.querySelector('#root');

    async function loadTowns(e) {
        e.preventDefault();
        const townsInput = document.querySelector('#towns');
        const towns = townsInput.value.split(', ');

        if (towns.length > 0 && towns[0] !== '') {
            rootDiv.innerHTML = '';

            townsInput.value = '';

            const templateSrc = await fetch('./town-template.hbs').then(r => r.text());

            const template = Handlebars.compile(templateSrc)

            const resultHTML = template({ towns });

            rootDiv.innerHTML = resultHTML;
        }
    }

    loadBtn.addEventListener('click', loadTowns);
}())