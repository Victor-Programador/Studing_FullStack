/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.  */

function media(vetor){
    let soma = 0
    for(let numero of vetor){
        soma += numero
    }
    console.log(soma / vetor.length)
}


media([2, 2, 5])