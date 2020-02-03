function addItem() {

    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');

    let selectMenu = document.querySelector('#menu');

    let option = document.createElement('option');
    option.innerHTML = newItemText.value;
    option.value = newItemValue.value;

    newItemText.value = null;
    newItemValue.value = null;

    selectMenu.appendChild(option);
}
