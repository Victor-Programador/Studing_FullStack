/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e
 o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */

 function intervalo(vetor){
    let dentro = 0
    let fora = 0

    for(let numero of vetor){
        if(numero >= 10 && numero <= 20){
            dentro++
        }else{
            fora++
        }
    }console.log(`total de ${dentro} estão no intervalo\ne ${fora} estão fora do intervalo`)
 }

 intervalo([1,10,12,13,20,2,3,4])