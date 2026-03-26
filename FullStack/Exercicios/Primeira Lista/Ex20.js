/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


function cedulas(num) {

    let valor = num
    let resto = 0
    let cem = 0
    let cinquenta = 0
    let dez = 0
    let cinco = 0
    let um = 0
    let resposta = `para o valor de ${num} voce recebera:`


    if (valor >= 100) {
        resto = valor % 100
        cem = (valor - resto) / 100
        valor = resto
        resposta = resposta + `${cem} notas de R$100 `
    }
    if (valor >= 50) {
        resto = valor % 50
        cinquenta = (valor - resto) / 50
        valor = resto
        resposta = resposta + `${cinquenta} notas de R$50  `
    }
    if (valor >= 10) {
        resto = valor % 10
        dez = (valor - resto) / 10
        valor = resto
        resposta = resposta + `${dez} notas de R$10 `
    }
    if (valor >= 5) {
        resto = valor % 5
        cinco = (valor - resto) / 5
        valor = resto
        resposta = resposta + `${cinco} notas de R$5 `
    }
    if (valor >= 1) {
        resto = valor % 1
        um = (valor - resto) / 1
        valor = 0
        resposta = resposta + `${um} notas de R$1 `
    }


    console.log(resposta)
}

cedulas(291)

