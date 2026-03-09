/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.   */

function negativos(vetor){
    let negativo = 0

    for(let numero of vetor){
        if(numero < 0){
            negativo++
        }
    }
    console.log(`Tem ${negativo} numeros negativos!`)
}

negativos([-1, -2, 3, 5, -5])