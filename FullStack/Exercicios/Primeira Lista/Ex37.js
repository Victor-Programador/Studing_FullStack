/* 37) 
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​ a1​ (o primeiro termo) e ​ r​ (a razão) e escreva os ​ n​ termos , 
bem como a soma dos elementos.  */



// Função que calcula e imprime os termos de uma Progressão Aritmética (PA)
// Parâmetros:
// n  -> quantidade de termos da progressão
// a1 -> primeiro termo da progressão
// r  -> razão (valor que é somado a cada novo termo)

function pA (n, a1, r) {

    // Loop que percorre do 0 até n-1 para gerar os n termos da PA
    for (let i = 0; i < n; i++) {

        // Fórmula do termo geral da PA:
        // an = a1 + r*i
        // onde:
        // a1 = primeiro termo
        // r  = razão
        // i  = posição do termo (começando em 0)
        console.log(a1 + r*i)
    }

    // Cálculo da soma dos termos da PA
    // Fórmula matemática da soma:
    // S = n * (a1 + an) / 2
    // onde:
    // an = último termo = a1 + (n-1)*r
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}



// Função que calcula e imprime os termos de uma Progressão Geométrica (PG)
// Parâmetros:
// n  -> quantidade de termos
// a1 -> primeiro termo
// r  -> razão (valor pelo qual cada termo é multiplicado)

function pG (n, a1, r) {

    // Loop que percorre do 0 até n-1 para gerar os n termos da PG
    for(let i = 0; i < n; i++){

        // Fórmula do termo geral da PG:
        // an = a1 * r^i
        // r^i significa r elevado a i
        // Em JavaScript usamos ** para potência
        console.log(a1*(r**i))
    }

    // Cálculo da soma da PG
    // Fórmula matemática:
    // S = a1 * (r^n - 1) / (r - 1)
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}



// Chamando a função de Progressão Aritmética
// n = 10 termos
// a1 = primeiro termo = 10
// r = razão = 15
pA(10, 10, 15)


// Apenas imprime uma linha para separar os resultados no console
console.log('----------------');


// Chamando a função de Progressão Geométrica
// n = 10 termos
// a1 = primeiro termo = 5
// r = razão = 3
pG(10, 5, 3)