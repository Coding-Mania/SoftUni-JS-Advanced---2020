function solve(kingdomsArgs, warArgs) {

    let kingdoms = kingdomsArgs.reduce((acc, info) => {

        if (!acc[info.kingdom]) {

            acc[info.kingdom] = { [info.general]: {} };

            Object.defineProperties(acc[info.kingdom], {
                'allWins': {
                    value: 0,
                    enumerable: false,
                    writable: true
                },
                'allLost': {
                    value: 0,
                    enumerable: false,
                    writable: true
                }
            })

            Object.defineProperties(acc[info.kingdom][info.general], {
                'army': {
                    value: 0,
                    writable: true,
                },
                'wins': {
                    value: 0,
                    writable: true,
                    enumerable: false
                },
                'losses': {
                    value: 0,
                    writable: true,
                    enumerable: false
                }
            })
        } else if (!acc[info.kingdom][info.general]) {

            acc[info.kingdom][info.general] = {};

            Object.defineProperties(acc[info.kingdom][info.general], {
                'army': {
                    value: 0,
                    writable: true,
                },
                'wins': {
                    value: 0,
                    writable: true,
                    enumerable: false
                },
                'losses': {
                    value: 0,
                    writable: true,
                    enumerable: false
                }
            })
        }

        acc[info.kingdom][info.general].army += info.army;

        return acc;

    }, {})

    warArgs.forEach(element => {

        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = element;

        if (attackingKingdom !== defendingKingdom) {

            if (kingdoms[attackingKingdom][attackingGeneral].army !== kingdoms[defendingKingdom][defendingGeneral].army) {

                let winer = kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army
                    ? kingdoms[attackingKingdom][attackingGeneral] : kingdoms[defendingKingdom][defendingGeneral];

                let lost = kingdoms[attackingKingdom][attackingGeneral].army < kingdoms[defendingKingdom][defendingGeneral].army
                    ? kingdoms[attackingKingdom][attackingGeneral] : kingdoms[defendingKingdom][defendingGeneral];


                let winerKingdom = kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army
                    ? kingdoms[attackingKingdom] : kingdoms[defendingKingdom];

                let lostKingdom = kingdoms[attackingKingdom][attackingGeneral].army < kingdoms[defendingKingdom][defendingGeneral].army
                    ? kingdoms[attackingKingdom] : kingdoms[defendingKingdom];

                winer.wins++;
                lost.losses++;
                winerKingdom.allWins++;
                lostKingdom.allLost++;

                winer.army += Math.round(winer.army * 0.1);
                lost.army -= Math.round(lost.army * 0.1);
            }
        }
    })

    let sotredKingdoms = Object.keys(kingdoms).sort((a, b) => {
        return kingdoms[b].allWins - kingdoms[a].allWins 
        || kingdoms[a].allLost - kingdoms[b].allLost 
        || a.localeCompare(b);
    })

    let winner = Object.keys(kingdoms[sotredKingdoms[0]]).sort((a, b) => {
        return kingdoms[sotredKingdoms[0]][b].army - kingdoms[sotredKingdoms[0]][a].army 
        ||kingdoms[sotredKingdoms[0]][b].wins - kingdoms[sotredKingdoms[0]][a].wins 
        || kingdoms[sotredKingdoms[0]][a].losses - kingdoms[sotredKingdoms[0]][b].losses 
        || a.localeCompare(b);
    });

    console.log(`Winner: ${sotredKingdoms[0]}`);

    winner.forEach(e => {
        console.log(`/\\general: ${e}`);
        console.log(`---army: ${kingdoms[sotredKingdoms[0]][e].army}`);
        console.log(`---wins: ${kingdoms[sotredKingdoms[0]][e].wins}`);
        console.log(`---losses: ${kingdoms[sotredKingdoms[0]][e].losses}`);
    })
}
solve(
    [
        { kingdom: 'Maiden Way', general: 'Merek', army: 0 },
        { kingdom: 'Stonegate', general: 'Ulric', army: 0 },
        { kingdom: 'Stonegate', general: 'Doran', army: 0 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
        { kingdom: 'Maiden Way', general: 'Berinon', army: 0 }
    ],
    [
        ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
        ['Stonegate', 'Ulric', 'Stonegate', 'Doran'],
        ['Stonegate', 'Doran', 'Maiden Way', 'Merek'],
        ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
        ['Maiden Way', 'Berinon', 'Stonegate', 'Ulric']
    ]
);