function solve() {
   let inputs = document.querySelectorAll('#add-new input');
   let button = document.querySelector('#add-new button');

   let availableProduct = document.querySelector('#products ul');

   let filterButton = document.querySelector('.filter button');

   let myProductsList = document.querySelector('#myProducts ul');
   let byButton = document.querySelector('#myProducts button');
   let totalPriceDiv = document.querySelectorAll('h1')[1];

   filterButton.addEventListener('click', filterEventHandler);
   button.addEventListener('click', addProductsEventHandler);
   byButton.addEventListener('click', byButtonEventHandler);

   function byButtonEventHandler(e) {
      myProductsList.innerHTML = null;
      totalPriceDiv.innerHTML = 'Total Price: 0.00'
   }

   function filterEventHandler() {
      let filterValue = document.querySelector('#filter').value;

      Array.from(availableProduct.querySelectorAll('li')).forEach(x => {

         if (!x.firstChild.innerHTML.toLowerCase().includes(filterValue.toLowerCase())) {
            x.style.display = 'none';
         }
      });
   }

   function addProductsEventHandler(e) {
      e.preventDefault();

      let name = inputs[0].value;
      let quantity = +inputs[1].value;
      let price = +inputs[2].value;


      let strong = createHTMLElement('strong', { type: 'innerHTML', value: price.toFixed(2) });
      let buttonEl = createHTMLElement('button', { type: 'innerHTML', value: "Add to Client's List" }, 'click', addToClientsListHandler);
      let div = createHTMLElement('div');
      div.appendChild(strong);
      div.appendChild(buttonEl);

      let strQuantity = createHTMLElement('strong', { type: 'innerHTML', value: `Available: ${quantity}` });
      let span = createHTMLElement('span', { type: 'innerHTML', value: name });

      let li = createHTMLElement('li');

      li.appendChild(span);
      li.appendChild(strQuantity);
      li.appendChild(div);

      availableProduct.appendChild(li);
   }

   function addToClientsListHandler() {

      reduceCount(this);

      let name = this.parentNode.parentNode.firstChild.innerHTML;
      let currentPrice = this.parentNode.firstChild.innerHTML;

      let li = createHTMLElement('li', { type: 'innerHTML', value: name });
      let strong = createHTMLElement('strong', { type: 'innerHTML', value: currentPrice });
      li.appendChild(strong);
      myProductsList.appendChild(li);

      let price = +totalPriceDiv.innerHTML.split('Total Price: ')[1];
      price += +currentPrice;
      totalPriceDiv.innerHTML = `Total Price: ${price.toFixed(2)}`;
   }

   function reduceCount(input) {
      let liCount = +input.parentNode.parentNode.querySelector('strong').innerHTML.split('Available: ')[1];
      liCount--;
      input.parentNode.parentNode.querySelector('strong').innerHTML = `Available: ${liCount}`;

      if (liCount === 0) {
         availableProduct.removeChild(input.parentNode.parentNode);
      }
   }

   function createHTMLElement(tagName, valuesInput, event, eventHandler) {
      let element = document.createElement(tagName);
      if (valuesInput) {
         element[valuesInput.type] = valuesInput.value;
      }

      if (event) {
         element.addEventListener(event, eventHandler);
      }


      return element;
   }
};