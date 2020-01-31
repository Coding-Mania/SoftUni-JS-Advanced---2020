function solve() {

    let button = document.querySelector('button');
    let list = document.querySelectorAll('ol li');

    console.log(list)

    button.addEventListener('click', eventHandler);

    function eventHandler() {
        let name = document.querySelector('input').value;

        if (name.length > 0) {

            document.querySelector('input').value = '';

            let index = name[0].toLocaleUpperCase().charCodeAt(0) - 65;

            name = name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();

            let result = list[index].innerHTML.length > 0 ? list[index].innerHTML.split(', ') : [];

            result.push(name);
            list[index].innerHTML = result.join(', ');
        }
    }
}
