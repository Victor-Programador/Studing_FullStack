/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(num) {
    let resultado = 1
    let fatorado = num + "! = "
    if (num === 0) {
        return `${num}! = 1`
    } else {
        
        for (let i = num; i >= 1; i--) {
            resultado = resultado * i
            if (i != 1) {
                fatorado = fatorado + i + " x "
            } else {
                fatorado = fatorado + i + " = "
            }


        }
    }

    return `${fatorado} ${resultado}`

}


console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(11))