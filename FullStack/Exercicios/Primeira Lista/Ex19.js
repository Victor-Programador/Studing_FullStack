/*
------------------------------------------------------------
EXERCÍCIO 19 — Sistema de Pedido de Lanchonete (Switch)

OBJETIVO:
Criar uma função que calcule o valor total a ser pago por um
item pedido em uma lanchonete.

ENTRADAS DA FUNÇÃO:
- Código do produto (número)
- Quantidade desejada (número)

CARDÁPIO:

Código | Produto              | Preço
-----------------------------------------
100    | Cachorro Quente      | R$ 3,00
200    | Hambúrguer Simples   | R$ 4,00
300    | Cheeseburguer        | R$ 5,50
400    | Bauru                | R$ 7,50
500    | Refrigerante         | R$ 3,50
600    | Suco                 | R$ 2,80

REGRAS:
✔ Cada execução da função calcula apenas UM item
✔ O valor total = preço do produto × quantidade
✔ Utilizar a estrutura SWITCH para identificar o produto
✔ Criar um caso DEFAULT para código inexistente

SAÍDA ESPERADA:
- Mostrar o nome do produto
- Mostrar a quantidade
- Mostrar o valor total a pagar

EXEMPLO:
Entrada: código 100, quantidade 2
Saída: Cachorro Quente - Total = R$ 6,00

------------------------------------------------------------
*/


function lanche(codigo, quantidade){
    let total
    let preco
    let produto
    switch(codigo){
        case 100:
            preco = 3
            produto = 'Cachorro Quente'
            break
        case 200:
            preco = 4
            produto = 'Hamburguer Simples'
            break
        case 300:
            preco = 5.5
            produto = 'Cheeseburguer'
            break
        case 400:
            preco = 7.5
            produto = 'Bauru'
            break
        case 500:
            preco = 3.5
            produto = 'Refrigerante'
            break
        case 600:
            preco = 2.8
            produto = 'Suco'
            break
        default:
            return "Produto inexistente!"
    }
    total = quantidade * preco
    return `${produto} ${quantidade}x Total = ${total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`
}


console.log(lanche(100, 5))
console.log(lanche(200, 5))
console.log(lanche(300, 5))
console.log(lanche(400, 5))
console.log(lanche(500, 5))
console.log(lanche(600, 5))
console.log(lanche(700, 5))