/**Faça uma função que recebe a base e a altura de um triangulo e retorne a área desse triângulo. A precisão devera der de duas casas decimais, arredondando se necessario. 
 * 
 * obs: a formula para calcular a área de um triangulo é (base x altura) / 2
 * 
 * Exemplos: 
 * 
 * 
 * areaDoTriangulo(10, 15) // retornara 75.00
 * areaDoTriangulo(7, 9) // retornará 31.50
 * areaDoTriangulo(9.25, 13.1) // retornará 60.59
 * 
 */

function areaDoTriangulo(valor1, valor2){
    let resultado = (valor1 * valor2) / 2
    return resultado.toFixed(2)
}

console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))