// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

const input = require('readline-sync');

let numero1 = input.questionFloat("Digite o 1º numero: ")
let numero2 = input.questionFloat("Digite o 2º numero: ")
let codOperacao = input.questionInt("Codigo da operacao: ")

switch (codOperacao) {
    case 1:
        let soma = numero1 + numero2;
        console.log(`\nSoma: ${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${soma.toFixed(1)}`);
        break

    case 2:
        let subtracao = numero1 - numero2;
        console.log(`\nSubtração: ${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${subtracao.toFixed(1)}`);
        break

    case 3:
        let multiplicacao = numero1 * numero2;
        console.log(`\nMultiplicação: ${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${multiplicacao.toFixed(1)}`);
        break

    case 4:
        let divisao = numero1 / numero2;
        console.log(`\nDivisão: ${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${divisao.toFixed(1)}`);
        break

    default:
        console.log("Operação Inválida!");
        
        break;
}

