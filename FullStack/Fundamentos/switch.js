const imprimirResrultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Invalido')
    }
}

imprimirResrultado(5)
imprimirResrultado(5.8)
imprimirResrultado(50)
imprimirResrultado(0)
imprimirResrultado(10)
imprimirResrultado(9)
imprimirResrultado(8)
imprimirResrultado(7)
imprimirResrultado(6)
imprimirResrultado(4)
