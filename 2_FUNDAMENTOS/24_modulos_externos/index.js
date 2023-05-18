const minimist = require('minimist');

// modulo externo

const args = minimist(process.argv.slice(2));

// modulo interno

const soma = require('./soma').soma

soma(2, 2)

