/*
4)Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores. 
*/ 


function divisao(a, b){
    let calculo = a / b
    let resto = a % b

    console.log(`${a} Dividido por ${b} é igual à: ${calculo} com resto: ${resto}`)
}

divisao(33,2)