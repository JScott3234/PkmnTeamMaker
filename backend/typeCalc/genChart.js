// Generate Chart For Testing

const data =
    [{ "name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": [] },
    { "name": "Fire", "immunes": [], "weaknesses": ["Fire", "Water", "Rock", "Dragon"], "strengths": ["Grass", "Ice", "Bug", "Steel"] },
    { "name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Fire", "Ground", "Rock"] },
    { "name": "Electric", "immunes": ["Ground"], "weaknesses": ["Electric", "Grass", "Dragon"], "strengths": ["Water", "Flying"] },
    { "name": "Grass", "immunes": [], "weaknesses": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "strengths": ["Water", "Ground", "Rock"] },
    { "name": "Ice", "immunes": [], "weaknesses": ["Fire", "Water", "Ice", "Steel"], "strengths": ["Grass", "Ground", "Flying", "Dragon"] },
    { "name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"] },
    { "name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass", "Fairy"] },
    { "name": "Ground", "immunes": ["Flying"], "weaknesses": ["Grass", "Bug"], "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"] },
    { "name": "Flying", "immunes": [], "weaknesses": ["Electric", "Rock", "Steel"], "strengths": ["Grass", "Fighting", "Bug"] },
    { "name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Psychic", "Steel"], "strengths": ["Fighting", "Poison"] },
    { "name": "Bug", "immunes": [], "weaknesses": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "strengths": ["Grass", "Psychic", "Dark"] },
    { "name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Fire", "Ice", "Flying", "Bug"] },
    { "name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Psychic", "Ghost"] },
    { "name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"] },
    { "name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Psychic", "Ghost"] },
    { "name": "Steel", "immunes": [], "weaknesses": ["Fire", "Water", "Electric", "Steel"], "strengths": ["Ice", "Rock", "Fairy"] },
    { "name": "Fairy", "immunes": [], "weaknesses": ["Fire", "Poison", "Steel"], "strengths": ["Fighting", "Dragon", "Dark"] }];

const typeOrder = [
    "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying",
    "psychic", "bug", "rock", "ghost", "dragon", "steel", "dark", "fairy"
];

const chart = [];

typeOrder.forEach(attackerName => {
    const attackerData = data.find(d => d.name.toLowerCase() === attackerName);
    const row = [];

    typeOrder.forEach(defenderName => {
        const defenderNameCap = defenderName.charAt(0).toUpperCase() + defenderName.slice(1);

        let multiplier = 1;
        if (attackerData.strengths.includes(defenderNameCap)) {
            multiplier = 2;
        } else if (attackerData.weaknesses.includes(defenderNameCap)) {
            multiplier = 0.5;
        } else if (attackerData.immunes.includes(defenderNameCap)) {
            multiplier = 0;
        }
        row.push(multiplier);
    });
    chart.push(row);
});

const fs = require('fs');
let output = "const typeChart = [\n";
chart.forEach((row, index) => {
    const rowString = JSON.stringify(row).replace(/\[/g, '    [').replace(/\]/g, '],');
    const typeName = typeOrder[index].charAt(0).toUpperCase() + typeOrder[index].slice(1);
    output += `${rowString} // ${typeName}\n`;
});
output += "];";
fs.writeFileSync('chart_fixed.txt', output);

