// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const input = require('readline-sync');

let valorA = input.questionInt("Digite o numero A: ");
let valorB = input.questionInt("Digite o numero B: ");
let valorC = input.questionInt("Digite o numero C: ");
let soma = valorA + valorB

if(soma > valorC){
    console.log(`\n${valorA} + ${valorB} = ${soma} > ${valorC}`);
    console.log("A soma de A + B é Maior do que C");  
} else if(soma < valorC){
    console.log(`\n${valorA} + ${valorB} = ${soma} < ${valorC}`);
    console.log("A soma de A + B é Menor do que C"); 
} else{
    console.log(`\n${valorA} + ${valorB} = ${soma} = ${valorC}`);
    console.log("A soma de A + B é igual a C"); 
}

