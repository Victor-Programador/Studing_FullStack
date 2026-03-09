/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores  */

function Calcular(a, b, c){
    switch(c){
        case "+":
            return `${a} + ${b} = ${a + b}`
        case "-":
            return `${a} - ${b} = ${a - b}`
        case "*":
            return `${a} x ${b} = ${a * b}`
        case "/":
            if(b === 0){
                return "Erro: Divisão por zero não é permitida!"
            }
            return `${a} / ${b} = ${a / b}`
        default:
            return "Só trabalhamos com esses Operadores: '+' = Soma; '-' = Subtração; '*' = Multplicação; '/' = Divisão "
    }
}

console.log(Calcular(2 , 2, "+"))
console.log(Calcular(2 , 2, "-"))
console.log(Calcular(2 , 2, "*"))
console.log(Calcular(2 , 2, "/"))
console.log(Calcular(2 , 0, "/"))
console.log(Calcular(2 , 2, "**"))