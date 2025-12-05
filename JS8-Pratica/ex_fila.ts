// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.


import { Queue } from './Queue';
import input from "readline-sync";

const clientes: Queue<string> = new Queue<string>();

let opcao: number, cliente: string;

do {
    console.log('******************************');
    console.log('1 - Adicionar novo cliente');
    console.log('2 - Listar clientes');
    console.log('3 - Próximo da vez');
    console.log('0 - Sair');
    console.log('******************************');
    opcao = input.questionInt('Escolha uma opcao: ')

    switch (opcao) {
        case 1:
            cliente = input.question('\nNome do novo cliente: ');
            clientes.enqueue(cliente);
            console.log("\nCliente adicionado");
            break;

        case 2:
            if (clientes.isEmpty()) {
                console.log("\nFila vazia");
            } else {
                console.log("\nClientes na fila de espera:");
                clientes.printQueue();
            }
            break;

        case 3:
            const proximo = clientes.dequeue();
            if (proximo !== undefined) {
                console.log(`\nPróximo da fila: ${proximo}`);
            } 
            break;

        case 0:
            console.log("\nObrigada por usar nossos serviços!");
            break;

        default:
            console.log("Digite uma opção válida");
            
    }

} while (opcao !== 0);
