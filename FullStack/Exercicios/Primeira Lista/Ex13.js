/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaUtil(num){
    switch (num){
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda")
            break
        case 3:
            console.log("Terça")
            break
        case 4:
            console.log("Quarta")
            break
        case 5:
            console.log("Quinta")
            break
        case 6:
            console.log("Sexta")
            break
        case 7:
            console.log("Sabado")
            break
        default:
            console.log("Invalido!")
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)
diaUtil(0)
