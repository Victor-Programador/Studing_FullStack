/* escreva uma função que receba um valor booleano ou numerico. Se o parametro fornecido for booleano, o retorno da função deverá ser o inverso. 
Por exemplo, se a entrada for false, retornara true. se o parametro for numérico, o retorno será o numero inverso. 
por exemplo se for fornecido 1 o retorno será -1. Se o parametro de entrada não for de nenhum dostipo acima, retorne booleano ou numero esperados mas o parametro é do tipo... 


exemplo:


inverso(true) //retornara false
inverso("6") //retornará "booleano ou numero esperado, mas o parametro é do tipo string"
inverso(-2000) //retornara 2000
inverso("programação") //retornara booleano ou numero esperado, mas o parametro é do tipo string  */

function inverso(valor){
    if(typeof valor === 'number'){
        return -valor
    }else if(typeof valor === 'boolean'){
        return !valor
    }else{
        return `booleano ou numero esperado, mas o parametro é do tipo ${typeof valor} `
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("1"))
console.log(inverso(-10))
console.log(inverso(10))
console.log(inverso(0))