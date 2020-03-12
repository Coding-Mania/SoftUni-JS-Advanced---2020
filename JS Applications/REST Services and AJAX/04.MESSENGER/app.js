function attachEvents() {

    let refreshBtn = document.querySelector('#refresh');
    let submitBtn = document.querySelector('#submit');

    async function refreshBtnEvent() {
        let textArea = document.querySelector('#messages');
        let messages = [];
        await fetch('https://messenger-e520b.firebaseio.com/messenger.json')
            .then(x => x.json())
            .then(x => Object.entries(x).forEach(element => {
                let { author, content } = element[1];
                messages.push(`${author}: ${content}`);
            }))

        textArea.innerHTML = messages.join('\n');
    }

    function submitEvent() {
        let authorInput = document.querySelector('#author');
        let contentInput = document.querySelector('#content');

        let author = authorInput.value;
        let content = contentInput.value;

        let obj = {
            author: author,
            content: content
        }

        authorInput.value = '';
        contentInput.value = '';

        fetch('https://messenger-e520b.firebaseio.com/messenger.json', {
            method: 'POST',
            body: JSON.stringify(obj)
        })
    }

    refreshBtn.addEventListener('click', refreshBtnEvent);
    submitBtn.addEventListener('click', submitEvent);
}

attachEvents();