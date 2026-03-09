/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]

    for(let numero of vetor){
        if(numero > maior){
            maior = numero
        }

        if(numero < menor){
            menor = numero
        }
    }
    console.log(`Maior ${maior}`)
    console.log(`Menor ${menor}`)

}

maiorMenor([4,2,10,4,5,6])