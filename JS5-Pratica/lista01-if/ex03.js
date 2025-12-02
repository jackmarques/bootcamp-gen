// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:

const input = require('readline-sync');

let nome = input.question("Nome do doador: ");
let idade = input.questionInt("Idade: ");
let doador = input.question("Primeira doação (sim/nao)? ")
let apto

if(idade < 18 || idade > 69){
    apto = false
} else if(idade >= 60 && idade <= 69 && doador === 'sim'){
    apto = false
} else{
    apto = true
}
console.log(
  apto 
    ? `${nome} está Apto para doar sangue!` 
    : `${nome} não está apto para doar sangue!`
);
