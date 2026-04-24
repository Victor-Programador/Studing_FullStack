/** Criar uma função que receba uma string como parametro e conte quantas palavras tem nela.
 * 
 * considere que todas as palavras só são separadas por um espaço.
 * 
 * Exemplos: 
 * 
 * contarPalavras("Sou uma frase") // retornará 3
 * contarPalavras("Me divirto apreendendo a programar") // retornara 5
*/

function contarPalavras(palavras){
    let newArray = palavras.split(' ')
    return newArray.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto apreendendo a programar"))