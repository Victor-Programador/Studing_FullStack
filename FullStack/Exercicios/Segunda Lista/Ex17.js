/** Escreva uma função que receba um array de numeros e retornará a soma de todos os números desse array.
 * 
 * Exemplos:
 * 
 * somarNumeros([10, 10, 10]) // retornará 30
 * somarNumeros([15, 15, 15, 15]) // retornará 60
 * 
 */

function somarNumeros (numeros){
    let newArray = numeros[0]

    for(let i = 1; i < numeros.length; i++){
        newArray += numeros[i]
    }
    return newArray

}


console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))