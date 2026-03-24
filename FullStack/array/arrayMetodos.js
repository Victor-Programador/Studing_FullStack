const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()// remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Victor')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton', 'Minato', 'Papaleguas') //insere o elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Hugo')// significa que vou adicionar no indice 2, antes do papaleguas
console.log(pilotos)

//remover

pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)