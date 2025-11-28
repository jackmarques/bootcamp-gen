const input = require('readline-sync');

let numero1 = input.questionFloat("Numero 01: ")
let numero2 = input.questionFloat("Numero 02: ")
let numero3 = input.questionFloat("Numero 03: ")
let numero4 = input.questionFloat("Numero 04: ")

let diferenca = (numero1 * numero2) - (numero3 * numero4);
console.log(`Diferença: ${diferenca.toFixed(1)}`);


