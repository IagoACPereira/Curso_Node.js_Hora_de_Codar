// npm init

//npm install minimist (Ajuda a ler argumentos via linha de comando)

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];

const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`Seu nome é ${nome} e sua profissão é ${profissao}`);

//PS C:\Users\talit\OneDrive - Telefonica\Curso-Nodejs-Udemy\2_FUNDAMENTOS\24_modulos_externos> node .\index.js --nome=Iago --profissao=programador