function solve() {

   let table = document.querySelector('.minimalistBlack tbody');
   let prev = null;

   table.addEventListener('click', (e) => {
      let current = e.target.parentNode;

      if (prev && prev !== current) {
         prev.style.backgroundColor = '';
      }

      current.style.backgroundColor = current.style.backgroundColor ? '' :'rgb(65, 63, 94)' ;
      prev = current;
   });
}
