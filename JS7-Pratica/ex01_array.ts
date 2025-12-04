// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import input = require('readline-sync');

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    const cor = input.question("Digite o nome de uma cor: ");
    cores.push(cor);
}
console.log(`Cores adicionadas: ${cores.join(", ")}`);
console.log(`Cores ordenadas: ${cores.sort().join(", ")}`);
