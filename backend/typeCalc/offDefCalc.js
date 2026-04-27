//Calcualations of Offensive and Defensive Types -  O(n^2*log(n)) complexity

// To Note: 
// - Abilites are not yet reflected in these calculations
// - Moves are not yet reflected in these calculations
// - Normal Type moves, and moves inflicting status effects are not yet reflected in these calculations as they are heavily nuanced.

// TODO: create a JSON file for listing each dual type with added defense scores, add single types for offensive scores: all for easy access


const { getEffectiveness, types } = require('./typeCoverage');
const { viabilityScore } = require('../statistics');

/**
 * Calculates the offensive score of a move compared to all possible dual types.
 * @param {number} move - The move type to calculate the score of.
 * @returns {number} The offensive score of the move.
 */
function getOffenseScore(move) {
    let score = 0;
    for (let type1 = 0; type1 < 18; type1++) {
        for (let type2 = 0; type2 < type1; type2++) {
            score += getEffectiveness(types[move], types[type1], types[type2]);
        }
    }
    return score;
}

/**
 * Calculates the defensive score of a dual type compared to all possible offensive types.
 * @param {number} defender - The first type of the pokemon to calculate the score of.
 * @param {number} defender2 - The second type of the pokemon to calculate the score of.
 * @returns {number} The defensive score of the pokemon.
 */
function getDefenseScore(defender, defender2) {
    let score = 0;
    for (let type1 = 0; type1 < 18; type1++) {
        score += getEffectiveness(types[type1], types[defender], types[defender2]);
    }
    return score;
}

/**
 * Generates a list of all move types and their offensive scores.
 * @returns {Array} An array of objects containing the move type and its offensive score, sorted from highest to lowest.
 */
function getOffenseScoreList() {
    let scores = [];
    let move = 0;
    while (move < 18) {
        scores.push({ name: `${types[move]}: `, score: getOffenseScore(move) });
        move++;
    }

    /* Making a Statistic To Represent Values Based on a 1-10 Scale*/
    scores.sort((a, b) => b.score - a.score); // returns sorted list (highest to lowest)
    let maxScore = scores[0].score;
    let minScore = scores[scores.length - 1].score;
    scores = scores.map(item => ({ name: item.name, score: viabilityScore(item.score, maxScore, minScore) }));
    return scores;
}

/**
 * Generates a list of all dual types and their defensive scores.
 * @returns {Array} An array of objects containing the dual type and its defensive score, sorted from highest to lowest.
 */
function getDefenseScoreList() {
    let scores = [];
    let type1 = 0;
    while (type1 < 18) {
        let type2 = 0;
        while (type2 <= type1) {
            scores.push({ name: `${types[type1]}/${types[type2]}: `, score: getDefenseScore(type1, type2) });
            type2++;
        }
        type1++;
    }
    /* Making a Statistic To Represent Values Based on a 1-10 Scale*/
    scores.sort((a, b) => a.score - b.score); // returns sorted list (lowest to highest as def is inverse of off)
    let maxScore = scores[0].score;
    let minScore = scores[scores.length - 1].score;
    scores = scores.map(item => ({ name: item.name, score: viabilityScore(item.score, maxScore, minScore) }));
    return scores;
}

//console.log(getOffenseScoreList()); //Debug
//console.log(getDefenseScoreList()); //Debug

// TODO: Use JSON to store values instead of txt files
/*const fs = require('fs');
const defOut = getDefenseScoreList();
const defOutStr = defOut.map(item => `${item.name}${item.score}`).join('\n');
fs.writeFileSync('defenseScores.txt', defOutStr, 'utf8');

const offOut = getOffenseScoreList();
const offOutStr = offOut.map(item => `${item.name}${item.score}`).join('\n');
fs.writeFileSync('offenseScores.txt', offOutStr, 'utf8');
*/

module.exports = { getOffenseScoreList, getOffenseScore, getDefenseScoreList, getDefenseScore };