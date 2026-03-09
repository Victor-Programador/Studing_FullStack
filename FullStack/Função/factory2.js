// exemplo feito por mim sem nenhuma ajuda

function criarPrduto(nome, preco, desconto = 10){
    return{
        Nome: nome,
        Preço: preco,
        desconto: `Um desconto de ${desconto}% pode ser aplicado ao Produto`,
        PreçoComDesconto: preco - (preco * desconto / 100)
    }
}

const produto1 = new criarPrduto('Perfume', 100)
const produto2 = new criarPrduto('jequi', 300)
const produto3 = new criarPrduto('Pistola', 200, 100)

console.log(produto1)
console.log(produto2)
console.log(produto3)

// exemplo do professor

function criarPrduto2(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarPrduto2('notebook', 200))

// comparando com o dele, acredito que eu tenha entendido, porem eu fiz mais coisa do que deveria, mas não fiz errado.