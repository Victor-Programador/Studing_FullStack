/*
------------------------------------------------------------
EXERCÍCIO 17 — Cálculo de Aumento Salarial (Switch)

OBJETIVO:
Criar uma função que calcule o novo salário de um funcionário
com base no seu plano de trabalho.

ENTRADAS DA FUNÇÃO:
- Plano de trabalho do funcionário (string)
- Salário atual (número)

REGRAS DE AUMENTO:

Plano A → aumento de 10%
Plano B → aumento de 15%
Plano C → aumento de 20%

REQUISITOS:
✔ Utilizar a estrutura SWITCH
✔ Calcular o novo salário com base no plano informado
✔ Exibir o novo salário após o aumento
✔ Criar um caso DEFAULT informando que o plano é inválido

EXEMPLO:
Entrada: Plano "A", salário 1000
Saída: Novo salário = 1100

------------------------------------------------------------
*/

function aumento(plano, salario){
    let porcentual
    switch(plano.toUpperCase()){
        case "A":
            porcentual = 0.10
            break
        case "B":
            porcentual = 0.15
            break
        case "C":
            porcentual = 0.20
            break
        default:
            return `Selecione um dos planos: A, B ou C.`
    }

    const novoSalario = salario + (salario * porcentual)
    return `Novo salario = ${novoSalario.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`
}

console.log(aumento("a", 1000))
console.log(aumento("b", 1000))
console.log(aumento("c", 1000))
console.log(aumento("d", 1000))