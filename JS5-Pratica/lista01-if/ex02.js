// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const input = require('readline-sync');

let numero = input.questionInt("Digite um número: ")
let tipo, sinal

if (numero === 0){
    console.log(`O numero ${numero} é par e neutro (nem positivo nem negativo)!`);
} else{
    tipo = numero % 2 === 0 ? 'par' : 'ímpar';
    sinal = numero > 0 ? 'positivo' : 'negativo';
    console.log(`O número ${numero} é ${tipo} e ${sinal}!`);
} 
