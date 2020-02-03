function toggle() {

    let div = document.querySelector('#extra');
    let button = document.querySelector('.button');

    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
        div.style.display = 'block';
    } else {
        button.innerHTML = 'More';
        div.style.display = 'none';
    }
}
