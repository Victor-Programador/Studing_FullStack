/**Numa aplicação Web de investimento financeiro da qual voce faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números 
 * informados pelo usuario.
 * 
 * com o intuito de realizar esse calculo, crie uma função que receba um array com uma quantidade indeterminada de numeros e retorne a média simples desses numeros.
 * 
 * a média simples é o resultado da soma de todos os números dividido pela quantidade de numeros.
 * 
 * Exemplos: 
 * 
 * calcularMedia([0, 10]) // retornara 5
 * calcularMedia([1, 2, 3, 4, 5]) // retornara 3
 */

function calcularMedia(array){
    let resultado = 0
    array.forEach(element => {
        resultado += element
    });

    return resultado = resultado / array.length
    
}


console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

