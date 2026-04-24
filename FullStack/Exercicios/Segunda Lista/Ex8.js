/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.
Porém, não utilize o operador de multiplicação. 

Exemplo:


multiplicar (5 , 5) // retornara 25 
multiplicar (0, 7) // retornara 0 */


function multiplicar(valor1, valor2){

    let val1 = valor1
    let val2 = valor2

    
    let resultado = 0

    if(val1 < 0 || val2 < 0){
        return "Não é possivel fazer a multiplicação com valores negativos!"
    }else if(val1 === 0 || val2 === 0){
        return 0
    }else {
        for(let i = 0; i < val2; i++){
            resultado += val1
        }
        return resultado
    }
}

console.log(multiplicar(5, 5))