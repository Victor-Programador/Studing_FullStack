/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’  */

function extenso(num){
    let numero
    switch(num){
        case 0:
            numero = "Zero"
            break
        case 1:
            numero = "Um"
            break
        case 2:
            numero = "Dois"
            break
        case 3:
            numero = "Três"
            break
        case 4:
            numero = "Quatro"
            break
        case 5:
            numero = "Cinco"
            break
        case 6:
            numero = "Seis"
            break
        case 7:
            numero = "Sete"
            break
        case 8:
            numero = "Oito"
            break
        case 9:
            numero = "Nove"
            break
        case 10:
            numero = "Dez"
            break
        default:
            numero = "ERRO: Digite um numero entre 0 e 10!"
    }

    console.log(numero)
}

extenso(0)
extenso(1)
extenso(2)
extenso(3)
extenso(4)
extenso(5)
extenso(6)
extenso(7)
extenso(8)
extenso(9)
extenso(10)