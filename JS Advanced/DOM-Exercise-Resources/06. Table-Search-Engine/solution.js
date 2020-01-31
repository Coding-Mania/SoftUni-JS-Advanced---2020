function solve() {

   let button = document.querySelector('#searchBtn');
   let table = document.querySelectorAll('tbody tr');

   button.addEventListener('click', eventHandler);

   function eventHandler() {

      let searchValue = document.querySelector('#searchField').value.toLocaleLowerCase();
      if (searchValue.trim().length > 0) {

         for (const tr of table) {
            tr.classList.remove('select');
         }

         document.querySelector('#searchField').value = '';

         for (const tr of table) {

            if (tr.innerHTML.toLocaleLowerCase().includes(searchValue)) {
               tr.classList.toggle('select');
            }
         }
      }
   }
}
