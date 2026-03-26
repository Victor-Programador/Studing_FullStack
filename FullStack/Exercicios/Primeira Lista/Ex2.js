/* 
02)Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo).

*/

function triângulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 == lado3){
        console.log('Os 3 lados fornecidos por voce são exatamente iguais, isso se configura num triangulo EQUILÁTERO')
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log('Dos 3 lados fornecidos por voce, apenas dois são iguais, então o seu triangulo se configura em um ISÓSCELES')
    }else{
        console.log('Todos os lados são diferentes, então seu triangulo se configura num ESCALENO')
    }
}

triângulo(2,2,2)
triângulo(2,3,3)
triângulo(2,3,1)