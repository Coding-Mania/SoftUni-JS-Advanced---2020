function solve() {

   let button = document.querySelector('button');

   let mainSection = document.querySelector('main section');
   let archive = document.querySelector('.archive-section ul');

   button.addEventListener('click', eventHandler);

   function eventHandler(e) {
      e.preventDefault();

      let creator = document.querySelector('#creator').value;
      let title = document.querySelector('#title').value;
      let category = document.querySelector('#category').value;
      let content = document.querySelector('#content').value;

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.innerHTML = title;

      let categoryP = document.createElement('p');
      categoryP.innerHTML = 'Category:';

      let creatorP = document.createElement('p');
      creatorP.innerHTML = 'Creator:';

      let strCreator = document.createElement('strong');
      strCreator.innerHTML = creator;

      creatorP.appendChild(strCreator);

      let strong = document.createElement('strong');
      strong.innerHTML = category;

      categoryP.appendChild(strong);

      let pContent = document.createElement('p');
      pContent.innerHTML = content;

      let btnDiv = createHTMLElement('div', ['buttons']);

      let delBtn = createHTMLElement('button', ['btn', 'delete'], { type: 'innerHTML', value: 'Delete' }, 'click', deleteHandler);
      let arhBtn = createHTMLElement('button', ['btn', 'archive'], { type: 'innerHTML', value: 'Archive' }, 'click', archiveHandler);

      btnDiv.appendChild(delBtn);
      btnDiv.appendChild(arhBtn);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(pContent);
      article.appendChild(btnDiv);

      mainSection.appendChild(article);
   }

   function deleteHandler() {
      mainSection.removeChild(this.parentNode.parentNode);
   }

   function archiveHandler() {

      let article = this.parentNode.parentNode.querySelector('h1').innerHTML;

      let li = document.createElement('li');
      li.innerHTML = article;
      archive.appendChild(li);

      let list = archive.querySelectorAll('li');

      let sortedItems  =  Array.from(list).sort((a, b) => a.textContent.localeCompare(b.textContent));

      sortedItems.forEach(e => archive.appendChild(e));
      mainSection.removeChild(this.parentNode.parentNode);
   }

   function createHTMLElement(tagName, classList, valuesInput, event, eventHandler) {
      let element = document.createElement(tagName);

      if (classList) {
         classList.forEach(e => {
            element.classList.add(e);

         });
      }

      if (valuesInput) {
         element[valuesInput.type] = valuesInput.value;
      }

      if (event) {
         element.addEventListener(event, eventHandler);
      }

      return element;
   }
}
