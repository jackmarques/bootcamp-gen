const input = require('readline-sync');

let salarioBruto = input.questionInt("Salário bruto: ");
let adicionalNoturno = input.questionInt("Adicional noturno: ");
let horasExtras = input.questionInt("Horas extras: ");
let descontos = input.questionInt("Descontos: ");
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salário Liquido: ${salarioLiquido.toFixed(2)}`);


