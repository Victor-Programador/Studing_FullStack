/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.  */


function altura(cr1, tx1, cr2, tx2){
    let resultado
    let menor
    let taxa1
    let maior
    let taxa2
    let ano = 0

    let menorInicial
    let maiorInicial

    if(cr1 === cr2){
        resultado = "Ambas tem a mesma altura!"
    }else if(cr1 < cr2){
        menor = cr1
        taxa1 = tx1
        maior = cr2
        taxa2 = tx2
    }else{
        menor = cr2
        taxa1 = tx2
        maior = cr1
        taxa2 = tx1
    }

    maiorInicial = maior
    menorInicial = menor

    while(menor <= maior){
        if(ano >= 100){
            return "Mesmo após 100 anos a criança menor não conseguiu ultrapassar a maior"
        }
        menor += taxa1
        maior += taxa2
        ano++
    }

    return `Após ${ano} anos a criança menor superou a maior em altura \n  criança menor iniciou com a altura de ${menorInicial} e alcançou a altura de ${menor} \n 
    criança maior iniciou com ${maiorInicial} e alcançou a altura de ${maior}`

}


console.log(altura(1.80, 0.1, 1.00, 0.6))