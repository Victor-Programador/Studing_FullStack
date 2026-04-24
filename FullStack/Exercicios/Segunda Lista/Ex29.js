/**Crie uma função que recebe um array de numeros e retorna o segundo maior numero presente nesse array.
 * 
 * Exemplos:
 * 
 * segundoMaior([12, 6, 1, 5, 8]) // retornara 8
 * segundoMaior([8, 4, 5, 6]) // retornara 6
 */

function segundoMaior(array){
    let maior = -Infinity
    let segundoMaior = -Infinity
    array.forEach(element => {
        if(element > maior){
            segundoMaior = maior
            maior = element
        }else if(element < maior && element > segundoMaior){
            segundoMaior = element
        }
    });

    return segundoMaior
}

console.log(segundoMaior([12, 6, 1, 5, 8]))
console.log(segundoMaior([8, 4, 5, 6]))
console.log(segundoMaior([10, 20, 30, 40]))
console.log(segundoMaior([1,2,3,4,5]))