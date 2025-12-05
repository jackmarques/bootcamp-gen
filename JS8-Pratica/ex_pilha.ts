// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.


import { Stack } from "./Stack";
import input from "readline-sync";

const livros: Stack<string> = new Stack<string>();

let opcao: number, livro: string;

do {
    console.log('******************************');
    console.log('1 - Adicionar novo livro na pilha');
    console.log('2 - Listar todos os livros');
    console.log('3 - Retirar livro da pilha');
    console.log('0 - Sair');
    console.log('******************************');
    opcao = input.questionInt('Escolha a opcao desejada: ')

    switch (opcao) {
        case 1:
            livro = input.question('\nNome do livro: ');
            livros.push(livro);
            console.log("\nLivro adicionado");
            break;

        case 2:
            if (livros.isEmpty()) {
                console.log("\nPilha vazia");
            } else {
                console.log("\nLista de livros na pilha:");
                livros.printStack();
            }
            break;

        case 3:
            const retirar = livros.pop();
            if (retirar !== undefined) {
                console.log(`\nLivro retirado da pilha: ${retirar}`);
            } 
            break;

        case 0:
            console.log("\nObrigada por usar nossos serviços!");
            break;

        default:
            console.log("Digite uma opção válida");
            
    }

} while (opcao !== 0);