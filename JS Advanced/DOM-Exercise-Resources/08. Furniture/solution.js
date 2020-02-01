function solve() {

  let buttons = document.getElementsByTagName('button');
  let textarea = document.getElementsByTagName('textarea');

  let inputArea = textarea[0];
  let outputArea = textarea[1];


  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener('click', eventHandler);

  function eventHandler() {
    let obj = inputArea.value;
    inputArea.value = null;

    console.log(obj);
  }

}