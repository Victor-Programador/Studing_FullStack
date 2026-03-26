/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o 
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa 
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer 
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para 
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).  */


// Função responsável por receber um número com possível erro de precisão
// (ex: 0.3000004) e exibir o valor formatado como moeda brasileira
function valor(num){

    // PASSO 1:
    // Multiplicamos o número por 100.
    // Isso "move" a vírgula duas casas para a direita,
    // transformando centavos em números inteiros.
    // Ex: 0.3000004 → 30.00004
    let val1 = num * 100

    // PASSO 2:
    // Usamos Math.round() para arredondar o valor.
    // Agora o número vira um inteiro, eliminando o erro
    // de precisão causado por ponto flutuante.
    // Ex: 30.00004 → 30
    let val2 = Math.round(val1)

    // PASSO 3:
    // Dividimos novamente por 100 para devolver
    // o número à sua escala original (com duas casas decimais).
    // Ex: 30 → 0.30
    let val3 = val2 / 100

    // PASSO 4:
    // Exibimos o valor formatado no padrão brasileiro.
    // toLocaleString("pt-BR") aplica:
    // - vírgula como separador decimal
    // - padrão numérico do Brasil
    //
    // minimumFractionDigits: 2 → garante pelo menos 2 casas decimais
    // maximumFractionDigits: 2 → limita no máximo a 2 casas
    //
    // Isso força a saída "0,30" em vez de "0,3".
    console.log(`R$ ${val3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`)
}

// Teste da função
valor(0.3000004)