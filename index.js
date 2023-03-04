//const prompt = require ("prompt-sync") ()  //const ou let - criar variaveis 

import PromptSync from "prompt-sync"
//import chalk from 'chalk'
const prompt = PromptSync()

const nome = prompt("Digite seu nome: ")

console.log(`Olá ${nome}!`) //usar crase `


//Temperatura
const temp = Number(prompt("Digite a temperatura: ")) //usar Number qaundo for trabalhar com número

if(temp > 38){
    console.log("Febre")
}else if (temp < 26) {
    console.log("Morreu")
}
else {
    console.log("Tudo ok")
}


//Exercicio Salario
const salario = Number(prompt("Digite o valor do seu salario: "))
const aumento = Number(prompt("Digite a porcentagem do aumento: "))


const novoSalario = salario*((aumento/100)+1)


console.log(`O novo salario é:${novoSalario}`)

//Exercicio Habilitação
const ano = Number(prompt("Digite seu ano de nascimento: "))

const anoAtual = new Date()
anoAtual.getFullYear

const idade = anoAtual.getFullYear() - ano

if(idade > 18){
    console.log("Pode Dirigir")
}else  {
    console.log("Não pode dirigir")
}
