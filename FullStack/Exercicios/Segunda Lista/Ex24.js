/**Desenvolva uma função que recebe um caractere e uma string como parametros e retorne a quantidade de vezes que o caractere se repete na string. 
 * A função deverá ser case-sensitive, ou seja, irá diferenciar maiusculas de minisculas
 * 
 * Exemplo: 
 * 
 * contarCaractere("r", "A sorte favorece os audazezes") //retornara 2
 * contarCaractere("c", "Conhecer-te a ti mesmo") // retornara 1
 */


function contarCaractere(caractere, frase){
    return frase.split(caractere).length - 1
}


console.log(contarCaractere("r", "A sorte favorece os audazezes"))
console.log(contarCaractere("c", "Conhecer-te a ti mesmo"))

