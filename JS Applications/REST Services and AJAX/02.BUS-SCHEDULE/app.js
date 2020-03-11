function solve() {

    let infoSpan = document.querySelector('.info');


    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');

    let currentStop = '';

     function getStop(id) {
        if (id === null || id === undefined) {
            return fetch('https://bus-schedule-afef3.firebaseio.com/schedule/depot.json')
                .then(x => x.json())
                .then(x => currentStop = x);
        }

        return fetch(`https://bus-schedule-afef3.firebaseio.com/schedule/${id}.json`)
            .then(x => x.json())
            .then(x => currentStop = x);
    }

    function toggleButtons() {

        if (departBtn.disabled === true) {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } else {
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

   async function depart() {

        await getStop(currentStop.next);

        infoSpan.innerHTML = `Next stop ${currentStop.name}`;
        toggleButtons();
    }

    function arrive() {

        infoSpan.innerHTML = `Arriving at ${currentStop.name}`;
        toggleButtons();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
