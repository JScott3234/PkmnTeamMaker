const typeData = require("../typeCalc/typeData.json");
const { getVulnerabilities, getResistances } = require("../typeCalc/typeCoverage");

// This is meant for assisting the Team Building process - makes the team based on metrics the user desires

// later get these to be statisical percentiles of the data set
let defThreshold = 6.0; // Constraints that can be adjusted later by users on the web page
let offThreshold = 360;

// May be implemented later in build.js - user-given constraints
function getOptimalTypings(){
    let ans = 0;
    let rating = 0;
    for(let i = 0; i < typeData.length; i++){
        //let tempRating = typeData[i].offScore * typeData[i].defRating; // biased toward defense - maybe get a rating above 5 as a constraint
        if(typeData[i].defRating > defThreshold && typeData[i].offScore >= offThreshold){
            console.log(typeData[i]);
        } else {
            continue;
        }
    }
    return;
}

function getCounterMoveTypes(typeData){
    let counterTypes = [];
    for(let i = 0; i < typeData.vulnerabilities.length; i++){
        // get least moves needed to counter vulnerabilities - coverage test each type, find commonalilties, sort by coverage
    }
    return counterTypes;
}

//console.log(getOptimalTypings());