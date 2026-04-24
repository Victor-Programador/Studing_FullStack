/**Crie uma função que receba um array e retorne o primeiro e o ultimo elemento desse array como um novo array:
 * 
 * Exemplo: 
 * 
 * receberPrimeiroEUltimoElemento([7, 14, "Olá"]) // retornara [7, "Olá"] 
 * receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornara [-100, 16] 
 */


function receberPrimeiroEUltimoElemento(elemento){
    const newArray = []
    let i = elemento.length
    newArray.push(elemento[0])
    newArray.push(elemento[i - 1])
    return newArray
}

console.log(receberPrimeiroEUltimoElemento([1, 2, 8]))
console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))