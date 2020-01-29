function solve() {
   let sendButton = document.getElementById('send');

   sendButton.addEventListener('click', addContent);

   function addContent() {

      let content = document.getElementById('chat_input').value;

      if (content.length > 0) {

         let div = document.getElementById('chat_messages');

         let messageDiv = document.createElement('div');
         messageDiv.classList.add('message');
         messageDiv.classList.add('my-message');
         messageDiv.textContent = content;

         div.appendChild(messageDiv);

         document.getElementById('chat_input').value = '';
      }
   }
}
