import { monkeys } from "./monkeys.js";

(async () => {


    const section = document.querySelector('section');

    const monkeyTemplateSrc = await fetch('monkey-template.hbs').then(r => r.text());

    Handlebars.registerPartial('monkey', monkeyTemplateSrc);

    const monkeysTemplateSrc = await fetch('monkeys-template.hbs').then(r => r.text());

    const template = Handlebars.compile(monkeysTemplateSrc);

    const resultHTML = template({ monkeys });

    section.innerHTML += resultHTML;

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentNode;
            const p = parent.querySelector('p');

            if (p.style.display === 'none') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
    });
})()