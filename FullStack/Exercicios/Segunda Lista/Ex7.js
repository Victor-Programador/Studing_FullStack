/* Crie uma função que receba quatro numeros como parametro (numero, minimo, maximo, inclusivo) e retorne se o parametro numero (o primeiro) está entre minimo e maximo. 
Quando o parametro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se o numero é igual a minimo ou maximo. 
Caso o parametro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou maximo.

Exemplos:

estaEntre(10, 50, 100) // retornara true
estaEntre(16, 100, 160) // retornara false 
estaEntre(3, 3, 150) // retornara false
estaEntre(3, 3, 150, true) // retrnara true */

function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo === false){
        if(numero > minimo && numero < maximo){
            return true
        }else{
            return false
        }
    }else{
        if(numero >= minimo && numero <= maximo){
            return true
        }else{
            return false
        }
    }
}


console.log(estaEntre(16, 100, 160)) // retornara false 
console.log(estaEntre(10, 50, 100)) //retornara false
console.log(estaEntre(3, 3, 150)) //retornara false
console.log(estaEntre(3, 3, 150, true)) // retrnara true