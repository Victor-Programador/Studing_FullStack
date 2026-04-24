/**
 * Elabore uma função que receba um array de números e retorne um array
 * que tenha todos os números que são pares e que também tenham índices pares.
 *
 * Lembre-se que um número é par porque é divisível por 2, ou seja,
 * o resto da divisão dele por 2 é zero.
 *
 * Exemplos:
 *
 * receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
 * receberSomenteOsParesDeIndicesPares([100, 70, 22, 431]) // retornará [100, 22]
  */

function receberSomenteOsParesDeIndicesPares(valores){
    let newArray = []
    let divisao
    let divIndice
    for(let i = 0; i < valores.length; i++){
        divisao = valores[i] % 2
        divIndice = i % 2
        if(divisao == 0  && divIndice == 0){
            newArray.push(valores[i])
        }
    }
    return newArray
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([100, 70, 22, 431]))