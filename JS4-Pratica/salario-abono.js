const input = require('readline-sync');

let salario = input.questionInt("Digite o salário: ");
let abono = input.questionInt("Digite o abono: ");
let novoSalario = (salario + abono);
console.log(`Novo salário: ${novoSalario.toFixed(2)}`);


