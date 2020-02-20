function solve() {

    let addNewBookButton = document.querySelector('form button');
    let inputs = document.querySelectorAll('form input');
    let outputsDivs = document.querySelectorAll('#outputs .bookShelf');
    let totalPrice = document.querySelectorAll('h1')[1];

    let oldBooks = outputsDivs[0];
    let newBooks = outputsDivs[1];

    addNewBookButton.addEventListener('click', addNewBookEventHandler);

    function addNewBookEventHandler(e) {
        e.preventDefault();

        let title = inputs[0].value;
        let year = +inputs[1].value;
        let price = +inputs[2].value;

        if (title.length > 0 && year > -1 && price > -1) {

            let div = createHTMLElement('div', { name: 'class', value: 'book' });
            let p = createHTMLElement('p', null, { type: 'innerHTML', value: `${title} [${year}]` });

            div.appendChild(p);

            if (year > 2000) {
                let buyButton = createHTMLElement('button', null, { type: 'innerHTML', value: `Buy it only for ${price.toFixed(2)} BGN` }, 'click', buyBookHandler);
                let oldSectionButton = createHTMLElement('button', null, { type: 'innerHTML', value: `Move to old section` }, 'click', oldSectionHandler);
                div.appendChild(buyButton);
                div.appendChild(oldSectionButton);
                newBooks.appendChild(div);
            } else {
                let newPrice = price * 0.85;
                let buyButton = createHTMLElement('button', null, { type: 'innerHTML', value: `Buy it only for ${newPrice.toFixed(2)} BGN` }, 'click', buyBookHandler);
                div.appendChild(buyButton);

                oldBooks.appendChild(div);
            }
        }

    }

    function buyBookHandler() {

        let parent = this.parentNode.parentNode;

        let price = +this.parentNode.querySelector('button').innerHTML.match(/\d+.?\d+/g);

        let currentTotalPrice = totalPrice.innerHTML.match(/\d+.?\d+/g) || 0;

        totalPrice.innerHTML = `Total Store Profit: ${(price + currentTotalPrice).toFixed(2)} BGN`;

        parent.removeChild(this.parentNode);
    }

    function oldSectionHandler() {

        let parentNode = this.parentNode;

        let oldPrice = +parentNode.querySelector('button').innerHTML.match(/\d+.?\d+/g);

        let price = oldPrice * 0.85;

        parentNode.querySelector('button').innerHTML = `Buy it only for ${price.toFixed(2)} BGN`;

        parentNode.removeChild(this.parentNode.querySelectorAll('button')[1]);

        oldBooks.appendChild(parentNode);
    }

    function createHTMLElement(tagName, attribute, valuesInput, event, eventHandler) {
        let element = document.createElement(tagName);

        if (attribute) {
            element.setAttribute(attribute.name, attribute.value);
        }

        if (valuesInput) {
            element[valuesInput.type] = valuesInput.value;
        }

        if (event) {
            element.addEventListener(event, eventHandler);
        }


        return element;
    }
}