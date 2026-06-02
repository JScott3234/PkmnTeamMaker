const fs = require('fs');
const { getDefenseScoreList, getOffenseScore} = require('./offDefCalc');
const { getVulnerabilities, getResistances, types } = require('./typeCoverage');

// Get the score list (already sorted and formatted in offDefCalc)
const defscores = getDefenseScoreList();

const detailedData = defscores.map(item => {
    // item.name is formatted as "type1/type2: "
    // Remove the trailing ": " and split by "/"
    const namePart = item.name.replace(': ', '');
    const [type1, type2] = namePart.split('/');

    return {
        "id": `${types[type1]}${types[type2]}`,
        "primaryType": type1,
        "secondaryType": type2,
        "offScore": getOffenseScore(types[type1]) + getOffenseScore(types[type2]), // Score out of 20 to avoid monotype offensive bias (still occurs??)
        "defRating": item.score,
        "vulnerabilities": getVulnerabilities(type1, type2),
        "resistances": getResistances(type1, type2)
    };
});

// Write to JSON file
fs.writeFileSync('backend/typeCalc/typeData.json', JSON.stringify(detailedData, null, 4));

console.log('Successfully generated typeData.json with ' + detailedData.length + ' entries.');
