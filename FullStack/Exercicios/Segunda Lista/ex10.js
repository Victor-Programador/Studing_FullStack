/**Elabore uma função que recebe um numero como parametro e retorne uma string com o simbolo "+" na quantidade especificada no parametro.
 * 
 * Exemplos:
 * 
 * simboloMais(2) // retornara "++"
 * simboloMais(4) // retornara "++++"
 */


function simboloMais(val){
    let resultado = ''
    for(let i = 0; i < val; i++){
        resultado += '+'
    }
    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))