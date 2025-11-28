const input = require('readline-sync');

let nota01 = input.questionFloat("Digite a 1ª nota: ");
let nota02 = input.questionFloat("Digite a 2ª nota: ");
let nota03 = input.questionFloat("Digite a 3ª nota: ");
let nota04 = input.questionFloat("Digite a 4ª nota: ");

let soma = nota01 + nota02 + nota03 + nota04;
let media = soma / 4;

console.log(`Media final: ${media.toFixed(1)}`);
