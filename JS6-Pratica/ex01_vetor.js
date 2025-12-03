// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
// Todos os elementos dos índices ímpares do vetor 
// Todos os elementos do vetor que são números pares
// A Soma de todos os elementos do vetor
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

const input = require('readline-sync')

let vetor = [];
let pares = [];
let indicesImpares = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let numero = input.questionInt(`Digite o ${i + 1}º número: `);
    
    vetor.push(numero);
    soma += numero;

    if (numero % 2 === 0) {
        pares.push(numero);
    }

    if (i % 2 !== 0) {
        indicesImpares.push(numero);
    }
}

let media = soma / vetor.length;

console.log(`\nÍndices ímpares: ${indicesImpares}`);
console.log(`Pares: ${pares}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);

