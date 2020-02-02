function solve() {

  let buttons = document.getElementsByTagName('button');
  let textarea = document.getElementsByTagName('textarea');
  let table = document.querySelector('tbody');

  let inputArea = textarea[0];
  let outputArea = textarea[1];


  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener('click', eventHandler);
  buyButton.onclick = buyEventHandler;

  function eventHandler() {

    let obj = JSON.parse(inputArea.value);

    let tr = document.createElement('tr');

    let imgTd = document.createElement('td');
    let img = document.createElement('img')
    img.src = obj[0].img;
    imgTd.appendChild(img);

    let name = document.createElement('td');
    name.innerHTML = `<p>${obj[0].name}</p>`;

    let price = document.createElement('td');
    price.innerHTML = `<p>${obj[0].price}</p>`;

    let factor = document.createElement('td');
    factor.innerHTML = `<p>${obj[0].decFactor}</p>`;

    let checkboxTd = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkboxTd.appendChild(checkbox);

    tr.appendChild(imgTd);
    tr.appendChild(name);
    tr.appendChild(price);
    tr.appendChild(factor);
    tr.appendChild(checkboxTd);

    table.appendChild(tr);
  }

  function buyEventHandler() {

    let checkboxes = table.querySelectorAll('input');
    let totalPrice = 0;
    let checkedArticles = [];
    let decorations = 0;

    checkboxes.forEach(e => {

      if (e.checked === true) {

        let name = e.parentElement.previousSibling.previousSibling.previousSibling.textContent;
        let decorationFactor = +e.parentElement.previousSibling.textContent;
        totalPrice += +e.parentElement.previousSibling.previousSibling.textContent;

        checkedArticles.push(name);
        decorations += decorationFactor;
      }
    });

    let averageDecoration = decorations / checkedArticles.length;

    outputArea.innerHTML = `Bought furniture: ${checkedArticles.join(', ')}\n`;
    outputArea.innerHTML += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.innerHTML += `Average decoration factor: ${averageDecoration}`;

  }
}
