/**A fim de criar um mecanismo de busca para sua aplicação, voce precisa iniciar criando uma função para identificar palavras semelhantes.
 * 
 * Escreva uma função que recebe como primeiro parametro uma palavra e, como segundo parametro, um array de strings. 
 * A função deverá filtrar as palavras do array que contem nelas a string do porimeiro parametro.
 * 
 * Exemplos:
 * 
 * buscarPalavrasSemelhantes("Pro", ["programação", "mobile", "professional"]) // retornara ["programação", "professional"]
 * buscarPalavrasSemelhantes("Python", ["javascript", "java", "c++"]) // retornara []
 */

function buscarPalavrasSemelhantes(frase, array){
    let newArray =[]

    array.forEach(element => {
        if(element.toLowerCase().includes(frase.toLowerCase())){
            newArray.push(element)
        }
    });
    return newArray
}

console.log(buscarPalavrasSemelhantes("Pro", ["programação", "mobile", "professional"]))
console.log(buscarPalavrasSemelhantes("Python", ["javascript", "java", "c++"]))