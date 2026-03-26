/* 23)
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.  */

function aluno(codigo, n1, n2, n3) {

    // Descobrir a maior nota
    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    // Calcular média ponderada
    // Maior nota peso 4
    // Outras duas peso 3

    let media = ((n1 + n2 + n3) + maior) / 10;

    // Verificar situação
    if (media >= 5) {
        console.log("Código:", codigo);
        console.log("Notas:", n1, n2, n3);
        console.log("Média:", media);
        console.log("APROVADO");
    } else {
        console.log("Código:", codigo);
        console.log("Notas:", n1, n2, n3);
        console.log("Média:", media);
        console.log("REPROVADO");
    }
}


// Exemplos
aluno(1, 6, 8, 7);
aluno(2, 2, 4, 3);