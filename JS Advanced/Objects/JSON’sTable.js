function solve(input) {
    const personsObj = input.map(x => JSON.parse(x));

    let table = content => `<table>\n${content}</table>`;
    let tableRow = content => `\t<tr>\n${content}\t</tr>\n`;
    let tableData = content => `\t\t<td>${content}</td>\n`;


    let result = personsObj.reduce((acc, row) => {
        let tableRowData = Object.values(row).reduce((accTd, td) => {
            return accTd + tableData(td);
        }, '')

        return acc + tableRow(tableRowData);

    }, '')

    return table(result);
}
