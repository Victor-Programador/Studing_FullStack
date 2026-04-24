/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo 

Exemplos:

maiorOuIgual(0, 0) // retornara true
maiorOuIgual(0, "0") // retornara false
maiorOuIgual(5, 1) // retornara true*/

const maiorOuIgual = (num1, num2) => typeof num1 === 'number' && typeof num2 === 'number' && num1 >= num2
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual('5', 1))