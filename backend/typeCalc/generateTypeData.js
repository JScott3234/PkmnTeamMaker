const fs = require('fs');
const { getDefenseScoreList } = require('./offDefCalc');
const { getVulnerabilities, getResistances, types } = require('./typeCoverage');

// Get the score list (already sorted and formatted in offDefCalc)
const scores = getDefenseScoreList();

const detailedData = scores.map(item => {
    // item.name is formatted as "type1/type2: "
    // Remove the trailing ": " and split by "/"
    const namePart = item.name.replace(': ', '');
    const [type1, type2] = namePart.split('/');

    return {
        "id": `${types[type1]}${types[type2]}`,
        "primary type": type1,
        "secondary type": type2,
        "offensive score": 0, // Placeholder
        "defensive score": item.score,
        "vulnerabilities": getVulnerabilities(type1, type2),
        "resistances": getResistances(type1, type2)
    };
});

// Write to JSON file
fs.writeFileSync('backend/typeCalc/typeData.json', JSON.stringify(detailedData, null, 4));

console.log('Successfully generated typeData.json with ' + detailedData.length + ' entries.');
