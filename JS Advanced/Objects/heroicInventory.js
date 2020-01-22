function solve(arr) {

    const heroes = [];

    arr.forEach(element => {
        const heroInfo = element.split(' / ');
        let name = heroInfo.shift();
        let level = +heroInfo.shift();

        let items = heroInfo[0] ? heroInfo[0].split(', ') : [];

        const currentHero = {
            "name": name,
            "level": level,
            "items": items
        };

        heroes.push(currentHero);
    });

    return JSON.stringify(heroes);
}
