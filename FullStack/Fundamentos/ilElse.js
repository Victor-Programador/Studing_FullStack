const imprimirResrultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResrultado(7)
imprimirResrultado(5)
imprimirResrultado('epa')   