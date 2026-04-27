

const typeData = require("../typeCalc/typeData.json");

/**
 * Builds a team of 6 pokemon with general type coverage.
 * @returns {Array} - An array of 6 pokemon with general type coverage.
 */
function buildTeam() {
    let team = [typeData[1], typeData[typeData.length - 1]];
    let typeCoverage = [];
    let i = 0;

    // For any pokemon the user has added to the team already, this tool is more of a suggestion engine to cover it.
    while (team[i] != null) {
        typeCoverage.push(team[i]["primary type"]);
        if (team[i]["secondary type"] && team[i]["secondary type"] !== "none") {
            typeCoverage.push(team[i]["secondary type"]);
        }
        i++;
    }

    // Should I prioritize type coverage?
    // Or should I prioritize stat spread/roles?
    // Test both strategies and compare results.
    // However, I feel the stat/roles may be the best priority upon examining the meta.

    // Per role, gotta do offensive and defensive calcs to get optimal pkmn typings (effectiveness vs defensiveness)
    for (i; i < 6; i++) {
        let typing = getBestType(typeCoverage);

        if (typing) {
            team.push(typing);
            // Maybe keep the resistances and weaknesses as a score? Rules to not go below a certain threshold.
            typeCoverage.push(typing["primary type"]);// more for defense, I wanna do offense
            if (typing["secondary type"] && typing["secondary type"] !== "none") {
                typeCoverage.push(typing["secondary type"]);// more for defense, I wanna do offense
            }
        }
    }
    return team;
}

// Helper Functions

// What if I made a randomizer that picked a type randomly, then checked for coverage and compared to a team score threshold?
function getBestType(typeCoverage) {
    if (!typeCoverage || typeCoverage.length === 0) {
        return typeData[0]; // Placeholder until a psuedo-random function is made.
    } else {
        // Find a type that isn't already covered
        for (let i = 0; i < typeData.length; i++) {
            const candidate = typeData[i];
            let isCovered = false;

            for (let j = 0; j < typeCoverage.length; j++) {
                if (candidate["primary type"] === typeCoverage[j] || candidate["secondary type"] === typeCoverage[j]) {
                    isCovered = true;
                    break;
                }
            }

            if (!isCovered) {
                return candidate;
            }
        }
        // Fallback if everything is covered
        return typeData[Math.floor(Math.random() * typeData.length)];
    }
}

console.log(buildTeam());
