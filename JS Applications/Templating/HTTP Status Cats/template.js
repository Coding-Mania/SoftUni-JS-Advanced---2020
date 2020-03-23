(async () => {
    const allCatsSection = document.querySelector('#allCats');

    const catTemplateSrc = await fetch('./cat-template.hbs').then(r => r.text());

    Handlebars.registerPartial("cat", catTemplateSrc);

    const catsTemplateSrc = await fetch('./cats-template.hbs').then(r => r.text());

    const template = Handlebars.compile(catsTemplateSrc);

    const resultHTML = template({ cats });

    allCatsSection.innerHTML = resultHTML;

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonText = btn.innerText;
            const statusDiv = btn.parentNode.querySelector('.status');

            if (buttonText.startsWith('Show')) {
                statusDiv.style.display = 'block';
                btn.innerText = 'Hide status code';
            } else {
                statusDiv.style.display = 'none';
                btn.innerText = 'Show status code';
            }
        });
    });

})()
