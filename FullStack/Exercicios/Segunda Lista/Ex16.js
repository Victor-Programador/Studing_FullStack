/* A fim de manter o canlendario anual ajustado com movimento de translação da terra, criou-se os anos bissextos, que tem 366 dias em vez dos 365 presentes nos anos nomrmais.

para determinar se um ano é bissexto, é necessário saber se ele é um multiplo de 4. não pode ser multiplo de 100, exeto se for também mutiplo de 400.

com isso em mente, desenvolva uma função que recebe um numero correspondente a um ano e retorne se ele é bissexto ou não.

exemplos: 

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é multiplo de 100 e não é multiplo de 400 */

function checarAnoBissexto(ano){
    if((ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0)){
        return true
    }return false
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))