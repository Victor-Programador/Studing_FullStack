/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.  */

// Criação dos três vetores pedidos no exercício

let vetorInteiro = [1, 2, 3, 4] // vetor contendo números inteiros
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino'] // vetor contendo strings
let vetorDouble = [1.1, 2.2, 3.3, 4.4] // vetor contendo números decimais


// Função responsável por concatenar (unir) os vetores
// ...args significa que a função pode receber qualquer quantidade de parâmetros

function concatenar (...args) {

    // Criamos um vetor vazio que será usado para armazenar o resultado final
    resultado = []

    // Loop que percorre todos os argumentos enviados para a função
    // arguments.length representa a quantidade de parâmetros que foram passados
    for(let i = 0; i < arguments.length; i++){

        // arguments[i] representa cada argumento enviado
        // Exemplo:
        // arguments[0] → primeiro vetor enviado
        // arguments[1] → segundo vetor enviado
        // arguments[2] → terceiro vetor enviado
        
        // Aqui usamos concat() para juntar o vetor atual com o resultado
        // A cada repetição do loop um novo vetor é adicionado ao resultado
        resultado = resultado.concat(arguments[i])
    }

    // Ao final da função retornamos o vetor já concatenado
    return resultado;
}


// Aqui chamamos a função passando dois vetores
// A função irá juntar os dois vetores e mostrar o resultado no console
console.log(concatenar(vetorInteiro, vetorDouble))


// Aqui chamamos novamente a função com outros dois vetores
// O processo será o mesmo: percorrer os vetores e juntá-los em um só
console.log(concatenar(vetorDouble, vetorString))