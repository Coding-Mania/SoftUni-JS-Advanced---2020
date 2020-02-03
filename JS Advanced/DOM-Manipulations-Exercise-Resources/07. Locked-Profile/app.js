function lockedProfile() {

    let main = document.querySelector('main');

    main.addEventListener('click', eventHandler);

    function eventHandler(event) {
        if (event.target.type === 'submit') {
            let div = event.target.parentElement;

            let lock = div.querySelector('input');
            let hiddenDivName = '#' + lock.name.split('Locked')[0] + 'HiddenFields';
            let hiddenDiv = div.querySelector(hiddenDivName);

            if (!lock.checked && event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                hiddenDiv.style.display = 'block';
            } else if (!lock.checked && event.target.textContent === 'Hide it') {
                hiddenDiv.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}
