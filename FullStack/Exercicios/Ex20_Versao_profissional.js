function cedulas(valor) {

    /*
    ============================================================
    1️⃣ VALIDAÇÃO DE ENTRADA
    ============================================================
    Verificamos se o valor informado:
    - É um número inteiro
    - Não é negativo

    Number.isInteger(valor) → retorna true se for inteiro
    ! → negação (se NÃO for inteiro)
    || → OU lógico
    */

    if (!Number.isInteger(valor) || valor < 0) {
        console.log("Por favor, informe um valor inteiro e positivo.");
        return; // Encerra a função imediatamente
    }

    /*
    ============================================================
    2️⃣ CASO ESPECIAL: VALOR ZERO
    ============================================================
    Se o valor for 0, não precisamos calcular nada.
    */

    if (valor === 0) {
        console.log("Nenhuma cédula necessária.");
        return; // Encerra a função
    }

    /*
    ============================================================
    3️⃣ DEFINIÇÃO DAS NOTAS DISPONÍVEIS
    ============================================================
    Criamos um array com os valores das cédulas.
    Usamos const porque essa lista não será alterada.

    O código vai percorrer esse array automaticamente.
    Se amanhã surgir uma nova nota, basta adicioná-la aqui.
    */

    const notas = [100, 50, 10, 5, 1];

    /*
    ============================================================
    4️⃣ MONTAGEM DA RESPOSTA
    ============================================================
    Criamos uma string que armazenará a mensagem final.
    \n significa quebra de linha.
    */

    let resposta = `Para o valor de R$ ${valor}, você receberá:\n`;

    /*
    ============================================================
    5️⃣ LOOP PRINCIPAL
    ============================================================
    O for percorre cada valor dentro do array "notas".

    Fluxo:
    1ª volta → nota = 100
    2ª volta → nota = 50
    3ª volta → nota = 10
    4ª volta → nota = 5
    5ª volta → nota = 1
    */

    for (let nota of notas) {

        /*
        Calculamos quantas notas daquele valor cabem no valor atual.

        Exemplo:
        Se valor = 291 e nota = 100
        291 / 100 = 2.91
        Math.floor() pega apenas a parte inteira → 2
        */

        const quantidade = Math.floor(valor / nota);

        /*
        Só adicionamos na resposta se a quantidade for maior que 0.
        Isso garante que apenas as notas utilizadas apareçam.
        */

        if (quantidade > 0) {

            /*
            Acrescentamos a informação na string resposta.
            += significa: pegue o que já tem e adicione isso ao final.
            */

            resposta += `${quantidade} nota(s) de R$ ${nota}\n`;

            /*
            Atualizamos o valor com o resto da divisão.
            %= é equivalente a: valor = valor % nota

            Exemplo:
            291 % 100 = 91
            Então o valor passa a ser 91 para a próxima iteração.
            */

            valor %= nota;
        }
    }

    /*
    ============================================================
    6️⃣ EXIBIÇÃO FINAL
    ============================================================
    Após o loop terminar, mostramos a resposta completa.
    */

    console.log(resposta);
}

/*
============================================================
7️⃣ CHAMADA DA FUNÇÃO
============================================================
Aqui estamos testando a função com o valor 291.
*/

cedulas(291);