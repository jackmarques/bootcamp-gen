// Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

import input = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 1; i <= 10; i++) {
    const num = input.questionInt(`Digite o ${i} numero: `);
    numeros.add(num);
}
console.log("\nDados do Set: ");

for(let num of numeros){
    console.log(num);
}

