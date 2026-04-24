/**Desenvolva uma função que receba uma string como parametro e retorne essa string somente com as consoantes, ou seja, sem as vogais 
 * 
 * Exemplos:
 * 
 * removerVogais("Cod3r") // retornara "Cd3r"
 * removerVogais("Fundamentos") // retornará "Fndmnts"
*/


function removerVogais(palavra){
    let novaFrase = palavra.split('')
    const resultado = novaFrase.filter(function(element){
        if(element.toLowerCase() != "a" && element.toLowerCase() != "e" && element.toLowerCase() != "i" && element.toLowerCase() != "o" && element.toLowerCase() != "u"){
            return element
        }
    })

    return resultado.join("")
}

console.log(removerVogais("Loire"))
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))