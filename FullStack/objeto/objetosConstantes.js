// pessoa > 123 > {...}
const pessoa = {nome: "joao"}
pessoa.nome = "pedro"
console.log(pessoa)

// pessoa > 456 > {...}
//pessoa = {nome: "Ana"}
//console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = "maria"

const pessoaConstante = Object.freeze({nome: "paulo"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)