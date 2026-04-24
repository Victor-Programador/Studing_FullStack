/** Criar uma função que receba um array de números e retorne o menor número desse array.
 * 
 * Exemplos:
 * 
 * menorNumero([10, 5, 35, 65]) // retornará 5
 * menorNumero([5, -15, 50, 3]) // retornará -15
 * 
*/


function menorNumero(array){
    let minimo = array[0]

    array.forEach(element => {
        if(element < minimo){
            minimo = element
        }
    });
    return minimo
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))