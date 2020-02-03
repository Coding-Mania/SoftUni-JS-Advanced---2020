function encodeAndDecodeMessages() {

    let buttons = document.querySelectorAll('button');

    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    let textAreas = document.querySelectorAll('textarea');

    let inputArea = textAreas[0];
    let outputArea = textAreas[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {

        let message = inputArea.value.split('').map((char) => {
            return String.fromCharCode((char.charCodeAt(0) + 1));
        }).join('');

        inputArea.value = null;
        outputArea.value = message;
    }

    function decodeMessage() {

        let message = outputArea.value.split('').map((char) => {
            return String.fromCharCode((char.charCodeAt(0) - 1));
        }).join('');

        outputArea.value = message;
    }
}
