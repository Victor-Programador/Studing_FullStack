/**Escreva uma função que receba dois parametros. O primeiro parametro é o elemento que repetirá, enquanto que o segundo será o numero de vezes que haverá repetição. Um array será retornado.
 * 
 * Exemplos:
 * 
 * repetir("codigo", 2) // retornara ["código", "código"]
 * repetir(7, 3) // retornara [7, 7, 7]
 * 
 *
 */


function repetir(val1, val2){
    let resultado = []
    for(let i  = 0; i < val2; i++){
        resultado.push(val1)
    }
    return resultado
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))