// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const input = require('readline-sync');

let item = input.questionInt("Codigo do produto: ");
let quantidade = input.questionInt("Quantidade: ");
let valorUni, valorTotal

switch (item) {
    case 1:
        valorUni = 10
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: Cachorro Quente \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break;

    case 2:
        valorUni = 15
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: X-Salada \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break

    case 3:
        valorUni = 18
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: X-Bacon \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break

    case 4:
        valorUni = 12
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: Bauru \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break

    case 5:
        valorUni = 8
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: Refrigerante \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break

    case 6: 
    valorUni = 13
        valorTotal = valorUni * quantidade
        console.log(`\nProduto: Suco de Laranja \nValor unitário: R$ ${valorUni.toFixed(2)} \nValor total: R$ ${valorTotal.toFixed(2)}`
        );
        break

    default:
        console.log("Digite um código válido");
        
        break;
}
