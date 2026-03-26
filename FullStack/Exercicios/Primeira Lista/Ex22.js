/*  22)
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */


function anuidade(mes, valor){
    let data = mes
    let inicial = valor
    let resultado
    const taxa = 0.05

    switch(data){
        case 1:
            resultado = inicial
            data = "Janeiro"
            break
        case 2:
            resultado = inicial * (1 + taxa) ** 1
            data = "Fevereiro"
            break
        case 3:
            resultado = inicial * (1 + taxa)**2
            data = "Março"
            break
        case 4:
            resultado = inicial * (1 + taxa)**3
            data = "Abril"
            break
        case 5:
            resultado = inicial * (1 + taxa)**4
            data = "Maio"
            break
        case 6:
            resultado = inicial * (1 + taxa)**5
            data = "Junho"
            break
        case 7:
            resultado = inicial * (1 + taxa)**6
            data = "Julho"
            break
        case 8:
            resultado = inicial * (1 + taxa)**7
            data = "Agosto"
            break
        case 9:
            resultado = inicial * (1 + taxa)**8
            data = "Setembro"
            break
        case 10:
            resultado = inicial * (1 + taxa)**9
            data = "Outubro"
            break
        case 11:
            resultado = inicial * (1 + taxa)**10
            data = "Novembro"
            break
        case 12:
            resultado = inicial * (1 + taxa)**11
            data = "Dezembro"
            break
        default:
            console.log("ERRO!!!")
            break
    }

    console.log(`voce pagara no mes de ${data} o valor de ${resultado}`)

}



anuidade(12, 100)