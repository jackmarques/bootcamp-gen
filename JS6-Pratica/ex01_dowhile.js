// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3. Veja o exemplo abaixo:

const input = require('readline-sync');
let numero;
let soma = 0;
let total = 0

do {
    numero = input.questionInt("Digite um número: ");
    
    if(numero % 3 === 0 && numero !== 0){
        soma += numero
        total++
    }

} while (numero !== 0);

const media = soma / total;
console.log(`A média dos múltiplos de 3 é: ${media}`);



