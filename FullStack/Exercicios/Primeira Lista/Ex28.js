/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function ImparPar(vet){
    let vetor = vet
    let par = 0
    let impar = 0
    for(let i in vetor){
        if(vetor[i] % 2 == 0){
            par++
        }else{
            impar++
        }
    }console.log(`Par = ${par} \nimpar = ${impar}`)
}


ImparPar([1,2,3,4,6])