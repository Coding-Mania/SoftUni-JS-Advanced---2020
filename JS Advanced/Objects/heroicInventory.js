function solve(arr) {

    const heroes = [];

    arr.forEach(element => {
        const heroInfo = element.split(' / ');
        let name = heroInfo.shift();
        let level = +heroInfo.shift();

        let items = heroInfo.pop() || [];

        if (items.length > 0) {
            items = items.split(', ');
        }

        const currentHero = {
            "name": name,
            "level": level,
            "items": items
        };

        heroes.push(currentHero);
    });

    return JSON.stringify(heroes);
}
