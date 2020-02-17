function solution() {
    let cardSections = document.querySelectorAll('.card');

    let giftArgs = cardSections[0].querySelector('div input[type= "text"]');
    let addButton = document.querySelector('.card div button');

    let listOfGifts = cardSections[1].querySelector('ul');
    let sentGifts = cardSections[2].querySelector('ul');
    let discardedGifts = cardSections[3].querySelector('ul');


    addButton.addEventListener('click', eventHandler);

    function eventHandler() {
        let giftName = giftArgs.value;

        let li = createHTMLElement('li', { name: 'class', value: 'gift' }, giftName);
        let sendButton = createHTMLElement('button', { name: 'id', value: 'sendButton' }, 'Send', 'click', sendButtonEvent);
        let discardButton = createHTMLElement('button', { name: 'id', value: 'discardButton' }, 'Discard', 'click', discardButtonEvent);
        li.appendChild(sendButton);
        li.appendChild(discardButton);

        listOfGifts.appendChild(li);

        let allGifts = listOfGifts.querySelectorAll('li');
        if (allGifts.length > 1) {
            let sortedItems = Array.from(allGifts).sort((a, b) => a.textContent.localeCompare(b.textContent));

            listOfGifts.innerHTML = null;
            sortedItems.forEach(e => listOfGifts.appendChild(e));
        }

        giftArgs.value = null;
    }

    function discardButtonEvent() {

        let name = this.parentNode.firstChild.data;
        let item = createHTMLElement('li', { name: 'class', value: 'gift' }, name);

        listOfGifts.removeChild(this.parentNode);
        discardedGifts.appendChild(item);

    }

    function sendButtonEvent() {
        let name = this.parentNode.firstChild.data;
        let item = createHTMLElement('li', { name: 'class', value: 'gift' }, name);

        listOfGifts.removeChild(this.parentNode);
        sentGifts.appendChild(item);

    }

    function createHTMLElement(tagName, attribute, value, event, eventFunction) {
        let tag = document.createElement(tagName);
        tag.setAttribute(attribute.name, attribute.value);
        tag.innerHTML = value;

        if (event) {
            tag.addEventListener(event, eventFunction);
        }

        return tag;
    }
}
