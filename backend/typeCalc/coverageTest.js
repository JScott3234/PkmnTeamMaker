const { getEffectiveness } = require('./typeCoverage');

console.log('Running Type Effectiveness Tests...');

const tests = [
    // Single Type Tests
    { attacker: 'normal', defender: 'ghost', expected: 0 },
    { attacker: 'fire', defender: 'grass', expected: 2 },
    { attacker: 'fire', defender: 'water', expected: 0.5 },
    { attacker: 'normal', defender: 'ghost', expected: 0 },
    { attacker: 'ghost', defender: 'normal', expected: 0 },
    { attacker: 'fairy', defender: 'dragon', expected: 2 },
    { attacker: 'electric', defender: 'ground', expected: 0 },
    { attacker: 'psychic', defender: 'fighting', expected: 2 },

    // Dual Type Tests
    { attacker: 'fire', defender: 'grass', defender2: 'ice', expected: 4 },
    { attacker: 'fire', defender: 'water', defender2: 'rock', expected: 0.25 },
    { attacker: 'normal', defender: 'ghost', defender2: 'psychic', expected: 0 },
    { attacker: 'ghost', defender: 'normal', defender2: 'dark', expected: 0 },
    { attacker: 'fairy', defender: 'dragon', defender2: 'steel', expected: 1 },
    { attacker: 'electric', defender: 'ground', defender2: 'flying', expected: 0 },
    { attacker: 'psychic', defender: 'fighting', defender2: 'poison', expected: 4 },

];

let passed = 0;
tests.forEach(test => {

    if (test.defender2 == null) {
        test.defender2 = test.defender;
    }

    const result = getEffectiveness(test.attacker, test.defender, test.defender2);
    if (result === test.expected) {
        console.log(`PASS: ${test.attacker} vs ${test.defender}/${test.defender2}-> ${result}`);
        passed++;
    } else {
        console.error(`FAIL: ${test.attacker} vs ${test.defender}/${test.defender2} -> Expected ${test.expected}, got ${result}`);
    }
});

console.log(`\nTests Completed: ${passed}/${tests.length} passed.`);
if (passed !== tests.length) {
    process.exit(1);
}

