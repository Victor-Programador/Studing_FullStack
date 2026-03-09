Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResrultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Qadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Se fudeu otariooo!!!!')
    }else {
        console.log('Nota invalida')
    }
}


imprimirResrultado(1)