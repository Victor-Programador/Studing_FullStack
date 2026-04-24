/* Crie uma função que recebe um numero de (1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro" pois este é o 2° mês.

Exemplos:

nomeDoMes(1) // retornará "Janeiro"
nomeDoMes(4) // retornará "abril"*/

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const nomeDoMes = numero => mes[numero-1] ?? "Mes invalido!"

console.log(nomeDoMes(13))