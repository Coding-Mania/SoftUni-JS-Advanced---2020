function getInfo() {

    let result = document.querySelector('#stopName');
    let ul = document.querySelector('#buses');

    function validate(x) {
        if (x.status !== 200) {
            throw new Error('No data');
        }

        return x;
    }

    let id = document.querySelector('#stopId').value.trim(' ');

    fetch(`https://test-415e0.firebaseio.com/businfo/${id}.json`)
        .then(x => validate(x))
        .then(x => x.json())
        .then(x => {

            result.innerHTML = '';
            ul.innerHTML = '';
            result.innerHTML = x.name;

            Object.entries(x.buses).forEach(([busId, time]) => {
                let li = document.createElement('li');
                li.innerHTML = `Bus ${busId} arrives in ${time} minutes`;

                ul.appendChild(li);
            })
        })
        .catch(x => {
            ul.innerHTML = '';
            result.innerHTML = 'Error';
            console.error(x.message);
        });
}