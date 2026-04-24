/**Elabore uma função que recebe dois parametros: o primeiro é um array de numeros e o segundo é um numero que especifica uma quantidade de digitos. 
 * essa função deverá retornar somente aquels números do array que tem a quantidade de digitos indicada pelo segundo parameto
 * 
 * Exemplo:
 * 
 * filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornara [38, 10, 11]
 * filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) retornara [5, 9, 1]
 */

function filtrarPorQuantidadeDeDigitos(numeros, digito){
    let newArra = []

    numeros.forEach(element => {
        if(element.toString().length === digito){
            newArra.push(element)
        }
    });
    return newArra
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))