function create(words) {

   let contentDiv = document.querySelector('#content');

   for (const word of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerHTML = word;
      p.style.display = 'none';

      div.appendChild(p);

      div.addEventListener('click', () => {
         div.firstChild.style.display = 'block';
      })

      contentDiv.appendChild(div);
   }
}
