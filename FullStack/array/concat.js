const filhas = ['Valeska', 'Cibalena']
const filhos = ['Whashington', 'igor']

const Todos = filhas.concat(filhos, 'Fulano')
console.log(filhas, filhos, Todos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7], [8, 9]]))