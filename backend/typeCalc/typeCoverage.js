// Calulating Type Coverage of a Pokemon Team

// Pokemon Types - listed for double-sided lookups
const types = {
    normal: 0, 0: "normal",
    fire: 1, 1: 'fire',
    water: 2, 2: 'water',
    grass: 3, 3: 'grass',
    electric: 4, 4: 'electric',
    ice: 5, 5: 'ice',
    fighting: 6, 6: 'fighting',
    poison: 7, 7: 'poison',
    ground: 8, 8: 'ground',
    flying: 9, 9: 'flying',
    psychic: 10, 10: 'psychic',
    bug: 11, 11: 'bug',
    rock: 12, 12: 'rock',
    ghost: 13, 13: 'ghost',
    dragon: 14, 14: 'dragon',
    steel: 15, 15: 'steel',
    dark: 16, 16: 'dark',
    fairy: 17, 17: 'fairy'
}

// Expressing Type Advantages
// 0: No effect, 0.5: Not very effective, 1: Normal, 2: Super effective
const typeChart = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 0.5, 1, 1], // Normal
    [1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 1], // Fire
    [1, 2, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1], // Water
    [1, 0.5, 2, 0.5, 1, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 0.5, 1, 1], // Grass
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1], // Electric
    [1, 0.5, 0.5, 2, 1, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 0.5, 1, 1], // Ice
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5], // Fighting
    [1, 1, 1, 2, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 0, 1, 2], // Poison
    [1, 2, 1, 0.5, 2, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 2, 1, 1], // Ground
    [1, 1, 1, 2, 0.5, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 0.5, 1, 1], // Flying
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 0, 1], // Psychic
    [1, 0.5, 1, 2, 1, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 0.5, 2, 0.5], // Bug
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 0.5, 1, 1], // Rock
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 0.5, 1], // Ghost
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 0], // Dragon
    [1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1, 2], // Steel
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 1, 0.5, 0.5], // Dark
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 0.5, 2, 1], // Fairy
];

/**
 * Calculates the damage multiplier for an attacking type against a defending type.
 * @param {string} attacker - Used to index the row (e.g. 'fire').
 * @param {string} defender - Used to index the column for first defensive type.
 * @param {string} defender2 - used to index the column for second defensive type.
 * @returns {number} The effectiveness multiplier (0, 0.5, 1, or 2, overloaded function returns [a,d] * [a,d2] for dual type nuances).
 */
function getEffectiveness(attacker, defender, defender2) {
    const attackerIndex = types[attacker.toLowerCase()];
    const defenderIndex = types[defender.toLowerCase()];
    const defender2Index = types[defender2.toLowerCase()];

    if (attackerIndex === undefined || defenderIndex === undefined || defender2Index === undefined) {
        console.error(`Invalid type: ${attacker} or ${defender} or ${defender2}`);
        return 1;
    }

    if (defenderIndex != defender2Index) {
        return typeChart[attackerIndex][defenderIndex] * typeChart[attackerIndex][defender2Index];
    } else {
        return typeChart[attackerIndex][defenderIndex];
    }
}

// Forgor to iterate on these ones below :(

/**
 * Gets the list of Type Disadvantages for a Dual Typing
 * TODO: Expand to distinguish mults 1.5, 2, 2.5, 3, 3.5, and 4
 * TODO: Get the severity of each vulnerability by comparing it with the most common move typings by chance of use (STABs to number of moves)
 * @param {String} defender - first type
 * @param {String} defender2 - second type
 * @returns {Array} - the set of 2x mults in the chart for typing
 */
function getVulnerabilities(defender, defender2) {
    let vulns = [];
    let i = 0; // used to represent an attack of each type
    while (i < 18) {
        if ((typeChart[i][types[defender]] * typeChart[i][types[defender2]]) > 1) {
            vulns.push(types[i]);
        }
        i++;
    }

    return vulns;
}

// raw number
function getVulnerabilityNum(defender, defender2) {
    let vulns = 0;
    let i = 0; // used to represent an attack of each type
    while (i < 18) {
        if ((typeChart[i][types[defender]] * typeChart[i][types[defender2]]) > 1) {
            vulns++;
        }
        i++;
    }

    return vulns;
}

/**
 * Gets the list of Type Resistances for a Dual Typing
 * TODO: Expand this to distingiush between 1 > x > 0 and 0
 * TODO: Get the usefulness of each resistance by comparing it with the most common move typings by chance of use (STABs to number of moves)
 * @param {String} defender - first type
 * @param {String} defender2 - second type
 * @returns {Array} - the set of 0.5x mults in the chart for typing
 */
function getResistances(defender, defender2) {
    let res = [];
    let i = 0; // used to represent an attack of each type
    while (i < 18) {
        if ((typeChart[i][types[defender]] * typeChart[i][types[defender2]]) < 1) {
            res.push(types[i]);
        }
        i++;
    }
    return res;
}

// Overloaded 
function getResistanceNum(defender, defender2) {
    let res = 0;
    let i = 0; // used to represent an attack of each type
    while (i < 18) {
        if ((typeChart[i][types[defender]] * typeChart[i][types[defender2]]) < 1) {
            res++;
        }
        i++;
    }
    return res;
}

console.log(getResistances("fairy", "steel"));
console.log(getVulnerabilities("fairy", "steel"));

module.exports = { types, typeChart, getEffectiveness, getResistances, getVulnerabilities };
