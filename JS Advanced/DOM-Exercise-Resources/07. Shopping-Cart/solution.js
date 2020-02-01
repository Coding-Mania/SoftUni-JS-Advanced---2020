function solve() {

   let shoppingCart = document.querySelector('.shopping-cart');
   let textarea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');

   let totalPrice = 0;
   let products = new Set();

   shoppingCart.addEventListener('click', eventHandler);
   checkoutButton.addEventListener('click', checkoutEventHandler);

   function eventHandler(event) {

      if (event.target.classList.value === 'add-product') {

         let productPrice = event.target.parentElement.nextElementSibling.firstChild.nodeValue;
         let productName = event.target.parentElement.previousElementSibling.firstChild.nextSibling.innerHTML;

         textarea.innerHTML += `Added ${productName} for ${productPrice} to the cart.\n`;
         totalPrice += + productPrice;
         products.add(productName);
      }
   }

   function checkoutEventHandler() {
      shoppingCart.removeEventListener('click', eventHandler);
      checkoutButton.removeEventListener('click', checkoutEventHandler);
      textarea.innerHTML += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
}
