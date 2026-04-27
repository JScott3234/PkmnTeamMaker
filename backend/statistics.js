// Library Of Functions To Help With Statistical Analysis


/**
 * Converts a score to a viability score based on the maximum and minimum possible scores.
 * @param {number} score - The score to convert.
 * @param {number} maxScore - The maximum possible score.
 * @param {number} minScore - The minimum possible score.
 * @returns {number} The viability score.
 */
function viabilityScore(score, maxScore, minScore) {
    return (score - minScore) / (maxScore - minScore) * 10;
}

/**
 * Converts a score to an inverted viability score based on the maximum and minimum possible scores. Actually kinda useless
 * @param {number} score - The score to convert.
 * @param {number} maxScore - The maximum possible score.
 * @param {number} minScore - The minimum possible score.
 * @returns {number} The inverted viability score.
 */
function invertedViabilityScore(score, maxScore, minScore) {
    return (maxScore - score) / (maxScore - minScore) * 10;
}

module.exports = { viabilityScore, invertedViabilityScore };