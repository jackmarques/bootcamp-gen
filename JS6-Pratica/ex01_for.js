// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:


const input = require('readline-sync');

let numerosPares = 0
let numerosImpares = 0


for(let i = 1; i <= 10; i++){
    let numero = input.questionInt(`Digite o ${i} numero: `)

    if(numero % 2 === 0){
        numerosPares++
    } else{
        numerosImpares++
    }
}
console.log(`Total de números pares: ${numerosPares}`);
console.log(`Total de números ímpares: ${numerosImpares}`);


