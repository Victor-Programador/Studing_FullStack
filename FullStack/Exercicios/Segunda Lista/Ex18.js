/* Voce está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possivel adicionar produtos ou serviços, informando nome, categoria e preço. 
Uma funcionalidade que voce está desenvolvendo no momento é a de somar o total das despesas.

crie uma função que receba um array de produtos e retorne o total das despesas.

Exemplos: 

despesasTotais([
    {nome: "jornal online", categoria: "informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) //retornará 239.99 

despesasTotais([
    {nome: "Galaxy s20", categoria: "Eletronicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletronicos", preco: 30999.90}
]) // retornara 34599.99

*/

function despesasTotais(array){

    let newArray = array

    const resultado = newArray.map(a => a.preco).reduce(function(acumulador, atual){
        return acumulador + atual
    }, 0)

    return resultado
}


console.log(despesasTotais([
    {nome: "jornal online", categoria: "informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

console.log(despesasTotais([
    {nome: "Galaxy s20", categoria: "Eletronicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletronicos", preco: 30999.90}
]))
