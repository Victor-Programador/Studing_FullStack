/*
01)Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. 
*/

function calc(a, b){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b


    console.log(`Voce colocou os valores ${a} e ${b} para serem somados, subtraidos, multiplicados e divididos. Aqui esta o resultado: `)
    console.log(`Soma ${a} + ${b} = ${soma}`)
    console.log(`Subtração de ${a} - ${b} = ${subtracao}`)
    console.log(`Multiplicação de ${a} * ${b} = ${multiplicacao}`)
    console.log(`Divisão de ${a} / ${b} = ${divisao}`)
}

calc(10, 5)