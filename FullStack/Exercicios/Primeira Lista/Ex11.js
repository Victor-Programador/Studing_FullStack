/* 11) 
As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  */


function bissexto(ano){
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        return `${ano} é bissexto!`
    }

    return `${ano} Não é bissexto!`
}


console.log(bissexto(2024)) // bissexto
console.log(bissexto(2100))
console.log(bissexto(2026))
console.log(bissexto(2027))
console.log(bissexto(2028)) //bissexto
console.log(bissexto(2029))
console.log(bissexto(2030))
console.log(bissexto(2031))
console.log(bissexto(2032)) //bissexto
console.log(bissexto(2033))