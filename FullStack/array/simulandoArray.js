const saborArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}

console.log(saborArray)

Object.defineProperty(saborArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(saborArray[0])
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(saborArray.toString(), meuArray)