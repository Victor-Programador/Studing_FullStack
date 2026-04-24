/**Desenvolva uma função que receba como parametro um numero de 1 a 10. internamente, na função, será gerado um numero aleatorio de 1 a 10. 
 * A função deverá retornar se o parametro de entrada foi igual, ao numero sorteado internamente. se o valor fornecido foi o sorteado, retorne "Parabens! O numero sorteado foi o X". 
 * Se não for igual, retorne "Que pena! O numero sorteado foi o X". X é o numero que foi sorteado.
 * 
 * Exemplos:
 * 
 * funcaoDaSorte(10) // retornara "Parabens! o numero sorteado foi o 10"
 * funcaoDaSorte(5) // retornara "Que pena! o numero sorteado foi o 3"
 * funcaoDaSorte(5) // retornara "Que pena! o numero sorteado foi o 1"
 */

function funcaoDaSorte(num){
    let sorteado = Math.floor(Math.random() * 10 ) + 1
    if(sorteado === num){
        return `Parabens! o numero sorteado foi o ${sorteado}`
    }else{
        return `Que pena! o numero sorteado foi o ${sorteado}`
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))