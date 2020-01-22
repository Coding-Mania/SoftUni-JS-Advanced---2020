function solve(input) {
    const personsObj = input.map(x => JSON.parse(x));

    console.log('<table>');

    personsObj.forEach(e => {
        let str = (`\t<tr>\n\t\t<td>${e['name']}</td>\n\t\t<td>${e['position']}</td>\n\t\t<td>${e['salary']}</td>\n\t</tr>`);

        console.log(str);
    });

    console.log('</table>');
}
