/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/


function contido(string1, string2) {

    // Transformamos as duas palavras em maiúsculas
    // Isso garante que "A" e "a" sejam considerados iguais
    let palavra1 = string1.toUpperCase()
    let palavra2 = string2.toUpperCase()

    // Vamos verificar se todas as letras da palavra1 existem na palavra2
    for (let i = 0; i < palavra1.length; i++) {

        // Pegamos uma letra da palavra1
        let letra = palavra1.charAt(i)

        // Verificamos se essa letra existe dentro da palavra2
        // includes() retorna true se encontrar a letra e false se não encontrar
        if (!palavra2.includes(letra)) {

            // Se alguma letra da palavra1 não existir na palavra2
            // já sabemos que não atende a condição do exercício
            return false
        }
    }

    // Agora fazemos o mesmo processo ao contrário
    // Verificamos se todas as letras da palavra2 existem na palavra1
    for (let i = 0; i < palavra2.length; i++) {

        // Pegamos uma letra da palavra2
        let letra = palavra2.charAt(i)

        // Verificamos se essa letra existe dentro da palavra1
        if (!palavra1.includes(letra)) {

            // Se alguma letra da palavra2 não existir na palavra1
            return false
        }
    }

    // Se chegou até aqui significa que:
    // - todas as letras da palavra1 existem na palavra2
    // - todas as letras da palavra2 existem na palavra1
    // Então retornamos true
    return true
}


// Teste da função
console.log(contido("roma", "amor")) // true
console.log(contido("casa", "carro")) // false

